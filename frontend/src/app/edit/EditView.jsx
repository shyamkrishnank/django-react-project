import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitEdit } from './editSlice'
import { useNavigate } from 'react-router-dom'

function EditView() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useSelector(state=>state.userlist.editId)
    const user = useSelector(state=>state.userlist.users.find((user)=>user.id === id))
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    useEffect(()=>{
       setName(user.name)
       setEmail(user.email)
    },[])
    const handleEdit = () =>{
        const data = {id:id,name:name,email:email}
        dispatch(submitEdit(data))
        navigate('/users')
    }
  return (
    <div>
         <div>
        <div className="container">
          <div className="signup-form">
        <h1>Edit User</h1>
        <div className="form-group">
          <label >Name:</label>
          <input type="text" id="username" name="username" value={name} onChange={e=>setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label >Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <div className="form-group">
          <button onClick={handleEdit}>Edit</button>
        </div>
    </div>
    </div>
   </div>
      
    </div>
  )
}

export default EditView
