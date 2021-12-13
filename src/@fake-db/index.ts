import mock from './mock'

import './table'
import './apps/chat'
import './apps/email'
import './auth/users'
import './autocomplete'
import './app-bar-search'

mock.onAny().passThrough()
