from django import forms
from .models import HomePage

class HomePageForm(forms.Form):
    name = forms.IntegerField(label='Full Name')


class HomeForm(forms.ModelForm):

    class Meta:
        model = HomePage
        fields = '__all__'
