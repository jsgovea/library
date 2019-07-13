from django.contrib import admin
from libraryAdmin.models import Category, Book, Student
# Register your models here.

admin.site.register(Book)
admin.site.register(Category)
admin.site.register(Student)