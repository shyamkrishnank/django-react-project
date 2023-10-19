import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'

const initialState = {
    user : [],
    error :" "
}



export const addUser = createAsyncThunk('addUser',(payload)=>{
    axios.post('http://127.0.0.1:8000/post',payload)
})


const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers :{
        add : (state,action) =>{
            state.user = action.payload
        },
        fail : (state,action)=>{
            state.error = action.error.message
        }
    }
})

export default userSlice.reducer
export const {add,fail} = userSlice.actions