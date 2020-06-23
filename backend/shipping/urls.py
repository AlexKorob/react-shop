from rest_framework.routers import DefaultRouter

from .views import ShippingModelView

router = DefaultRouter()
router.register(r"", ShippingModelView, basename="shipping")
urlpatterns = router.urls
