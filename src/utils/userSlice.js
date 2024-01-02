import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser: (state,action) =>{
            console.log("action payload",action.payload);
            state.push(action.payload);
        },
        removeUser:(state)=>{
            return [];
        }
    }
})
export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;