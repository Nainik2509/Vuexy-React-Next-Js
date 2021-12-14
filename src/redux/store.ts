// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'pages/apps/chat/store'
import email from 'pages/apps/email/store'
import invoice from 'pages/apps/invoice/store'
import calendar from 'pages/apps/calendar/store'

export const store = configureStore({
  reducer: {
    chat,
    email,
    invoice,
    calendar
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
