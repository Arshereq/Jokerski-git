# Generated by Django 4.0.3 on 2022-03-13 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name="user",
            name="login",
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name="user",
            name="name",
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name="user",
            name="password",
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name="user",
            name="surname",
            field=models.CharField(max_length=30),
        ),
    ]