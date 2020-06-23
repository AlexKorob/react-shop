from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from products.models import Product

User = get_user_model()


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="cart")

    def __str__(self):
        return f"Cart of {self.user.username}"


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="cart_items")
    count = models.SmallIntegerField()
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="cart_items")

    def __str__(self):
        return f"{self.count} {self.product.name} in {self.cart.user.username} cart"


@receiver(post_save, sender=User)
def create_cart(sender, instance=None, created=False, **kwargs):
    if instance and created:
        Cart.objects.create(user=instance)


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
