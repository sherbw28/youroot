# Generated by Django 4.0.2 on 2022-02-13 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testRoot', '0007_typeofplace_city'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='image',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]