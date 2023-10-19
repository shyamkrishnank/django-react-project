from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from .serializers import MessageSerializer,UserslistSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def sigupPost(request):
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST', 'GET'])
def login(request):
    data = request.data
    try:
        user = User.objects.get(name=data.get('name'))
    except:
        payload = {'message': 'wrong username'}
        return Response(payload)
    if user.password == data.get('password'):
        payload = {'message': 'success'}
        return Response(payload)
    payload = {'message': 'wrong password'}
    return Response(payload)

@api_view(['GET'])
def users(request):
    data = User.objects.all()
    serializer = UserslistSerializer(data,many = True)
    return Response(serializer.data)

@api_view(['POST'])
def edituser(request):
    data = request.data
    user = User.objects.get(id = data.get('id'))
    serializer = UserSerializer(user,data=data,partial=True)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)
    return Response(serializer.data)

@api_view(['POST'])
def deleteUser(request):
    data = request.data
    try:
        user = User.objects.get(id = data.get('id'))
        user.delete()
        message = {'message':'success'}
        return Response(message)
    except:
        message = {'message':'Not deleted'}
        return Response(message)

@api_view(['POST'])
def userHome(request):
    data = request.data
    print(data)
    try:
        user = User.objects.get(name = data.get('name'))
        serializer = UserslistSerializer(user,many = False)
        return Response(serializer.data)
    except:
        message = {'message':'no user found'}
        return Response(message)
