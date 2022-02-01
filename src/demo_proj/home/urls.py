from django.contrib import admin
from django.urls import path
from . import views

app_name = 'home'

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.HomeView.as_view(), name='home'),
    path('list/', views.HomeListView.as_view(), name='list'),
    path('<str:name>/', views.HomeDetailView.as_view(), name='detail'),
]
