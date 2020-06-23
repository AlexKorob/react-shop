import re

from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.db import models

User = get_user_model()


def validate_phone(value):
    if not re.match(r"^\+?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,6})$", value):
        raise ValidationError("Invalid phone format")
    return value


class Shipping(models.Model):
    FREE_SHIPPING = 10
    EXPRESS_SHIPPING = 20
    COURIER_SHIPPING = 30

    SHIPPING_OPTION = [
        (FREE_SHIPPING, "Free shipping"),
        (EXPRESS_SHIPPING, "Express shipping"),
        (COURIER_SHIPPING, "Courier shipping"),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="shippings")
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    email = models.EmailField(max_length=80)
    phone = models.CharField(max_length=16, validators=(validate_phone, ), blank=True, null=True)
    shipping_option = models.SmallIntegerField(choices=SHIPPING_OPTION, default=FREE_SHIPPING)

    def __str__(self):
        return f"Shipping of {self.user.username}"
