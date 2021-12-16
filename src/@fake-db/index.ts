import mock from './mock'

import './table'
import './apps/chat'
import './pages/faq'
import './apps/email'
import './auth/jwt'
import './apps/invoice'
import './autocomplete'
import './apps/userList'
import './apps/calendar'
import './pages/pricing'
import './app-bar-search'
import './apps/permissions'

mock.onAny().passThrough()
