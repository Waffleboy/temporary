from django.urls import path

from django.urls import path
from django.urls import include, path
from django.conf.urls import url
from logapp.forms import LoginForm
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    url(r'^login/$', auth_views.login, {"template_name":"login.html","authentication_form":LoginForm}, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/login/'}, name='logout'),
    url(r'^log$',views.logrequest),
    url(r'^log_website',views.logrequest_website),
    url(r'^delete$',views.delete),
    url(r'^delete_all',views.delete_all),
    url(r'^add',views.add_message),
    url(r'^', views.index, name='index'),
]