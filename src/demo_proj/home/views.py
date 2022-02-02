from django.shortcuts import render
from django.http import HttpResponse

from django.views.generic import TemplateView, ListView
from django.views.generic.detail import DetailView
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic.edit import CreateView

from .models import HomePage
from .forms import HomePageForm

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

    # def get_queryset(self):
    #     # a = super(HomeListView.get_queryset)
    #     return HomePage.objects.all()[:2]


class HomeDetailView(DetailView):
    template_name = "detail.html"
    model = HomePage

    def get_object(self):
        #return get_object_or_404(HomePage,name=self.kwargs['name'])
        return HomePage.objects.get(name=self.kwargs['name'])
#note : homepage_list.html


def create_name(request):
    if request.method == 'POST':
        form = HomePageForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            return HttpResponseRedirect('/home/list')
    else:
        form = HomePageForm()
    return render(request, 'create_name.html', {'form': form})


class HomeCreateView(CreateView):
    model = HomePage
    fields = ['name','city','pub_date']
    template_name = 'create_name.html'
    success_url = '/'
