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

    # CRUD URLS
    path('create_category/', views.create_category, name='create_category'),
    path('edit_category/', views.edit_category, name='edit_category'),
    path('delete_category/', views.delete_category, name='delete_category'),
    path('create_book/', views.create_book, name='create_book'),
    path('update_book/', views.update_book, name='update_book'),
    path('delete_book/', views.delete_book, name='delete_book'),


]
