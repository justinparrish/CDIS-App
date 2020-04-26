# Generated by Django 2.1.11 on 2020-04-18 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cdis_app', '0012_auto_20200317_1731'),
    ]

    operations = [
        migrations.AddField(
            model_name='query',
            name='created_on',
            field=models.DateField(default='2020-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='query',
            name='status',
            field=models.CharField(default='open', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='review',
            name='created_on',
            field=models.DateField(default='2020-01-01'),
            preserve_default=False,
        ),
    ]
