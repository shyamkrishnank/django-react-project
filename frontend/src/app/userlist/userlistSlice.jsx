import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    users : [],
    loading : false,
    error : "",
    editId : "",
}

export const fetchUsers = createAsyncThunk('fetchuser', async ()=>{
    try{
      const result = await axios.get('http://127.0.0.1:8000/users')
      return result
    }
    catch(error){
        throw(error)
    }
    
})


export const deleteUser = createAsyncThunk('deleteuser',(id)=>{
    axios.delete('http://127.0.0.1:8000/delete',id)
    .then(response=>console.log(response))
    
})



const userlistSlice = createSlice({
    name : 'userlist',
    initialState,
    reducers : {
        forEdit : (state,action)=>{
            state.editId = action.payload
        },
        forDelete : (state,action)=>{
            state.users = state.users.filter(item => item.id !== action.payload)

        }

    },
    extraReducers : builder=>{
       builder.addCase(fetchUsers.pending,state =>{
        state.loading = true
       }),
       builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload.data
       })
       builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.error = action.error.message
       })
    }
})

export default userlistSlice.reducer
export const {forEdit,forDelete} = userlistSlice.actions