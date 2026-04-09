from django.contrib import admin
from .models import Destination, ContactMessage

@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ['title', 'region', 'is_featured', 'created_at']
    list_filter = ['is_featured', 'region']

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at']
    readonly_fields = ['created_at']
