from django.shortcuts import render
from django.templatetags.static import static
from django.http import HttpRequest, HttpResponse

def index(request):
    return render(request, 'index.html', {'js_path': static('js/app.js')})