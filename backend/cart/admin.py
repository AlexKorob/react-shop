from django.contrib import admin

from .models import Cart, CartItem


class CartItemInlineAdmin(admin.TabularInline):
    model = CartItem
    fields = ("product", "count")


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    fields = ("user", )
    search_fields = ("user.username", "user.email")
    inlines = (CartItemInlineAdmin, )
