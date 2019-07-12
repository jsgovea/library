from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.db.models import Sum
from datetime import date
from datetime import datetime

from libraryAdmin.models import Book, Category
from django.http import HttpResponse
import json
from django.db import IntegrityError
# Create your views here.
def index(request):
    return render(request, 'index.html', {})

def books_home(request):
    book = Book.objects.all().order_by('name')
    category = Category.objects.all().order_by('name')
    return render(request, 'books.html', {'book': book, 'category': category})

def categories_home(request):
    category = Category.objects.all()
    return render(request, 'category.html', {'category': category})

def create_category(request):
    response_data = {}
    name = request.POST.get('name')
    try:
        new_category = Category(
            name = name
        )
        new_category.save()
        response_data['status'] = 'success'
        response_data['message'] = 'Category created'
    except Exception:
        response_data['status'] = 'fail'
        response_data['message'] = 'Something went wrong'
    return HttpResponse(json.dumps(response_data))

def get_category(request):
    response_data = {}
    category_pk = request.POST.get('pk')
    category = Category.objects.filter(pk = category_pk)
    response_data['status'] = 'success'
    response_data['message'] = 'Selected Category'
    response_data['data'] = list(category.values('pk', 'name'))
    return HttpResponse(json.dumps(response_data))

def edit_category(request):
    response_data = {}
    category_pk = request.POST.get('pk')
    name = request.POST.get('name')
    category = Category.objects.filter(pk = category_pk)
    try:
        for new_category in category:
            new_category.name = name
            new_category.save()
        response_data['status'] = 'success'
        response_data['message'] = 'Category Edited'
    except Exception:
        response_data['status'] = 'fail'
        response_data['message'] = 'Something went wrong'
    return HttpResponse(json.dumps(response_data))

def delete_category(request):
    response_data = {}
    category_pk = request.POST.get('pk')
    category = Category.objects.filter(pk = category_pk)
    try:
        category.delete()
        response_data['status'] = 'success'
        response_data['message'] = 'Category Deleted'
    except Exception:
        response_data['status'] = 'fail'
        response_data['message'] = 'Something went wrong'
    return HttpResponse(json.dumps(response_data))

def create_book(request):
    response_data = {}
    name = request.POST.get('name')
    author = request.POST.get('author')
    description = request.POST.get('description')
    available = request.POST.get('available')
    category_pk = request.POST.get('category')
    category = Category.objects.get(pk = category_pk)
    try: 
        new_book = Book(
            category = category,
            name = name,
            author = author,
            description = description,
            available = available,
        )
        new_book.save()
        response_data['status'] = 'success'
        response_data['message'] = 'Book Created'
    except Exception:
        response_data['status'] = 'fail'
        response_data['message'] = 'Something went wrong'
    return HttpResponse(json.dumps(response_data))

def get_book(request):
    response_data = {}
    book_pk = request.POST.get('pk')
    book = Book.objects.filter(pk = book_pk)
    response_data['status'] = 'success'
    response_data['message'] = 'Book selected'
    response_data['data'] = list(book.values('pk', 'name', 'category', 'author', 'description', 'available'))
    return HttpResponse(json.dumps(response_data))

def update_book(request):
    response_data = {}
    name = request.POST.get('name')
    author = request.POST.get('author')
    description = request.POST.get('description')
    available = request.POST.get('available')
    book_pk = request.POST.get('pk')
    book = Book.objects.filter(pk = book_pk)
    category_pk = request.POST.get('category')
    category = Category.objects.get(pk = category_pk)
    try: 
        for books in book:
            books.category = category
            books.name = name
            books.author = author
            books.description = description
            books.available = available
            books.save()
        response_data['status'] = 'success'
        response_data['message'] = 'Book Edited'
    except Exception:
        response_data['status'] = 'fail'
        response_data['message'] = 'Something went wrong'
    return HttpResponse(json.dumps(response_data))

def delete_book(request):
    response_data = {}
    book_pk = request.POST.get('pk')
    book = Book.objects.get(pk = book_pk)
    try:
        book.delete()
        response_data['status'] = 'success'
        response_data['message'] = 'Book Deleted'
    except Exception:
        response_data['status'] = 'fail'
        response_data['message'] = 'Something went wrong'
    return HttpResponse(json.dumps(response_data))