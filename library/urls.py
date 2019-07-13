from django.contrib import admin
from django.urls import path
from libraryAdmin import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', views.index, name='index'),
    path('books_home/', views.books_home, name='books_home'),
    path('categories_home/', views.categories_home, name='categories_home'),
    path('get_category/', views.get_category, name='get_category'),
    path('get_book/', views.get_book, name='get_book'),
    path('students_home/', views.students_home, name='students_home'),
    path('get_student/', views.get_student, name='get_student'),
    path('teachers_home/', views.teachers_home, name='teachers_home'),
    path('get_teacher/', views.get_teacher, name='get_teacher'),

    # CRUD URLS
    path('create_category/', views.create_category, name='create_category'),
    path('edit_category/', views.edit_category, name='edit_category'),
    path('delete_category/', views.delete_category, name='delete_category'),
    path('create_book/', views.create_book, name='create_book'),
    path('update_book/', views.update_book, name='update_book'),
    path('delete_book/', views.delete_book, name='delete_book'),
    path('create_student/', views.create_student, name='create_student'),
    path('edit_student/', views.edit_student, name='edit_student'),
    path('delete_student/', views.delete_student, name='delete_student'),
    path('create_teacher/', views.create_teacher, name='create_teacher'),
    path('edit_teacher/', views.edit_teacher, name='edit_teacher'),
    path('delete_teacher/', views.delete_teacher, name='delete_teacher'),


]
