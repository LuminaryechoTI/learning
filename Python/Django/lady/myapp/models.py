from django.db import models

# Create your models here.
class subscriber(models.Model):
    email =models.EmailField(unique=True)
    created_at= models.Date