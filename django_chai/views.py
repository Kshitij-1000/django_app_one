from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return HttpResponse("This is the HOme page")

def about(request):
    return render(request, 'index.html')

def contacts(request):
    return HttpResponse("This is the contacts page on the django app")

def game(request):
    return render(request, 'game.html')