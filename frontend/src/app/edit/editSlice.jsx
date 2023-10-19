import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
    error : "",
    success : ""
}



export const submitEdit = createAsyncThunk('submitEdit', async (payload)=>{
    await axios.post('http://127.0.0.1:8000/edit',payload)

})


const editSlice = createSlice({
    name : 'edit',
    initialState,
    extraReducers: builder=>{
        builder.addCase(submitEdit.pending,state=>{
            state.loading = true
        })
        builder.addCase(submitEdit.fulfilled,(state,action)=>{
            state.success = action.payload
        })
        builder.addCase(submitEdit.rejected,(state,action)=>{
            state.error = action.error.message
        })
    }

})

export default editSlice.reducer
