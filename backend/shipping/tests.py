from django.urls import reverse
from rest_framework import status

from backend.base_tests import APITestCaseWithAuthenticated
from shipping.models import Shipping


class ShippingAPITestCase(APITestCaseWithAuthenticated):

    def setUp(self):
        super().setUp()
        self.shipping = self.create_shipping()

    def create_shipping(self):
        data = {
            "address": "string",
            "email": "user@example.com",
            "phone": "+3089664320",
            "shipping_option": 10,
            "user": self.user
        }
        return Shipping.objects.create(**data)

    def test_get_shipping(self):
        self.create_shipping()
        response = self.client.get(reverse("shipping-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_create_shipping(self):
        shipping_count = Shipping.objects.count()
        data = {
            "address": "string",
            "email": "user@example.com",
            "phone": "+3089664320",
            "shipping_option": 10
        }
        response = self.client.post(reverse("shipping-list"), data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(shipping_count + 1, Shipping.objects.count())

    def test_create_shipping_with_invalid_email_and_phone(self):
        data = {
            "address": "string",
            "email": "user--example.com",
            "phone": "00000",
            "shipping_option": 10
        }
        response = self.client.post(reverse("shipping-list"), data=data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(len(response.data), 2)
        self.assertIn("email" and "phone",  response.data.keys())

    def test_update_shipping(self):
        response = self.client.patch(
            reverse("shipping-detail", kwargs={"pk": self.shipping.id}),
            data={"address": "AAA"}
        )
        self.shipping.refresh_from_db()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.shipping.address, "AAA")

    def test_delete_shipping(self):
        shipping_count = Shipping.objects.count()
        response = self.client.delete(reverse("shipping-detail", kwargs={"pk": self.shipping.id}))

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(shipping_count - 1, Shipping.objects.count())
