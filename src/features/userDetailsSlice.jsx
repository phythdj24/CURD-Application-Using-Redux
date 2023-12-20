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


export const showUser = createAsyncThunk("showUser",async()=>{
  const response = await fetch('https://657d31f3853beeefdb9a5fa0.mockapi.io/Curd')
  try {
    const result = await response.json()
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const userDetail = createSlice({
  name: 'userDetail',
  initialState: {
      user: [],
      loading: false,
      error: null,
  },
  reducers: {
      searchUser: (state, action) => {
          console.log(action.payload);
          state.searchData = action.payload;
      },
  },

  extraReducers: (builder) => {
      builder
          .addCase(createUser.pending, (state) => {
              state.loading = true;
          })
          .addCase(createUser.fulfilled, (state, action) => {
              state.loading = false;
              state.users.push(action.payload);
          })
          .addCase(createUser.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload.message;
          })
          .addCase(showUser.pending, (state) => {
              state.loading = true;
          })
          .addCase(showUser.fulfilled, (state, action) => {
              state.loading = false;
              state.users = action.payload;
          })
          .addCase(showUser.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload.message;
          });
  },
});

export default userDetail.reducer;



{/* <div className='Link'>
<Link className='link1' to="/">Create Post</Link>
<Link className='link2' to="/read">All Post ({allusers.length}) </Link>
</div> */}