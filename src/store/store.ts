import { configureStore } from '@reduxjs/toolkit'
import { prodectApi } from './services/prodectApi'
import cartSlice from './feachers/cartSlice'

export const store = configureStore({
    reducer: {
        cart:cartSlice,
        [prodectApi.reducerPath]: prodectApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prodectApi.middleware),
  })




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch