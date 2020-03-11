from rest_framework import serializers
from .models import Employee, Patient, Demographic

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'name', 'username', 'password', 'email']
        
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
                  'id', 'account_number', 'medical_rec_number', 
                  'admit_date', 'discharge_date', 'length_of_stay',
                  'financial_class', 'status', 'employee'
                  ]
        
class DemographicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Demographic
        fields = ['patient_name', 'age', 'date_of_birth', 'patient']