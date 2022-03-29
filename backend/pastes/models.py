from django.db import models

# Create your models here.

class Pastes(models.Model):
    title = models.CharField(max_length=255, blank=False, verbose_name="The name of the paste")
    text = models.TextField(blank=False, verbose_name="Content of the paste")
    expire_after = models.DateField(blank=False, verbose_name="The paste's expiration time")
    visibility = models.BooleanField(default=True, verbose_name="Visibility of the paste")