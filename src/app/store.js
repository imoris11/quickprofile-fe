import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import sagas from "./sagas"
import createSagaMiddleware from "redux-saga"
import authReducer from "../features/auth/redux/authSlice"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
})

sagaMiddleware.run(sagas)
