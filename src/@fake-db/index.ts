import mock from './mock'

import './cards'
import './table'
import './auth/jwt'
import './apps/chat'
import './pages/faq'
import './apps/email'
import './apps/invoice'
import './autocomplete'
import './apps/userList'
import './apps/calendar'
import './pages/pricing'
import './app-bar-search'
import './apps/permissions'
import './navigation/index'
import './pages/knowledge-base'

mock.onAny().passThrough()
