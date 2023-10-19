import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from './userlistSlice'
import './userlist.css'
import { useNavigate } from 'react-router-dom'
import {forEdit,forDelete} from './userlistSlice'
import axios from 'axios'

function UserlistView() {
    const navigate = useNavigate()
    const[filteredResults,setFilterResults] = useState([])
    let fill = []
    const [search,setSearch] = useState("")
    const dispatch = useDispatch()
    const users = useSelector(state=>state.userlist)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    const handleSearch = e =>{
        fill = users.users.filter((user) =>
         user.name.toLowerCase().includes(search.toLowerCase()),
        );
        setFilterResults(fill)
    }
    const handleEdit = (id) =>{
        dispatch(forEdit(id))
        navigate('/edituser')

    }
    const handleDelete=(id)=>{
        const payload = {id :id}
        axios.post('http://127.0.0.1:8000/delete',payload)
        .then(response=>console.log(response))
        console.log(payload.id)
        dispatch(forDelete(payload.id))
        
    }
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-search">
        <input className="search-input" value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search User" />
        <button  onClick={handleSearch} className="btn search-button">Search</button>
      </div>
      <div className="navbar-actions">
        <button onClick={()=>navigate('/adduser')} className="btn add-user-button">Add User</button>
        <button className="btn logout-button">Logout</button>
      </div>
    </nav>
    <table className="custom-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {
         filteredResults.length > 0?
         filteredResults.map(user=>(
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={()=>handleEdit(user.id)} className="btn edit-button">Edit</button>
              <button onClick={()=>handleDelete(user.id)} className="btn delete-button">Delete</button>
            </td>
          </tr>
         ))

         : 
        users.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={()=>handleEdit(user.id)}  className="btn edit-button">Edit</button>
              <button onClick={()=>handleDelete(user.id)} className="btn delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
}

export default UserlistView
