from django.contrib import admin
from django.urls import path
from . import views

from rest_framework import routers

app_name = 'testapi'
router = routers.SimpleRouter()
router.register(r'author', views.AuthorViewSet)

urlpatterns = [
    path('list/', views.UserList.as_view(), name='list'),
    path('create-author/', views.AuthorView.as_view(), name='create-author-name'),
    path('create-article/', views.ArticleView.as_view(), name='create-article-name'),
] + router.urls
