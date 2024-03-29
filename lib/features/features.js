import { createSlice } from "@reduxjs/toolkit";


export const sideModalSlice = createSlice({
    name :'sideModal',
    initialState : {
        modalStatus : false,
        products : [
            
        ],
        wishList : [

        ]
    } , 
    reducers : {
        modalChange : (state,action) => {
            state.modalStatus = action.payload
            
        },

        addProduct : (state , action) => {
            state.products.push(action.payload)
            
        },

        removeProduct : (state , action) => {
            state.products = state.products.filter(obj => obj.id !== action.payload )
        },

        handleWishList : (state , action) => {
            state.wishList.push(action.payload)
        },

        removeWishList : (state , action) => {
            state.wishList = state.wishList.filter(obj => obj.id !== action.payload )
        }
        
    }

})

export const {modalChange , addProduct , removeProduct , handleWishList , removeWishList } = sideModalSlice.actions

export default sideModalSlice.reducer