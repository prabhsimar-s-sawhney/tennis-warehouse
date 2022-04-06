from django.urls import path
from . import views

from . import views

urlpatterns = [
    path('', views.homepage, name="homepage"),
    path('all/', views.products_list, name="products_data"),
    path('babolat/', views.babolat_list, name="babolat_data"),
    path('head/', views.head_list, name="head_data"),
    path('wilson/', views.wilson_list, name="wilson_data"),
    path('contact/', views.contact, name="contact"),
    path('getVendors/', views.vendor_list)
]
