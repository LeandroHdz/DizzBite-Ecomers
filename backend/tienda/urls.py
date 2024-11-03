from django.urls import path
from .views import *

urlpatterns = [
    path('product/', ProductApiView.as_view(), name="product")
]