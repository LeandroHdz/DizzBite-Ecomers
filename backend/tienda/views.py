from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Cart,CartItem,Order,OrderItem
from .serializer import *
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



class OrderView(APIView):
    def post(self, request):
        user = request.user  # Suponiendo que el usuario está autenticado

        try:
            # Comenzamos una transacción para que todo ocurra de forma atómica
            with transaction.atomic():
                # 1. Obtener el carrito del usuario
                cart = Cart.objects.get(user=user)
                cart_items = CartItem.objects.filter(cart=cart)
                
                if not cart_items.exists():
                    return Response({"error": "El carrito está vacío."}, status=status.HTTP_400_BAD_REQUEST)
                
                # 2. Calcular el total del pedido
                total_price = sum(item.product.price * item.quantity for item in cart_items)

                # 3. Crear la orden
                order = Order.objects.create(
                    user=user,
                    status='Pending',
                    total_price=total_price
                )

                # 4. Crear los ítems de la orden y actualizar inventario
                for item in cart_items:
                    OrderItem.objects.create(
                        order=order,
                        product=item.product,
                        quantity=item.quantity,
                        price=item.product.price
                    )

                    # Reducir la cantidad en el inventario
                    inventory = Inventory.objects.get(product=item.product)
                    if inventory.quantity < item.quantity:
                        raise ValueError(f"Inventario insuficiente para el producto: {item.product.name}")

                    inventory.quantity -= item.quantity
                    inventory.save()

                # 5. Limpiar el carrito del usuario
                cart_items.delete()

                # Serializar y devolver la orden creada
                order_serializer = OrderSerializer(order)
                return Response(order_serializer.data, status=status.HTTP_201_CREATED)

        except Cart.DoesNotExist:
            return Response({"error": "Carrito no encontrado."}, status=status.HTTP_404_NOT_FOUND)
        except Inventory.DoesNotExist:
            return Response({"error": "Inventario no encontrado para algún producto."}, status=status.HTTP_404_NOT_FOUND)
        except ValueError as e:
            # En caso de inventario insuficiente u otro error, se aborta la transacción
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class InventoryView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        # Obtener todos los registros de inventario
        inventory = Inventory.objects.all()
        serializer = InventorySerializer(inventory, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        # Crear un nuevo registro de inventario
        serializer = InventorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, inventory_id):
        # Actualizar un registro de inventario existente
        try:
            inventory = Inventory.objects.get(id=inventory_id)
        except Inventory.DoesNotExist:
            return Response({"error": "Inventario no encontrado."}, status=status.HTTP_404_NOT_FOUND)

        serializer = InventorySerializer(inventory, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, inventory_id):
        # Eliminar un registro de inventario existente
        try:
            inventory = Inventory.objects.get(id=inventory_id)
            inventory.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Inventory.DoesNotExist:
            return Response({"error": "Inventario no encontrado."}, status=status.HTTP_404_NOT_FOUND)