# Generated by Django 2.1.11 on 2020-04-18 20:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cdis_app', '0013_auto_20200418_2036'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='ep',
            new_name='ed',
        ),
    ]
