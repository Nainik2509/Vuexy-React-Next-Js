import mock from './mock'

import './cards'
import './table'
import './auth/jwt'
import './apps/chat'
import './pages/faq'
import './apps/email'
import './apps/kanban'
import './apps/invoice'
import './autocomplete'
import './apps/userList'
import './apps/calendar'
import './pages/pricing'
import './app-bar-search'
import './apps/permissions'
import './pages/knowledge-base'

mock.onAny().passThrough()
