# Generated by Django 2.1.11 on 2020-03-15 20:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cdis_app', '0009_query_patient'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='mar',
            new_name='medication_administration_record',
        ),
        migrations.RenameField(
            model_name='review',
            old_name='pmh',
            new_name='past_medical_history',
        ),
        migrations.RenameField(
            model_name='review',
            old_name='vs',
            new_name='vital_signs',
        ),
        migrations.AlterField(
            model_name='room',
            name='patient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='patient+', to='cdis_app.Patient'),
        ),
    ]
