from django.shortcuts import render
from django.views.generic import TemplateView


class AppView(TemplateView):
    template_name = "app.html"
