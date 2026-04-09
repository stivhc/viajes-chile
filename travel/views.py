from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login
from .forms import RegistrationForm, ContactForm
from .models import Destination


def home(request):
    featured = Destination.objects.filter(is_featured=True)[:4]
    contact_form = ContactForm()

    if request.method == 'POST' and 'contact_submit' in request.POST:
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            contact_form.save()
            messages.success(request, 'Mensaje enviado correctamente.')
            return redirect('home')

    return render(request, 'travel/home.html', {
        'featured': featured,
        'contact_form': contact_form,
    })


def register(request):
    if request.user.is_authenticated:
        return redirect('home')

    form = RegistrationForm()

    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f'Bienvenido, {user.first_name}.')
            return redirect('home')

    return render(request, 'registration/register.html', {'form': form})
