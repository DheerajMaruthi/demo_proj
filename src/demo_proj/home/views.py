from django.shortcuts import render
from django.http import HttpResponse
from .models import HomePage

from django.views.generic import TemplateView, ListView
from django.views.generic.detail import DetailView
from django.shortcuts import get_object_or_404

# Create your views here.


def index(request):
    data = 'Hi there,'
    a = HomePage.objects.all()
    return HttpResponse(a)

class HomeView(TemplateView):
    template_name = "index.html"

class HomeListView(ListView):
    #template_name = "index.html"
    model = HomePage


class HomeDetailView(DetailView):
    template_name = "detail.html"
    model = HomePage

    def get_object(self):
        #return get_object_or_404(HomePage,name=self.kwargs['name'])
        return HomePage.objects.get(name=self.kwargs['name'])
#note : homepage_list.html
