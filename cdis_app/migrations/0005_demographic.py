# Generated by Django 2.1.11 on 2020-03-11 19:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cdis_app', '0004_auto_20200311_1911'),
    ]

    operations = [
        migrations.CreateModel(
            name='Demographic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patient_name', models.CharField(max_length=40)),
                ('age', models.IntegerField()),
                ('date_of_birth', models.DateField()),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='patient', to='cdis_app.Patient')),
            ],
        ),
    ]
