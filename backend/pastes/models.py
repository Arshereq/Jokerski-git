from django.db import models
from users.models import User
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Paste(models.Model):
    title = models.CharField(max_length=255, blank=False, verbose_name="The name of the paste")
    text = models.TextField(blank=False, verbose_name="Content of the paste")
    expire_after = models.DateTimeField(auto_now_add=True, blank=False, verbose_name="The paste's expiration time")
    visibility = models.BooleanField(default=True, verbose_name="Visibility of the paste")
    author = models.ForeignKey(User,verbose_name="username", null=True, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.id}--{self.title}"
    

class Vote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    paste = models.ForeignKey('pastes.Paste', related_name='votes', on_delete=models.CASCADE)
# class ExpireChoices(models.TextChoices):
#     NEVER = 'NEVER', _('never')
#     HOUR = 'HOUR', _('1 hour')
#     DAY = 'DAY', _('1 day')
#     WEEK = 'WEEK', _('1 week')
#     MONTH = 'MONTH', _('1 month')
#     YEAR = 'YEAR', _('1 year')