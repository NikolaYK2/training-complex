import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type initialStateApp = {
  message: null | string
  messageType: 'error' | 'success' | null
}
const initialState: initialStateApp = {
  message: null,
  messageType: null,
}
const slice = createSlice({
  initialState: initialState,
  name: 'app',
  reducers: {
    clearStatusMessage: state => {
      state.message = null
    },
    setStatusMessage: (
      state,
      action: PayloadAction<{ message: string; type: 'error' | 'success' }>
    ) => {
      state.message = action.payload.message
      state.messageType = action.payload.type
    },
  },
})

export const appReducer = slice.reducer
export const appAction = slice.actions
