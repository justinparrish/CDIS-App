# Generated by Django 2.1.11 on 2020-04-24 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cdis_app', '0014_auto_20200418_2037'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patient',
            name='discharge_date',
        ),
        migrations.AlterField(
            model_name='query',
            name='status',
            field=models.CharField(choices=[('Open', 'Open'), ('Closed', 'Closed')], max_length=30),
        ),
        migrations.AlterField(
            model_name='review',
            name='diagnostics',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='review',
            name='ed',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='review',
            name='history_and_physical',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='review',
            name='labs',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='review',
            name='medication_administration_record',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='review',
            name='past_medical_history',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='review',
            name='query_opportunities',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='review',
            name='vital_signs',
            field=models.CharField(max_length=1000),
        ),
    ]