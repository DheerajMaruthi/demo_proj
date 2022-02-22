from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import generics
from .serializers import UserSerializer

# Create your views here.


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser]
