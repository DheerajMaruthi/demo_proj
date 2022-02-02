from django import forms

class HomePageForm(forms.Form):
    name = forms.IntegerField(label='Full Name')
