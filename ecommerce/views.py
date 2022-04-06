from django.shortcuts import render
from django.http import HttpResponse

from ecommerce.serializers import ProductSerializer, VendorSerializer
from .models import Contacts, Products, Vendors
from django.db import connection
from datetime import datetime
from rest_framework.decorators import api_view
from rest_framework.response import Response


def homepage(request):
    return render(request, 'homepage.html')


@api_view()
def products_list(request):
    products = Products.objects.all()

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


def babolat_list(request):
    babolat = Products.objects.filter(vendor_id=1)
    print(babolat)

    return render(request, 'babolat.html', {'babolat': babolat})


def head_list(request):
    head = Products.objects.filter(vendor_id=3)
    print(head)

    return render(request, 'head.html', {'head': head})


def wilson_list(request):
    wilson = Products.objects.filter(vendor_id=2)
    print(wilson)

    return render(request, 'wilson.html', {'wilson': wilson})


def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        c = Contacts(name=name, email=email, phone=phone,
                     desc=desc, date=datetime.today())
        c.save()

    return render(request, 'contact.html')


@api_view()
def vendor_list(request):
    if request.method == 'GET':
        vendor = Vendors.objects.all()
        serializer = VendorSerializer(vendor, many=True)
        return Response(serializer.data)
