import { appReducer } from '@/app/model/sliceApp'
import { flashcardsApi } from '@/services/flashcardsApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flashcardsApi.middleware),
  reducer: { app: appReducer, [flashcardsApi.reducerPath]: flashcardsApi.reducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
