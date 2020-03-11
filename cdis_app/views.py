from rest_framework import viewsets
from .serializers import EmployeeSerializer, PatientSerializer

from .models import Employee, Patient

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer