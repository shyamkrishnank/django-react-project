
from .views import *
from django.urls import path



urlpatterns = [
    
    path('post',view = sigupPost, name='signupPost'),
    path('login', view= login, name='loginView'),
    path('users',view=users, name = 'userslist' ),
    path('edit',view=edituser, name = 'editView'),
    path('delete',view=deleteUser, name = 'deleteView'),
    path('userhome',view=userHome, name = 'userhomeView')
    

]