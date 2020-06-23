from django.contrib import admin
from django.utils.safestring import mark_safe

from products.models import Image, Product


class ImageInlineAdmin(admin.TabularInline):
    model = Image
    fields = ("show_image", "image")
    readonly_fields = ("show_image", )

    def show_image(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="150" height="150" />')
        return None


@admin.register(Product)
class ProductSerializerAdmin(admin.ModelAdmin):
    fields = ("title", "description", "price",)
    readonly_fields = ("images", )
    search_fields = ("title", "price")
    inlines = (ImageInlineAdmin, )
