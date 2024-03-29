import { configureStore } from "@reduxjs/toolkit"
import sideModalReducer from './features/features'


export const store = configureStore({
    reducer : {
        sideModal : sideModalReducer
    }
})
