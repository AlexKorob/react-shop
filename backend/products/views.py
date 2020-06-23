from rest_framework import generics

from products.models import Product
from products.serializers import ProductSerializer


class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
