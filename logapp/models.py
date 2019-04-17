from django.db import models

# Create your models here.

class Log(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	client = models.CharField(max_length=100,default=None, blank=True, null=True)
	log = models.TextField()


