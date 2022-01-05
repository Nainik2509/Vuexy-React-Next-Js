// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'src/redux/apps/chat'
import user from 'src/redux/apps/user'
import email from 'src/redux/apps/email'
import kanban from 'src/redux/apps/kanban'
import invoice from 'src/redux/apps/invoice'
import calendar from 'src/redux/apps/calendar'
import permissions from 'src/redux/apps/permissions'

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    kanban,
    invoice,
    calendar,
    permissions
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
