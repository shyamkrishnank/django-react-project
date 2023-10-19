import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
    error : '',
    loggedName: '',
    isLogged : false
}

export const checkUser = createAsyncThunk('checkuser',async (payload)=>{
    try{
    const result = await axios.post('http://127.0.0.1:8000/login',payload)
    return result
    }
    catch(error){
        throw(error)
    }
    
  
})

const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers:{
        loggedId : (state,action)=>{
            state.loggedName = action.payload
        }

    },
    extraReducers : bulider =>{
        bulider.addCase(checkUser.pending,state=>{
            state.loading = true
        }),
        bulider.addCase(checkUser.fulfilled,(state,action)=>{
            state.loading = false,
            state.message = action.payload.data.message
            state.isLogged = true
        }),
        bulider.addCase(checkUser.rejected,(state,action)=>{
            state.loading = false,
            state.message = action.error.message
        })
    }
})

export default loginSlice.reducer
export const { loggedId } = loginSlice.actions
