from rest_framework import serializers

from ecommerce.models import Products, Vendors


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'
        depth = 1


class VendorSerializer(serializers.ModelSerializer):
    prod = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Vendors
        fields = ['id', 'name', 'address', 'prod']
