from rest_framework import serializers

from products.models import Product, Image


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ("id", "image")


class ProductSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)

    class Meta:
        model = Product
        fields = ("id", "title", "description", "price", "images")

    def __init__(self, *args, **kwargs):
        super().__init__(self, *args, **kwargs)
        self.fields["images"].context.update(self.context)
