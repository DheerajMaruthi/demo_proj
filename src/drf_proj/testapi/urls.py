from django.contrib import admin
from django.urls import path
from . import views

app_name = 'testapi'

urlpatterns = [
    path('list/', views.UserList.as_view(), name='list'),
    path('create-author/', views.AuthorView.as_view(), name='create-author-name'),
    path('create-article/', views.ArticleView.as_view(), name='create-article-name'),
]
