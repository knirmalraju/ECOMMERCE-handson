import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState:{
        currentUser : null,
        isFetching : false,
        error : false,
    },
    reducers:{
        loginStart : (state)=>{
          state.isFetching = true
        },
        loginSuccess : (state,action)=>{
          state.isFetching = false;
          state.currentUser = action.payload;
        },
        loginFailure : (state)=>{
          state.isFetching = false;
          state.error = true;
        },
    },
});

export const {loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;



//counter redux 
/*import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        cartvalue : 0
    },
    reducers: {
        incremented: (state) => {
          state.cartvalue += 1
        },
        decremented: (state) => {
          state.cartvalue -= 1
        }
      }
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;*/