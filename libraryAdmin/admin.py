from django.contrib import admin
from libraryAdmin.models import Category, Book, Student, Teacher, Borrow, BorrowTeacher
# Register your models here.

admin.site.register(Book)
admin.site.register(Category)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(Borrow)
admin.site.register(BorrowTeacher)
