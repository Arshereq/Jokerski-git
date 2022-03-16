from django.db import models

# Create your models here.


class User(models.Model):
    objects = models.Manager()

    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    login = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=30)

    def __str__(self):
        return self.name
