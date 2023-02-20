from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer

# Create your views here.
class LatestProductsList(APIView):
    #overwrite normal get function
    def get(self, reqest, format=None):
        # first 4 products
        products = Product.objects.all()[0:4]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)