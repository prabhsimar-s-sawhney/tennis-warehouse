from django.db import models

class Vendors(models.Model):
    name = models.CharField(max_length=20)
    address = models.TextField(max_length=200)

    def __str__(self):
        return self.name

class Products(models.Model):
    vendor = models.ForeignKey(Vendors, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    price = models.IntegerField()
    
    def __str__(self):
        return self.name

class Contacts(models.Model):
    name = models.CharField(max_length=25)
    email = models.CharField(max_length=40)
    phone = models.CharField(max_length=12)
    desc = models.TextField(max_length=200)
    date = models.DateField()
