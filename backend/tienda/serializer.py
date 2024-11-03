from rest_framework import serializers
from .models import *

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['name']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'name', 'description', 'price', 'category_id', 'created_at', 'updated_at'
        ]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", 'parent_id']

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['product_id', 'img_url']

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['user_id', 'created_at', 'update_at']

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['cart_id', 'product_id', 'quantity']

class Inventory(serializers.ModelSerializer):
    class Meta:
        models = Inventory
        fields = ['product_id', 'quantity', 'reserved']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['order_id', 'amount', 'method_id', 'status', 'timestamp']

class PaymentMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentMethod
        fields = ["name", 'details']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['user_id', 'status', 'total_price', 'created_at', 'updated_at']

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['order_id', 'product_id', 'quantity', 'price']
