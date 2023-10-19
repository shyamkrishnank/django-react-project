from rest_framework import serializers
from .models import  User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    message = serializers.CharField()

class UserslistSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','name','email','image']
        




