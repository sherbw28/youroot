# Generated by Django 4.0.2 on 2022-02-15 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testRoot', '0013_saveroot'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saveroot',
            name='author',
            field=models.CharField(max_length=255),
        ),
    ]
