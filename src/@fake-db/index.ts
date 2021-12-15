import mock from './mock'

import './table'
import './apps/chat'
import './apps/email'
import './auth/users'
import './apps/invoice'
import './autocomplete'
import './apps/userList'
import './apps/calendar'
import './app-bar-search'

mock.onAny().passThrough()
