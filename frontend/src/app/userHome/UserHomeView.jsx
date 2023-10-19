import React, { useEffect, useState } from 'react'
import './userhomeStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchloggedUser } from './userhomeSlice'
import {forEdit} from '../userlist/userlistSlice'
import { useNavigate } from 'react-router-dom'

function UserHomeView() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const username = useSelector(state=>state.login.loggedName)
    const user = useSelector(state=>state.userhome.user)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    useEffect(()=>{
        const payload = {name:username}
        console.log(payload);
        dispatch(fetchloggedUser(payload))
        setName(user.name)
        setEmail(user.email)
    },[user.name,user.email])
  
  return (
    <div class="profile-container">
    <div class="profile-picture">
        <img src="" alt="" />
    </div>
    <button>Add photo</button><br/><br/>
    <h1 class="user-name">{name}</h1><br/>
    <p class="user-email">{email}</p><br/>
    <div class="profile-details">
        <p><strong>Hi </strong></p>
        <p>Welcome to the Profile Page</p>
    </div>
</div>
  )
}

export default UserHomeView
