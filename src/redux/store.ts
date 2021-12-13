// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import email from 'pages/apps/email/store'
import chat from 'pages/apps/chat/store'

export const store = configureStore({
  reducer: {
    chat,
    email
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
