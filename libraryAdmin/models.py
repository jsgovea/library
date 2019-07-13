from django.db import models
from datetime import date
# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Book(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    available = models.IntegerField(default = 0)

    def __str__(self):
        return self.name

class Student(models.Model):
    student_id = models.CharField(max_length=100, unique = True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    career = models.CharField(max_length=100)
    quarter = models.IntegerField(default=0)

    def __str__(self):
        return self.first_name + " " + self.last_name

class Borrow(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    date = models.DateField(default=date.today)
    status = models.CharField(max_length=25)

    def __str__(self):
        return self.date
