from django.contrib import admin
from .models import HomePage
# Register your models here.

#python manage.py createsuperuser

# admin.site.register(HomePage)

@admin.register(HomePage)
class HomePageModelAdmin(admin.ModelAdmin):
    list_display = ['name','city']
