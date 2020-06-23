from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView

from users.utils import auth_request_body, auth_refresh_request_body


class AuthToken(ObtainAuthToken):
    @swagger_auto_schema(request_body=auth_request_body)
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class RefreshAuthToken(APIView):
    def get_token(self, key):
        try:
            return Token.objects.get(key=key)
        except Token.DoesNotExist:
            return None

    @swagger_auto_schema(request_body=auth_refresh_request_body)
    def post(self, request, *args, **kwargs):
        token = self.get_token(request.data.get('token'))
        if token:
            token.delete()
            user = token.user
            new_token = Token.objects.create(user=user)
            return Response({"token": new_token.key})
        return Response({"error": "User with this token does not exist"},
                        status=status.HTTP_400_BAD_REQUEST)
