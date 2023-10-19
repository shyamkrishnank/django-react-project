import React, { useEffect, useState } from 'react'
import './loginStyle.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkUser,loggedId } from './loginAction'


function LoginView() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const data = useSelector(state=>state.login)
    const handleSubmit =  async () => {
        const payload = {name:name, password:password}
        dispatch(checkUser(payload))
    }
    useEffect(() => {
        if (data.isLogged){
            dispatch(loggedId(name))
            navigate('/home')
        }
    }, [data.isLogged])

  return (       
    <div>
        <div className="container">
    <div className="login-form">
      <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" id="username" name="username" value={name} onChange={e=>setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label >Password:</label>
          <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} name="password" required/>
        </div>
        <div className="form-group">
          <button onClick={handleSubmit}  className="btn btn-primary">Login</button>
        </div>
        <div className="text-center mt-3">
          <p className="text-dark">Don't have an account? <span className='signup_btn' onClick={()=>navigate('/signup')} >Register</span></p>
          <p><span className='admin_btn' >Admin Login</span></p>
        </div> 
    </div>
  </div>
    </div>
  )
  }

export default LoginView
