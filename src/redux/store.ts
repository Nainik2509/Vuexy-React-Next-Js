// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'src/pages/apps/chat/store'
import user from 'src/pages/apps/user/store'
import email from 'src/pages/apps/email/store'
import kanban from 'src/pages/apps/kanban/store'
import invoice from 'src/pages/apps/invoice/store'
import calendar from 'src/pages/apps/calendar/store'
import authentication from 'src/redux/authentication'
import permissions from 'src/pages/apps/permissions/store'

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    kanban,
    invoice,
    calendar,
    permissions,
    authentication
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
