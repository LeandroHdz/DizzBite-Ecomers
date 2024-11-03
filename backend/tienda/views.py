from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer


class ProductApiView(APIView):
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