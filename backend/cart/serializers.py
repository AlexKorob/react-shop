from rest_framework import serializers

from backend.fields import PrimaryKeyRelatedSerializedField
from rest_framework.exceptions import ValidationError

from cart.models import CartItem
from products.models import Product
from products.serializers import ProductSerializer


class CartItemSerializer(serializers.ModelSerializer):
    product = PrimaryKeyRelatedSerializedField(
        serializer=ProductSerializer,
        queryset=Product.objects.all()
    )

    class Meta:
        model = CartItem
        fields = ("id", "count", "product")

    def __init__(self, *args, **kwargs):
        super().__init__(self, *args, **kwargs)
        self.fields["product"].context.update(self.context)

    def create(self, validated_data):
        validated_data["cart"] = self.context.get("request").user.cart
        return super().create(validated_data)

    def validate_product(self, value):
        if self.context["request"].user.cart.cart_items.filter(product=value).exists():
            raise ValidationError("This product already in cart")
        return value
