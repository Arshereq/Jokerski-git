from django.contrib import admin
from .models import Paste, Vote
# Register your models here.

admin.site.register(Paste)
admin.site.register(Vote)