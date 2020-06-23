from rest_framework import serializers

from shipping.models import Shipping


class ShippingSerializer(serializers.ModelSerializer):
    shipping_option = serializers.CharField(source='get_shipping_option_display')

    class Meta:
        model = Shipping
        fields = ("id", "name", "address", "email", "phone", "shipping_option")


class ShippingWriteSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Shipping
        fields = ("id", "user", "name", "address", "email", "phone", "shipping_option")
