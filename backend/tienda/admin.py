from django.contrib import admin
from .models import *

# Registro de modelos
admin.site.register(Role)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(ProductImage)
admin.site.register(Inventory)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Payment)
admin.site.register(PaymentMethod)
admin.site.register(ProductLike)  # Nuevo modelo
admin.site.register(HeroSectionItem)  # Nuevo modelo
admin.site.register(PromoCardItem)  # Nuevo modelo
