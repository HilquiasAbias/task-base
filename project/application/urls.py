from django.urls import path
from .apps import ApplicationConfig
from . import views

app_name = ApplicationConfig.name

urlpatterns = [
    path('', views.index, name='index'),
]