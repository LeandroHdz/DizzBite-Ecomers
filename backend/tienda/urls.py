from django.urls import path
from .views import *

urlpatterns = [
    path('product/', ProductApiView.as_view(), name="product"),
    path('cart/', CardApiView.as_view(), name='cart-list'),  # Para GET y POST
    path('cart/<int:item_id>/', CardApiView.as_view(), name='cart-item'),  # Para PUT y DELETE
]