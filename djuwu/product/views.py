from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

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

class ProductDetail(APIView):
    def get_object(self, category_slug, product_slug):
        try:
            return Product.objects.filter(category_slug=category_slug).get(slug=product_slug)
        except Product.DoesNotExist:
            raise Http404

    # overwrite get function
    def get(self, request, category_slug, product_slug, format=None):
        product = self.get_object(category_slug, product)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
        