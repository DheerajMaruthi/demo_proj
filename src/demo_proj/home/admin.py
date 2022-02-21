from django.contrib import admin
from .models import HomePage
from django.contrib.auth.models import Permission
# Register your models here.

#python manage.py createsuperuser

# admin.site.register(HomePage)

@admin.register(HomePage)
class HomePageModelAdmin(admin.ModelAdmin):
    list_display = ['name','city']


# admin.site.register(Permission)
@admin.register(Permission)
class PermissionAdmin(admin.ModelAdmin):
    list_display = ('get_app_label','get_model', 'name', 'codename','id')
    search_fields = ('name', 'id',)

    def get_model(self, obj):
        return obj.content_type.model
    get_model.short_description = 'Model'
    get_model.admin_order_field = 'content_type__model'

    def get_app_label(self, obj):
        return obj.content_type.app_label
    get_app_label.short_description = 'App Label'
    get_app_label.admin_order_field = 'content_type__app_label'
