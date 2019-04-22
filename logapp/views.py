from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from logapp.models import Log

@login_required(login_url="login/")
def index(request):
	request_dict = dict(request.GET)
	if request.method == 'GET':
		context = {
		'page_title': 'Log Server',
		'page_subtitle': 'Displays logs in descending order',
		'datatable_results': [],
		'datatable_columns': ['DateTime','Log','Client'],
		'user': request.user
		}
		for logobj in Log.objects.all():
			created = str(logobj.created_at)
			client = logobj.client
			log = logobj.log
			context['datatable_results'].append([created,log,client])
		return render(request, 'dashboard.html', context)
	return HttpResponse("Invalid request type")

@csrf_exempt
def logrequest(request):
	if request.method == 'POST':
		objs = dict(request.POST)

		required_fields = ['client','log','auth']
		for entry in required_fields:
			if entry not in objs:
				return HttpResponse("ERROR: Missing field: {}".format(entry))


		client = objs['client']
		log = objs['log']
		auth = objs['auth']

		if type(auth) == list:
			client,log,auth = client[0],log[0],auth[0]
		if auth == 'supersecretauthkey':
			new_log_obj = Log(client=client,log=log)
			try:
				res = new_log_obj.save()
				return HttpResponse("SUCCESS: Log request saved.")
			except Exception as e:
				return HttpResponse("ERROR: Unknown failure")
		return HttpResponse("ERROR: Invalid auth key")
	return HttpResponse("Invalid - POST Only.")

@csrf_exempt
def logrequest_website(request):
	if request.method == 'POST':
		objs = dict(request.POST)
		print("Got request with {}".format(objs))
		client = objs['client'][0]
		log = objs['log'][0]

		if client == "" or log == "":
			return HttpResponse("ERROR: Client or log empty.")
		new_log_obj = Log(client=client,log=log)
		try:
			res = new_log_obj.save()
			return HttpResponse("SUCCESS: Log request saved.")
		except Exception as e:
			return HttpResponse("ERROR: Unknown failure")
	return HttpResponse("Invalid - POST Only.")

@login_required(login_url="login/")
def add_message(request):
	context = {} # if needed
	return render(request, 'add.html', context)


@login_required(login_url="login/")
def delete(request):
	context = {} # if needed
	return render(request, 'delete.html', context)

@csrf_exempt
@login_required(login_url='login/')
def delete_all(request):
	if request.method == 'POST':
		Log.objects.all().delete()
		return HttpResponse("Done!")
	return HttpResponse("Invalid access - are you logged in?")