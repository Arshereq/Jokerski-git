# Generated by Django 3.2.12 on 2022-03-30 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pastes', '0003_alter_paste_expire_after'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paste',
            name='expire_after',
            field=models.DateTimeField(auto_now_add=True, verbose_name="The paste's expiration time"),
        ),
    ]