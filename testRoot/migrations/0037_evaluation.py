# Generated by Django 4.0.2 on 2022-02-24 13:51

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('testRoot', '0036_rename_comments_commentdetail'),
    ]

    operations = [
        migrations.CreateModel(
            name='Evaluation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('age', models.CharField(choices=[('10', '10代'), ('20', '20代'), ('30', '30代'), ('40', '40代'), ('50', '50代'), ('60', '60代'), ('70', '70代'), ('80', '80代'), ('90', '90代')], max_length=255)),
                ('gender', models.CharField(choices=[('male', '男'), ('female', '女')], max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='testRoot.typeofplace')),
            ],
        ),
    ]
