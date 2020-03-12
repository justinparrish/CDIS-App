from rest_framework import viewsets
from .serializers import EmployeeSerializer, PatientSerializer, DemographicsSerializer, RoomSerializer, QuerySerializer

from .models import Employee, Patient, Demographic, Room, Query

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
class DemographicViewSet(viewsets.ModelViewSet):
    queryset = Demographic.objects.all()
    serializer_class = DemographicsSerializer
    
class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
class QueryViewSet(viewsets.ModelViewSet):
    queryset = Query.objects.all()
    serializer_class = QuerySerializer