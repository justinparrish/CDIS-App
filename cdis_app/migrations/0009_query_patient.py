# Generated by Django 2.1.11 on 2020-03-12 02:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cdis_app', '0008_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='query',
            name='patient',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, related_name='patient+', to='cdis_app.Patient'),
            preserve_default=False,
        ),
    ]