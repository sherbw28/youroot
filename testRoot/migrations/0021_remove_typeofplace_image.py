# Generated by Django 4.0.2 on 2022-02-15 11:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testRoot', '0020_remove_typeofplace_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='typeofplace',
            name='image',
        ),
    ]