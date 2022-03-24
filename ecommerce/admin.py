from django.contrib import admin
from ecommerce.models import Products, Vendors, Contacts
# Register your models here.
admin.site.register(Products)
admin.site.register(Vendors)
admin.site.register(Contacts)