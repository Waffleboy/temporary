
from django.contrib.auth.forms import AuthenticationForm
from django import forms

# If you don't do this you cannot use Bootstrap CSS
class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Username", max_length=30,
                               widget=forms.TextInput(attrs={'name': 'username', 'placeholder': 'Username'}))
    password = forms.CharField(label="Password", max_length=30,
                               widget=forms.PasswordInput(attrs={'name': 'password', 'placeholder': 'Password'}))

class exploreForm(forms.Form):
	query = forms.CharField(label = "Query Statement", max_length=256,
							widget=forms.TextInput(attrs={'name': 'query', 'placeholder': 'Ask Ocubulum', 'class': 'pure-input-1-2',
								'style': 'position: relative; left: 25%;'}))
