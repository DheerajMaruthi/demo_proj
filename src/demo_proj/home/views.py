import json


from django.shortcuts import render
from django.http import HttpResponse

from django.views.generic import TemplateView, ListView
from django.views.generic.detail import DetailView
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic.edit import CreateView
from django.views.generic.edit import FormMixin
from django.urls import reverse_lazy


from .models import HomePage
from .forms import HomePageForm,HomeForm

# Create your views here.


def index(request):
    data = 'Hi there,'
    a = HomePage.objects.all()
    return HttpResponse(a)

class HomeView(TemplateView):
    template_name = "index.html"

class HomeListView(ListView):
    template_name = "index.html"
    model = HomePage

    # def get_queryset(self):
    #     # a = super(HomeListView.get_queryset)
    #     return HomePage.objects.all()[:2]
    def get_context_data(self, *args, **kwargs):
        context = super(HomeListView, self).get_context_data(*args, **kwargs)
        # context = {}
        context['static_objects'] = HomePage.objects.all()
        return context


class HomeDetailView(FormMixin, DetailView):
    template_name = "detail.html"
    model = HomePage
    form_class = HomeForm
    success_url = reverse_lazy('home:list')

    def get_object(self):
        return HomePage.objects.filter(name=self.kwargs['name'])[:1].get()

    # def get_context_data(self, *args, **kwargs):
    #     context = super(HomeDetailView, self).get_context_data(*args, **kwargs)
    #     context['static_objects'] = HomePage.objects.all()[:1].get()
    #     return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()
        if form.is_valid():
            name = form.cleaned_data.get('name')
            city = form.cleaned_data.get('city')
            print(city)
            # possition_applied_for = form.cleaned_data.get('possition_applied_for')
            # mobile_number = form.cleaned_data.get('mobile_number')
            # date_of_birth = form.cleaned_data.get('date_of_birth')
            if HomePage.objects.filter(city=city).exists():
                form.add_error(None, "City Exist")
                return self.form_invalid(form)
            else:
                return self.form_valid(form)
            form.save()
        else:
            return self.form_invalid(form)

    # def form_valid(self, form):
        # self.obj = form.save()
        # email_id = form.cleaned_data.get('email_id')
        # full_name = form.cleaned_data.get('full_name')
        # resume = self.obj.resume
        # subject = 'Thank you for your application!'
        # admin_subject = 'Job applicant registered for ' + str(form.instance.possition_applied_for) + ' position'
        # from_email = 'info@embassyofficeparks.com'
        # # 'mansi.jain@webenza.com','divya.p@embassyofficeparks.com'
        # resume_urls = self.request.build_absolute_uri(form.instance.resume.url)
        # template_object = render_to_string("emails/careers-thank-you.html",
        #                                    {"object": form.instance})
        # admin_template_object = render_to_string("emails/careers-admin.html",
        #                                    {"object": form.instance, 'resume_urls':resume_urls})
        # # user email
        # # 'mansi.jain@webenza.com','divya.p@embassyofficeparks.com'
        # send_mail(admin_subject, admin_template_object,
        #           from_email, ['dheeraj@webenza.com','praveen@webenza.com'], resume=resume, fail_silently=False)
        # # admin email
        # send_mail(subject, template_object,
        #           from_email, [email_id], resume=None, fail_silently=False)
        # return super(HomeDetailView, self).form_valid(form)


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

def ajax_post(request):
    if request.method == 'GET':
        post_text = request.POST.get('name_id')
        response_data = 'Success'

        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )
    else:
        return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json"
        )
