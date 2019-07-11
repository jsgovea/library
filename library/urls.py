from django.contrib import admin
from django.urls import path
from libraryAdmin import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', views.index, name='index'),
    path('books_home/', views.books_home, name='books_home'),
    path('categories_home/', views.categories_home, name='categories_home'),
    path('get_category/', views.get_category, name='get_category'),

    # CRUD URLS
    path('create_category/', views.create_category, name='create_category'),
    path('edit_category/', views.edit_category, name='edit_category'),
    path('delete_category/', views.delete_category, name='delete_category'),


]
