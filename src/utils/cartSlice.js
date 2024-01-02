import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems : (state,action)=>{
            const itemCart = state.items.find(item =>item.id=== action.payload.id)
            itemCart.
            state.items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.items.pop()
        },
        clearItems:(state,action)=>{
            state.items.length=0
        }
    }
})
export const {addItems,removeItems,clearItems} = cartSlice.actions;
export default cartSlice.reducer;