from rest_framework.routers import DefaultRouter

from .views import CartItemModelView

router = DefaultRouter()
router.register(r"", CartItemModelView, basename="cart-item")
urlpatterns = router.urls
