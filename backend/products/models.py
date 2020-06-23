import os

from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver


class Product(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField(max_length=5000)
    price = models.DecimalField(max_digits=16, decimal_places=2)

    def __str__(self):
        return self.title


class Image(models.Model):
    image = models.ImageField(upload_to="product_images")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="images")

    def __str__(self):
        return self.image.url


@receiver(post_delete, sender=Image)
def delete_image_from_disk(sender, instance=None, **kwargs):
    if instance and os.path.isfile(instance.image.path):
        os.unlink(instance.image.path)
