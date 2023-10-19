from django.db import models


class User(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=15)
    image = models.ImageField(upload_to='profile',blank=True)

    def __str__(self):
        return self.email