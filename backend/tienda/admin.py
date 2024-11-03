from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Role)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(ProductImage)
admin.site.register(Cart)
admin.site.register(Inventory)
admin.site.register(CartItem)
admin.site.register(PaymentMethod)
admin.site.register(OrderItem)
admin.site.register(Payment)
admin.site.register(Order)
