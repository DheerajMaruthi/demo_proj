from django.contrib import admin
from django.urls import path
from . import views

app_name = 'testapi'

urlpatterns = [
    path('list/', views.UserList.as_view(), name='list'),
]
