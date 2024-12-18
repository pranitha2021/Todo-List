import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../components/counters/counterSlice"
import todoReducer from "../components/todoSlice"



export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todoList: todoReducer,
    },
})