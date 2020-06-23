from django.urls import reverse
from rest_framework import status

from backend.base_tests import APITestCaseWithAuthenticated

from cart.models import CartItem
from products.models import Product


class CartAPITestCase(APITestCaseWithAuthenticated):
    fixtures = [
        "products/fixtures/products.json"
    ]

    def create_cart_item(self):
        return CartItem.objects.create(count=1, product=Product.objects.first(), cart=self.user.cart)

    def test_get_cart_items(self):
        self.create_cart_item()
        response = self.client.get(reverse("cart-item-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_create_cart_item(self):
        response = self.client.post(
            reverse("cart-item-list"),
            data={
                "product": Product.objects.first().id,
                "count": 1,
            }
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(CartItem.objects.count(), 1)
        self.assertEqual(CartItem.objects.first().product, Product.objects.first())
        self.assertEqual(CartItem.objects.first().count, 1)

    def test_create_duplicate_cart_item(self):
        response = self.client.post(
            reverse("cart-item-list"),
            data={
                "product": Product.objects.first().id,
                "count": 1,
            }
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        cart_items_count = CartItem.objects.count()
        response = self.client.post(
            reverse("cart-item-list"),
            data={
                "product": Product.objects.first().id,
                "count": 1,
            }
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(CartItem.objects.count(), cart_items_count)

    def test_update_cart_item(self):
        cart_item = self.create_cart_item()
        response = self.client.patch(
            reverse("cart-item-detail", kwargs={"pk": cart_item.id}),
            data={"count": 100}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(CartItem.objects.get(id=cart_item.id).count, 100)

        response = self.client.put(
            reverse("cart-item-detail", kwargs={"pk": cart_item.id}),
            data={
                "product": Product.objects.last().id,
                "count": 100,
                "cart": cart_item.cart.id,
            }
        )
        cart_item.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(cart_item.count, 100)
        self.assertEqual(cart_item.product, Product.objects.last())
        self.assertEqual(cart_item.cart, cart_item.cart)

    def test_delete_cart_item(self):
        cart_item = self.create_cart_item()
        cart_item_count = CartItem.objects.count()
        response = self.client.delete(reverse("cart-item-detail", kwargs={"pk": cart_item.id}))

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(CartItem.objects.count(), cart_item_count - 1)
