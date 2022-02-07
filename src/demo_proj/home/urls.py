from django.contrib import admin
from django.urls import path
from . import views

app_name = 'home'

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.HomeView.as_view(), name='home'),
    path('list/', views.HomeListView.as_view(), name='list'),
    path('create-name/', views.create_name, name='create-name'),
    path('create/', views.HomeCreateView.as_view(), name='create'),
    path('ajax-submit/', views.ajax_post, name='ajax_post'),
    path('<str:name>/', views.HomeDetailView.as_view(), name='detail'),
]
