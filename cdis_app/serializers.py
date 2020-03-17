from rest_framework import serializers
from .models import Employee, Patient, Demographic, Room, Query, Review

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
        fields = ['id', 'patient_name', 'age', 'date_of_birth', 'patient']
        
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'nursing_unit', 'room', 'date_in', 'date_out', 'patient']
        
class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = [
                    'id', 'doctor_name', 'doctor_question', 
                    'clinical_indicators', 'history_and_physical', 
                    'treatment', 'patient'
                 ]
        
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
                    'id', 'ep', 'vital_signs', 'diagnostics',
                    'medication_administration_record', 'past_medical_history', 'history_and_physical', 
                    'query_opportunities', 'labs', 'type', 'patient'
                ]