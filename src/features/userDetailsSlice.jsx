import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//creating action

export const createUser = createAsyncThunk("createUser",async(data, {rejectWithValue})=>{
    
    const res = await fetch('https://657d31f3853beeefdb9a5fa0.mockapi.io/Curd' ,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(data)
    })
    try {
        const result = await res.json()
        return result;
    } catch (error) {
         return rejectWithValue(error)
    }
})

export const userDetail = createSlice({
    name:'userDetail',
    initialState:{
        user: [],
        loading: false,
        error: null,
    },
    
});

export default userDetail.reducer;