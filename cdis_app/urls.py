from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'employee', views.EmployeeViewSet)
router.register(r'patient', views.PatientViewSet)
router.register(r'demographic', views.DemographicViewSet)
router.register(r'room', views.RoomViewSet)
router.register(r'query', views.QueryViewSet)


urlpatterns = [
    path('', include(router.urls))
]