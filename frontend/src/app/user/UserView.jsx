import React, { useState } from 'react'
import { addUser,add } from './userSlice'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './userStyle.css'

function UserView(props) {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [name,setName] = useState('')
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const handleSubmit = () =>{
     const payload = {name :name,email:email,password:password}
     dispatch(addUser(payload))
     if (props.props.name === 'Sign up'){
     navigate('/login')
     }else{
        navigate('/users')
     }
     
   }
  return (
    <div>
        <div className="container">
          <div className="signup-form">
        <h1>{props.props.name}</h1>
        <div className="form-group">
          <label >Name:</label>
          <input type="text" id="username" name="username" value={name} onChange={e=>setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label >Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label >Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label >Confirm Password:</label>
          <input type="password" id="confirm-password" name="cpassword"  required/>
        </div>
        <div className="form-group">
          <button onClick={handleSubmit} className="btn btn-primary">Sign Up</button>
        </div>
        <div className="form-group text-center ">
         {props.props.name === 'Sign up' &&  <span className='login_button' onClick={()=>navigate('/login')}>Back to login</span>} 
        </div>
    </div>
    </div>
   </div>
  )
}

export default UserView
