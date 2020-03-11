from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'employee', views.EmployeeViewSet)


urlpatterns = [
    path('', include(router.urls))
]