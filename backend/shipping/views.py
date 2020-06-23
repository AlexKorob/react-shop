from rest_framework.permissions import IsAuthenticated, SAFE_METHODS
from rest_framework.viewsets import ModelViewSet

from shipping.models import Shipping
from shipping.serializers import ShippingSerializer, ShippingWriteSerializer


class ShippingModelView(ModelViewSet):
    permission_classes = (IsAuthenticated, )

    def get_serializer_class(self):
        if self.request.method not in SAFE_METHODS:
            return ShippingWriteSerializer
        return ShippingSerializer

    def get_queryset(self):
        return Shipping.objects.filter(user=self.request.user)
