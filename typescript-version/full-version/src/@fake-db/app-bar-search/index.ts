// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { AppBarSearchType } from 'src/@fake-db/types'

const searchData: AppBarSearchType[] = [
  {
    id: 1,
    url: '/dashboards/analytics',
    icon: 'ChartTimelineVariant',
    title: 'Analytics Dashboard',
    category: 'dashboards'
  },
  {
    id: 2,
    url: '/dashboards/ecommerce',
    icon: 'CartOutline',
    title: 'eCommerce Dashboard',
    category: 'dashboards'
  },
  {
    id: 3,
    url: '/apps/email',
    icon: 'EmailOutline',
    title: 'Email',
    category: 'appsPages'
  },
  {
    id: 4,
    url: '/apps/chat',
    icon: 'MessageOutline',
    title: 'Chat',
    category: 'appsPages'
  },
  {
    id: 5,
    url: '/apps/calendar',
    icon: 'CalendarBlankOutline',
    title: 'Calendar',
    category: 'appsPages'
  },
  {
    id: 6,
    url: '/apps/kanban',
    icon: 'ViewGridOutline',
    title: 'Kanban',
    category: 'appsPages'
  },
  {
    id: 7,
    url: '/apps/invoice/list',
    icon: 'FormatListNumbered',
    title: 'Invoice List',
    category: 'appsPages'
  },
  {
    id: 8,
    url: '/apps/invoice/preview',
    icon: 'FileDocumentOutline',
    title: 'Invoice Preview',
    category: 'appsPages'
  },
  {
    id: 9,
    url: '/apps/invoice/edit',
    icon: 'FileDocumentEditOutline',
    title: 'Invoice Edit',
    category: 'appsPages'
  },
  {
    id: 10,
    url: '/apps/invoice/add',
    icon: 'FilePlusOutline',
    title: 'Invoice Add',
    category: 'appsPages'
  },
  {
    id: 11,
    url: '/apps/user/list',
    icon: 'AccountGroup',
    title: 'User List',
    category: 'appsPages'
  },
  {
    id: 12,
    url: '/apps/user/view',
    icon: 'AccountOutline',
    title: 'User View',
    category: 'appsPages'
  },
  {
    id: 13,
    url: '/apps/roles',
    icon: 'ShieldOutline',
    title: 'Roles',
    category: 'appsPages'
  },
  {
    id: 14,
    url: '/apps/permissions',
    icon: 'LockOutline',
    title: 'Permissions',
    category: 'appsPages'
  },
  {
    id: 15,
    url: '/pages/user-profile/profile',
    icon: 'CardAccountDetailsOutline',
    title: 'User Profile',
    category: 'appsPages'
  },
  {
    id: 16,
    url: '/pages/user-profile/teams',
    icon: 'AccountGroup',
    title: 'User Profile - Teams',
    category: 'appsPages'
  },
  {
    id: 17,
    url: '/pages/user-profile/projects',
    icon: 'ViewGridOutline',
    title: 'User Profile - Projects',
    category: 'appsPages'
  },
  {
    id: 18,
    url: '/pages/user-profile/connections',
    icon: 'LinkVariant',
    title: 'User Profile - Connections',
    category: 'appsPages'
  },
  {
    id: 19,
    url: '/pages/account-settings/account',
    icon: 'AccountCogOutline',
    title: 'Account Settings',
    category: 'appsPages'
  },
  {
    id: 20,
    url: '/pages/account-settings/security',
    icon: 'LockOpenOutline',
    title: 'Account Settings - Security',
    category: 'appsPages'
  },
  {
    id: 21,
    url: '/pages/account-settings/billing',
    icon: 'CurrencyUsd',
    title: 'Account Settings - Billing',
    category: 'appsPages'
  },
  {
    id: 22,
    url: '/pages/account-settings/notifications',
    icon: 'BellOutline',
    title: 'Account Settings - Notifications',
    category: 'appsPages'
  },
  {
    id: 23,
    url: '/pages/account-settings/connections',
    icon: 'LinkVariant',
    title: 'Account Settings - Connections',
    category: 'appsPages'
  },
  {
    id: 24,
    url: '/pages/faq',
    icon: 'HelpCircleOutline',
    title: 'FAQ',
    category: 'appsPages'
  },
  {
    id: 25,
    url: '/pages/knowledge-base',
    icon: 'BookOpenOutline',
    title: 'Knowledge Base',
    category: 'appsPages'
  },
  {
    id: 26,
    url: '/pages/pricing',
    icon: 'CurrencyUsd',
    title: 'Pricing',
    category: 'appsPages'
  },
  {
    id: 27,
    url: '/pages/misc/coming-soon',
    icon: 'ClockOutline',
    title: 'Coming Soon',
    category: 'appsPages'
  },
  {
    id: 28,
    url: '/pages/misc/under-maintenance',
    icon: 'CogOutline',
    title: 'Under Maintenance',
    category: 'appsPages'
  },
  {
    id: 29,
    url: '/pages/misc/404-not-found',
    icon: 'AlertCircleOutline',
    title: 'Page Not Found - 404',
    category: 'appsPages'
  },
  {
    id: 30,
    url: '/pages/misc/401-not-authorized',
    icon: 'AccountMultipleRemoveOutline',
    title: 'Not Authorized - 401',
    category: 'appsPages'
  },
  {
    id: 31,
    url: '/pages/misc/500-server-error',
    icon: 'ServerOff',
    title: 'Server Error - 500',
    category: 'appsPages'
  },
  {
    id: 32,
    url: '/pages/auth/login-v1',
    icon: 'Login',
    title: 'Login V1',
    category: 'appsPages'
  },
  {
    id: 33,
    url: '/pages/auth/login-v2',
    icon: 'Login',
    title: 'Login V2',
    category: 'appsPages'
  },
  {
    id: 34,
    url: '/pages/auth/login-with-appbar',
    icon: 'Login',
    title: 'Login With AppBar',
    category: 'appsPages'
  },
  {
    id: 35,
    url: '/pages/auth/register-v1',
    icon: 'AccountPlusOutline',
    title: 'Register V1',
    category: 'appsPages'
  },
  {
    id: 36,
    url: '/pages/auth/register-v2',
    icon: 'AccountPlusOutline',
    title: 'Register V2',
    category: 'appsPages'
  },
  {
    id: 37,
    url: '/pages/auth/register-multi-steps',
    icon: 'AccountPlusOutline',
    title: 'Register Multi-Steps',
    category: 'appsPages'
  },
  {
    id: 38,
    icon: 'EmailCheckOutline',
    category: 'appsPages',
    title: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1'
  },
  {
    id: 39,
    icon: 'EmailCheckOutline',
    category: 'appsPages',
    title: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2'
  },
  {
    id: 40,
    url: '/pages/auth/forgot-password-v1',
    icon: 'LockAlertOutline',
    title: 'Forgot Password V1',
    category: 'appsPages'
  },
  {
    id: 41,
    url: '/pages/auth/forgot-password-v2',
    icon: 'LockAlertOutline',
    title: 'Forgot Password V2',
    category: 'appsPages'
  },
  {
    id: 42,
    url: '/pages/auth/reset-password-v1',
    icon: 'LockReset',
    title: 'Reset Password V1',
    category: 'appsPages'
  },
  {
    id: 43,
    url: '/pages/auth/reset-password-v2',
    icon: 'LockReset',
    title: 'Reset Password V2',
    category: 'appsPages'
  },
  {
    id: 44,
    icon: 'CellphoneLink',
    category: 'appsPages',
    title: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1'
  },
  {
    id: 45,
    icon: 'CellphoneLink',
    category: 'appsPages',
    title: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2'
  },
  {
    id: 46,
    icon: 'CartOutline',
    category: 'appsPages',
    title: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout'
  },
  {
    id: 47,
    category: 'appsPages',
    icon: 'OfficeBuildingOutline',
    title: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing'
  },
  {
    id: 48,
    icon: 'GiftOutline',
    category: 'appsPages',
    title: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal'
  },
  {
    id: 49,
    url: '/pages/dialog-examples',
    icon: 'VectorArrangeBelow',
    title: 'Dialog Examples',
    category: 'appsPages'
  },
  {
    id: 50,
    url: '/ui/typography',
    icon: 'FormatLetterCase',
    title: 'Typography',
    category: 'userInterface'
  },
  {
    id: 51,
    url: '/ui/icons',
    icon: 'GoogleCirclesExtended',
    title: 'Icons',
    category: 'userInterface'
  },
  {
    id: 52,
    url: '/ui/cards/basic',
    icon: 'CardOutline',
    title: 'Card Basic',
    category: 'userInterface'
  },
  {
    id: 53,
    url: '/ui/cards/advanced',
    icon: 'CardBulletedSettingsOutline',
    title: 'Card Advanced',
    category: 'userInterface'
  },
  {
    id: 54,
    url: '/ui/cards/statistics',
    icon: 'ChartBoxOutline',
    title: 'Card Statistics',
    category: 'userInterface'
  },
  {
    id: 55,
    url: '/ui/cards/gamification',
    icon: 'CardAccountDetailsOutline',
    title: 'Card Gamification',
    category: 'userInterface'
  },
  {
    id: 56,
    url: '/ui/cards/actions',
    icon: 'CardPlusOutline',
    title: 'Card Actions',
    category: 'userInterface'
  },
  {
    id: 57,
    url: '/components/accordion',
    icon: 'FullscreenExit',
    title: 'Accordion',
    category: 'userInterface'
  },
  {
    id: 58,
    url: '/components/alerts',
    icon: 'AlertOutline',
    title: 'Alerts',
    category: 'userInterface'
  },
  {
    id: 59,
    url: '/components/avatars',
    icon: 'AccountCircleOutline',
    title: 'Avatars',
    category: 'userInterface'
  },
  {
    id: 60,
    url: '/components/badges',
    icon: 'BellBadgeOutline',
    title: 'Badges',
    category: 'userInterface'
  },
  {
    id: 61,
    url: '/components/buttons',
    icon: 'GestureTapButton',
    title: 'Buttons',
    category: 'userInterface'
  },
  {
    id: 62,
    url: '/components/button-group',
    icon: 'CheckboxMultipleBlankOutline',
    title: 'Button Group',
    category: 'userInterface'
  },
  {
    id: 63,
    url: '/components/chips',
    icon: 'NewBox',
    title: 'Chips',
    category: 'userInterface'
  },
  {
    id: 64,
    url: '/components/dialogs',
    icon: 'CardBulletedOutline',
    title: 'Dialogs',
    category: 'userInterface'
  },
  {
    id: 65,
    url: '/components/list',
    icon: 'FormatListBulleted',
    title: 'List',
    category: 'userInterface'
  },
  {
    id: 66,
    url: '/components/menu',
    icon: 'Menu',
    title: 'Menu',
    category: 'userInterface'
  },
  {
    id: 67,
    url: '/components/pagination',
    icon: 'PageLast',
    title: 'Pagination',
    category: 'userInterface'
  },
  {
    id: 68,
    url: '/components/ratings',
    icon: 'StarOutline',
    title: 'Ratings',
    category: 'userInterface'
  },
  {
    id: 69,
    url: '/components/snackbar',
    icon: 'MessageProcessingOutline',
    title: 'Snackbar',
    category: 'userInterface'
  },
  {
    id: 70,
    url: '/components/swiper',
    icon: 'ViewCarouselOutline',
    title: 'Swiper',
    category: 'userInterface'
  },
  {
    id: 71,
    url: '/components/tabs',
    icon: 'Tab',
    title: 'Tabs',
    category: 'userInterface'
  },
  {
    id: 72,
    url: '/components/timeline',
    icon: 'TimelineOutline',
    title: 'Timeline',
    category: 'userInterface'
  },
  {
    id: 73,
    url: '/components/toast',
    icon: 'BellOutline',
    title: 'Toast',
    category: 'userInterface'
  },
  {
    id: 74,
    url: '/components/tree-view',
    icon: 'FileTreeOutline',
    title: 'Tree View',
    category: 'userInterface'
  },
  {
    id: 75,
    url: '/components/more',
    icon: 'ViewGridPlusOutline',
    title: 'More Components',
    category: 'userInterface'
  },
  {
    id: 76,
    url: '/forms/form-elements/text-field',
    icon: 'Lastpass',
    title: 'TextField',
    category: 'formsTables'
  },
  {
    id: 77,
    url: '/forms/form-elements/select',
    icon: 'FormatListCheckbox',
    title: 'Select',
    category: 'formsTables'
  },
  {
    id: 78,
    url: '/forms/form-elements/checkbox',
    icon: 'CheckboxOutline',
    title: 'Checkbox',
    category: 'formsTables'
  },
  {
    id: 79,
    url: '/forms/form-elements/radio',
    icon: 'RadioboxMarked',
    title: 'Radio',
    category: 'formsTables'
  },
  {
    id: 80,
    icon: 'OrderBoolAscendingVariant',
    title: 'Custom Inputs',
    category: 'formsTables',
    url: '/forms/form-elements/custom-inputs'
  },
  {
    id: 81,
    url: '/forms/form-elements/textarea',
    icon: 'CardTextOutline',
    title: 'Textarea',
    category: 'formsTables'
  },
  {
    id: 82,
    url: '/forms/form-elements/autocomplete',
    icon: 'Lastpass',
    title: 'Autocomplete',
    category: 'formsTables'
  },
  {
    id: 83,
    url: '/forms/form-elements/pickers',
    icon: 'CalendarMonth',
    title: 'Date Pickers',
    category: 'formsTables'
  },
  {
    id: 84,
    url: '/forms/form-elements/switch',
    icon: 'ToggleSwitchOutline',
    title: 'Switch',
    category: 'formsTables'
  },
  {
    id: 85,
    url: '/forms/form-elements/file-uploader',
    icon: 'TrayArrowUp',
    title: 'File Uploader',
    category: 'formsTables'
  },
  {
    id: 86,
    url: '/forms/form-elements/editor',
    icon: 'SquareEditOutline',
    title: 'Editor',
    category: 'formsTables'
  },
  {
    id: 87,
    url: '/forms/form-elements/slider',
    icon: 'GestureSwipeHorizontal',
    title: 'Slider',
    category: 'formsTables'
  },
  {
    id: 88,
    url: '/forms/form-elements/input-mask',
    icon: 'Lastpass',
    title: 'Input Mask',
    category: 'formsTables'
  },
  {
    id: 89,
    url: '/forms/form-layouts',
    icon: 'CubeOutline',
    title: 'Form Layouts',
    category: 'formsTables'
  },
  {
    id: 90,
    url: '/forms/form-validation',
    icon: 'CheckboxMarkedCircleOutline',
    title: 'Form Validation',
    category: 'formsTables'
  },
  {
    id: 91,
    url: '/forms/form-wizard',
    icon: 'TransitConnectionHorizontal',
    title: 'Form Wizard',
    category: 'formsTables'
  },
  {
    id: 92,
    url: '/tables/mui',
    icon: 'GridLarge',
    title: 'Table',
    category: 'formsTables'
  },
  {
    id: 93,
    url: '/tables/data-grid',
    icon: 'Grid',
    title: 'Mui DataGrid',
    category: 'formsTables'
  },
  {
    id: 94,
    url: '/charts/apex-charts',
    icon: 'ChartLine',
    title: 'Apex Charts',
    category: 'chartsMisc'
  },
  {
    id: 95,
    url: '/charts/recharts',
    icon: 'ChartBellCurveCumulative',
    title: 'Recharts',
    category: 'chartsMisc'
  },
  {
    id: 96,
    url: '/charts/chartjs',
    icon: 'ChartBellCurve',
    title: 'ChartJS',
    category: 'chartsMisc'
  },
  {
    id: 97,
    url: '/acl',
    icon: 'ShieldOutline',
    title: 'Access Control (ACL)',
    category: 'chartsMisc'
  }
]

// ** GET Search Data
mock.onGet('/app-bar/search').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const exactData: { [k: string]: AppBarSearchType[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: []
  }

  const includeData: { [k: string]: AppBarSearchType[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: []
  }

  searchData.forEach(obj => {
    const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
    if (isMatched && exactData[obj.category].length < 5) {
      exactData[obj.category].push(obj)
    }
  })

  searchData.forEach(obj => {
    const isMatched =
      !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)
    if (isMatched && includeData[obj.category].length < 5) {
      includeData[obj.category].push(obj)
    }
  })

  const categoriesCheck: string[] = []

  Object.keys(exactData).forEach(category => {
    if (exactData[category].length > 0) {
      categoriesCheck.push(category)
    }
  })
  if (categoriesCheck.length === 0) {
    Object.keys(includeData).forEach(category => {
      if (includeData[category].length > 0) {
        categoriesCheck.push(category)
      }
    })
  }

  const resultsLength = categoriesCheck.length === 1 ? 5 : 3

  return [
    200,
    [
      ...exactData.dashboards.concat(includeData.dashboards).slice(0, resultsLength),
      ...exactData.appsPages.concat(includeData.appsPages).slice(0, resultsLength),
      ...exactData.userInterface.concat(includeData.userInterface).slice(0, resultsLength),
      ...exactData.formsTables.concat(includeData.formsTables).slice(0, resultsLength),
      ...exactData.chartsMisc.concat(includeData.chartsMisc).slice(0, resultsLength)
    ]
  ]
})
