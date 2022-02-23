from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import generics
from .serializers import UserSerializer,ArticleSerializer,AuthorSerializer
from rest_framework.pagination import PageNumberPagination


# Create your views here.

class UserPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 1000

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = UserPagination
    # permission_classes = [IsAdminUser]


class AuthorView(generics.CreateAPIView):
    # queryset = Article.objects.all()
    serializer_class = AuthorSerializer

class ArticleView(generics.CreateAPIView):
    # queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # def perform_create(self, serializer):
    #     author = get_object_or_404(Author, id=self.request.data.get('author_id'))
    #     return serializer.save(author=author)
    #
    # def get(self, request, *args, **kwargs):
    #     return self.list(request, *args, *kwargs)
    #
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
