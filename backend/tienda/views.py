from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Cart,CartItem
from .serializer import ProductSerializer,CartSerializer,CartItemSerializer
from django.shortcuts import get_object_or_404
from rest_framework.exceptions import NotFound
from django.db import IntegrityError, transaction


class ProductApiView(APIView):#para ver listado de product
    # Permite el acceso a usuarios no autenticados
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        # Obtiene todos los productos de la base de datos
        products = Product.objects.all()
        # Serializa los datos de los productos
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        return Response(status=status.HTTP_403_FORBIDDEN)
    def put(self, request):
        return Response(status=status.HTTP_403_FORBIDDEN)
    def delete(self, request):
        return Response(status=status.HTTP_403_FORBIDDEN)
    

class CardApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        try:
            cart = Cart.objects.get(user=request.user)  # Filtra por el usuario autenticado
            cart_items = CartItem.objects.filter(cart=cart)
            serializer = CartItemSerializer(cart_items, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Cart.DoesNotExist:
            return Response({"detail": "El carrito no existe."}, status=status.HTTP_404_NOT_FOUND)

    # Agregar un producto al carrito
    def post(self, request):
        try:
            # Obtener el usuario autenticado
            user = request.user

            # Obtener o crear un carrito para el usuario
            cart, created = Cart.objects.get_or_create(user=user)

            # Extraer datos del producto y la cantidad de la solicitud
            product_id = request.data.get("product_id")
            quantity = request.data.get("quantity", 1)

            # Verificar si el producto existe
            try:
                product = Product.objects.get(id=product_id)
            except Product.DoesNotExist:
                raise NotFound("Producto no encontrado.")

            # Crear el CartItem asociado al carrito del usuario
            with transaction.atomic():
                cart_item = CartItem.objects.create(
                    cart=cart,
                    product=product,
                    quantity=quantity
                )
            
            # Serializar y devolver el CartItem creado
            serializer = CartItemSerializer(cart_item)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except IntegrityError:
            return Response(
                {"error": "Ocurrió un problema al intentar agregar el producto al carrito."},
                status=status.HTTP_400_BAD_REQUEST
            )

    # Actualizar un elemento específico del carrito
    def put(self, request, item_id):
        cart = get_object_or_404(Cart, user=request.user)
        cart_item = get_object_or_404(CartItem, id=item_id, cart=cart)
        
        serializer = CartItemSerializer(cart_item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Eliminar un elemento del carrito
    def delete(self, request, item_id):
        cart = get_object_or_404(Cart, user=request.user)
        cart_item = get_object_or_404(CartItem, id=item_id, cart=cart)
        cart_item.delete()
        return Response({"detail": "Producto eliminado del carrito."}, status=status.HTTP_204_NO_CONTENT)