// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import email from 'pages/apps/email/store'

export const store = configureStore({
  reducer: {
    email
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
