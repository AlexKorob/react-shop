from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from cart.models import CartItem
from cart.serializers import CartItemSerializer


class CartItemModelView(ModelViewSet):
    permission_classes = (IsAuthenticated, )
    serializer_class = CartItemSerializer

    def get_queryset(self):
        return CartItem.objects.filter(cart=self.request.user.cart)
