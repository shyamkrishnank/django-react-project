import { createAsyncThunk, createDraftSafeSelector, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    user : [],
}



export const fetchloggedUser = createAsyncThunk('fetchlogedUser',async(payload)=>{
    try{
       const result = await axios.post('http://127.0.0.1:8000/userhome',payload)
       return result

    }
    catch(error){
        throw error
    }
})

const userhomeSlice = createSlice({
    name : 'userhome',
    initialState,
    extraReducers : builder =>{
        builder.addCase(fetchloggedUser.fulfilled,(state,action)=>{
            state.user = action.payload.data
        })
    }
})

export default userhomeSlice.reducer