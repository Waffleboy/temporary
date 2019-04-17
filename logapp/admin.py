from django.contrib import admin

from logapp.models import *

admin.site.site_header = 'Log Server Administration Panel' 

admin.site.register(Log)