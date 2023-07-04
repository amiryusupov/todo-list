import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import todoSlice from "./slices/todoSlice"

const reducer = combineReducers({
     todo: todoSlice
})
const store = configureStore({reducer})

export default store