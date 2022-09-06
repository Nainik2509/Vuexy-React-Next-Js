// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { AppBarSearchType } from 'src/@fake-db/types'

const searchData: AppBarSearchType[] = [
  {
    id: 1,
    url: '/dashboards/analytics',
    icon: 'mdi:chart-timeline-variant',
    title: 'Analytics Dashboard',
    category: 'dashboards'
  },
  {
    id: 2,
    url: '/dashboards/ecommerce',
    icon: 'mdi:cart-outline',
    title: 'eCommerce Dashboard',
    category: 'dashboards'
  },
  {
    id: 3,
    url: '/apps/email',
    icon: 'mdi:email-outline',
    title: 'Email',
    category: 'appsPages'
  },
  {
    id: 4,
    url: '/apps/chat',
    icon: 'mdi:message-outline',
    title: 'Chat',
    category: 'appsPages'
  },
  {
    id: 5,
    url: '/apps/calendar',
    icon: 'mdi:calendar-blank-outline',
    title: 'Calendar',
    category: 'appsPages'
  },
  {
    id: 6,
    url: '/apps/kanban',
    icon: 'mdi:view-grid-outline',
    title: 'Kanban',
    category: 'appsPages'
  },
  {
    id: 7,
    url: '/apps/invoice/list',
    icon: 'mdi:format-list-numbered',
    title: 'Invoice List',
    category: 'appsPages'
  },
  {
    id: 8,
    url: '/apps/invoice/preview',
    icon: 'mdi:file-document-outline',
    title: 'Invoice Preview',
    category: 'appsPages'
  },
  {
    id: 9,
    url: '/apps/invoice/edit',
    icon: 'mdi:file-document-edit-outline',
    title: 'Invoice Edit',
    category: 'appsPages'
  },
  {
    id: 10,
    url: '/apps/invoice/add',
    icon: 'mdi:file-plus-outline',
    title: 'Invoice Add',
    category: 'appsPages'
  },
  {
    id: 11,
    url: '/apps/user/list',
    icon: 'mdi:account-group',
    title: 'User List',
    category: 'appsPages'
  },
  {
    id: 12,
    url: '/apps/user/view/overview',
    icon: 'mdi:eye-outline',
    title: 'User View - Overview',
    category: 'appsPages'
  },
  {
    id: 13,
    url: '/apps/user/view/security',
    icon: 'mdi:lock-open-outline',
    title: 'User View - Security',
    category: 'appsPages'
  },
  {
    id: 14,
    url: '/apps/user/view/billing-plan',
    icon: 'mdi:currency-usd',
    title: 'User View - Billing & Plans',
    category: 'appsPages'
  },
  {
    id: 15,
    url: '/apps/user/view/notification',
    icon: 'mdi:bell-outline',
    title: 'User View - Notification',
    category: 'appsPages'
  },
  {
    id: 16,
    url: '/apps/user/view/connection',
    icon: 'mdi:link-variant',
    title: 'User View - Connection',
    category: 'appsPages'
  },
  {
    id: 17,
    url: '/apps/roles',
    icon: 'mdi:shield-outline',
    title: 'Roles',
    category: 'appsPages'
  },
  {
    id: 18,
    url: '/apps/permissions',
    icon: 'mdi:lock-outline',
    title: 'Permissions',
    category: 'appsPages'
  },
  {
    id: 19,
    url: '/pages/user-profile/profile',
    icon: 'mdi:card-account-details-outline',
    title: 'User Profile',
    category: 'appsPages'
  },
  {
    id: 20,
    url: '/pages/user-profile/teams',
    icon: 'mdi:account-group',
    title: 'User Profile - Teams',
    category: 'appsPages'
  },
  {
    id: 21,
    url: '/pages/user-profile/projects',
    icon: 'mdi:view-grid-outline',
    title: 'User Profile - Projects',
    category: 'appsPages'
  },
  {
    id: 22,
    url: '/pages/user-profile/connections',
    icon: 'mdi:link-variant',
    title: 'User Profile - Connections',
    category: 'appsPages'
  },
  {
    id: 23,
    url: '/pages/account-settings/account',
    icon: 'mdi:account-cog-outline',
    title: 'Account Settings',
    category: 'appsPages'
  },
  {
    id: 24,
    url: '/pages/account-settings/security',
    icon: 'mdi:lock-open-outline',
    title: 'Account Settings - Security',
    category: 'appsPages'
  },
  {
    id: 25,
    url: '/pages/account-settings/billing',
    icon: 'mdi:currency-usd',
    title: 'Account Settings - Billing',
    category: 'appsPages'
  },
  {
    id: 26,
    url: '/pages/account-settings/notifications',
    icon: 'mdi:bell-outline',
    title: 'Account Settings - Notifications',
    category: 'appsPages'
  },
  {
    id: 27,
    url: '/pages/account-settings/connections',
    icon: 'mdi:link-variant',
    title: 'Account Settings - Connections',
    category: 'appsPages'
  },
  {
    id: 28,
    url: '/pages/faq',
    icon: 'mdi:help-circle-outline',
    title: 'FAQ',
    category: 'appsPages'
  },
  {
    id: 29,
    url: '/pages/knowledge-base',
    icon: 'mdi:book-open-outline',
    title: 'Knowledge Base',
    category: 'appsPages'
  },
  {
    id: 30,
    url: '/pages/help-center/landing',
    icon: 'mdi:rocket-outline',
    title: 'Help Center - Landing',
    category: 'appsPages'
  },
  {
    id: 31,
    url: '/pages/help-center/categories',
    icon: 'mdi:view-grid-outline',
    title: 'Help Center - Categories',
    category: 'appsPages'
  },
  {
    id: 32,
    url: '/pages/help-center/article',
    icon: 'mdi:view-grid-outline',
    title: 'Help Center - Article',
    category: 'appsPages'
  },
  {
    id: 33,
    url: '/pages/pricing',
    icon: 'mdi:currency-usd',
    title: 'Pricing',
    category: 'appsPages'
  },
  {
    id: 34,
    url: '/pages/misc/coming-soon',
    icon: 'mdi:clock-outline',
    title: 'Coming Soon',
    category: 'appsPages'
  },
  {
    id: 35,
    url: '/pages/misc/under-maintenance',
    icon: 'mdi:cog-outline',
    title: 'Under Maintenance',
    category: 'appsPages'
  },
  {
    id: 36,
    url: '/pages/misc/404-not-found',
    icon: 'mdi:alert-circle-outline',
    title: 'Page Not Found - 404',
    category: 'appsPages'
  },
  {
    id: 37,
    url: '/pages/misc/401-not-authorized',
    icon: 'mdi:account-multiple-remove-outline',
    title: 'Not Authorized - 401',
    category: 'appsPages'
  },
  {
    id: 38,
    url: '/pages/misc/500-server-error',
    icon: 'mdi:server-off',
    title: 'Server Error - 500',
    category: 'appsPages'
  },
  {
    id: 39,
    url: '/pages/auth/login-v1',
    icon: 'mdi:login',
    title: 'Login V1',
    category: 'appsPages'
  },
  {
    id: 40,
    url: '/pages/auth/login-v2',
    icon: 'mdi:login',
    title: 'Login V2',
    category: 'appsPages'
  },
  {
    id: 41,
    url: '/pages/auth/login-with-appbar',
    icon: 'mdi:login',
    title: 'Login With AppBar',
    category: 'appsPages'
  },
  {
    id: 42,
    url: '/pages/auth/register-v1',
    icon: 'mdi:account-plus-outline',
    title: 'Register V1',
    category: 'appsPages'
  },
  {
    id: 43,
    url: '/pages/auth/register-v2',
    icon: 'mdi:account-plus-outline',
    title: 'Register V2',
    category: 'appsPages'
  },
  {
    id: 44,
    url: '/pages/auth/register-multi-steps',
    icon: 'mdi:account-plus-outline',
    title: 'Register Multi-Steps',
    category: 'appsPages'
  },
  {
    id: 45,
    icon: 'mdi:email-check-outline',
    category: 'appsPages',
    title: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1'
  },
  {
    id: 46,
    icon: 'mdi:email-check-outline',
    category: 'appsPages',
    title: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2'
  },
  {
    id: 47,
    url: '/pages/auth/forgot-password-v1',
    icon: 'mdi:lock-alert-outline',
    title: 'Forgot Password V1',
    category: 'appsPages'
  },
  {
    id: 48,
    url: '/pages/auth/forgot-password-v2',
    icon: 'mdi:lock-alert-outline',
    title: 'Forgot Password V2',
    category: 'appsPages'
  },
  {
    id: 49,
    url: '/pages/auth/reset-password-v1',
    icon: 'mdi:lock-reset',
    title: 'Reset Password V1',
    category: 'appsPages'
  },
  {
    id: 50,
    url: '/pages/auth/reset-password-v2',
    icon: 'mdi:lock-reset',
    title: 'Reset Password V2',
    category: 'appsPages'
  },
  {
    id: 51,
    icon: 'mdi:cellphone-link',
    category: 'appsPages',
    title: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1'
  },
  {
    id: 52,
    icon: 'mdi:cellphone-link',
    category: 'appsPages',
    title: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2'
  },
  {
    id: 53,
    icon: 'mdi:cart-outline',
    category: 'appsPages',
    title: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout'
  },
  {
    id: 54,
    category: 'appsPages',
    icon: 'mdi:office-building-outline',
    title: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing'
  },
  {
    id: 55,
    icon: 'mdi:gift-outline',
    category: 'appsPages',
    title: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal'
  },
  {
    id: 56,
    url: '/pages/dialog-examples',
    icon: 'mdi:vector-arrange-below',
    title: 'Dialog Examples',
    category: 'appsPages'
  },
  {
    id: 57,
    url: '/ui/typography',
    icon: 'mdi:format-letter-case',
    title: 'Typography',
    category: 'userInterface'
  },
  {
    id: 58,
    url: '/ui/icons',
    icon: 'mdi:google-circles-extended',
    title: 'Icons',
    category: 'userInterface'
  },
  {
    id: 59,
    url: '/ui/cards/basic',
    icon: 'mdi:card-outline',
    title: 'Card Basic',
    category: 'userInterface'
  },
  {
    id: 60,
    url: '/ui/cards/advanced',
    icon: 'mdi:card-bulleted-settings-outline',
    title: 'Card Advanced',
    category: 'userInterface'
  },
  {
    id: 61,
    url: '/ui/cards/statistics',
    icon: 'mdi:chart-box-outline',
    title: 'Card Statistics',
    category: 'userInterface'
  },
  {
    id: 62,
    url: '/ui/cards/gamification',
    icon: 'mdi:card-account-details-outline',
    title: 'Card Gamification',
    category: 'userInterface'
  },
  {
    id: 63,
    url: '/ui/cards/actions',
    icon: 'mdi:card-plus-outline',
    title: 'Card Actions',
    category: 'userInterface'
  },
  {
    id: 64,
    url: '/components/accordion',
    icon: 'mdi:fullscreen-exit',
    title: 'Accordion',
    category: 'userInterface'
  },
  {
    id: 65,
    url: '/components/alerts',
    icon: 'mdi:alert-outline',
    title: 'Alerts',
    category: 'userInterface'
  },
  {
    id: 66,
    url: '/components/avatars',
    icon: 'mdi:account-circle-outline',
    title: 'Avatars',
    category: 'userInterface'
  },
  {
    id: 67,
    url: '/components/badges',
    icon: 'mdi:bell-badge-outline',
    title: 'Badges',
    category: 'userInterface'
  },
  {
    id: 68,
    url: '/components/buttons',
    icon: 'mdi:gesture-tap-button',
    title: 'Buttons',
    category: 'userInterface'
  },
  {
    id: 69,
    url: '/components/button-group',
    icon: 'mdi:checkbox-multiple-blank-outline',
    title: 'Button Group',
    category: 'userInterface'
  },
  {
    id: 70,
    url: '/components/chips',
    icon: 'mdi:new-box',
    title: 'Chips',
    category: 'userInterface'
  },
  {
    id: 71,
    url: '/components/dialogs',
    icon: 'mdi:card-bulleted-outline',
    title: 'Dialogs',
    category: 'userInterface'
  },
  {
    id: 72,
    url: '/components/list',
    icon: 'mdi:format-list-bulleted',
    title: 'List',
    category: 'userInterface'
  },
  {
    id: 73,
    url: '/components/menu',
    icon: 'mdi:menu',
    title: 'Menu',
    category: 'userInterface'
  },
  {
    id: 74,
    url: '/components/pagination',
    icon: 'mdi:page-last',
    title: 'Pagination',
    category: 'userInterface'
  },
  {
    id: 75,
    url: '/components/ratings',
    icon: 'mdi:star-outline',
    title: 'Ratings',
    category: 'userInterface'
  },
  {
    id: 76,
    url: '/components/snackbar',
    icon: 'mdi:message-processing-outline',
    title: 'Snackbar',
    category: 'userInterface'
  },
  {
    id: 77,
    url: '/components/swiper',
    icon: 'mdi:view-carousel-outline',
    title: 'Swiper',
    category: 'userInterface'
  },
  {
    id: 78,
    url: '/components/tabs',
    icon: 'mdi:tab',
    title: 'Tabs',
    category: 'userInterface'
  },
  {
    id: 79,
    url: '/components/timeline',
    icon: 'mdi:timeline-outline',
    title: 'Timeline',
    category: 'userInterface'
  },
  {
    id: 80,
    url: '/components/toast',
    icon: 'mdi:bell-outline',
    title: 'Toast',
    category: 'userInterface'
  },
  {
    id: 81,
    url: '/components/tree-view',
    icon: 'mdi:file-tree-outline',
    title: 'Tree View',
    category: 'userInterface'
  },
  {
    id: 82,
    url: '/components/more',
    icon: 'mdi:view-grid-plus-outline',
    title: 'More Components',
    category: 'userInterface'
  },
  {
    id: 83,
    url: '/forms/form-elements/text-field',
    icon: 'mdi:lastpass',
    title: 'TextField',
    category: 'formsTables'
  },
  {
    id: 84,
    url: '/forms/form-elements/select',
    icon: 'mdi:format-list-checkbox',
    title: 'Select',
    category: 'formsTables'
  },
  {
    id: 85,
    url: '/forms/form-elements/checkbox',
    icon: 'mdi:checkbox-outline',
    title: 'Checkbox',
    category: 'formsTables'
  },
  {
    id: 86,
    url: '/forms/form-elements/radio',
    icon: 'mdi:radiobox-marked',
    title: 'Radio',
    category: 'formsTables'
  },
  {
    id: 87,
    icon: 'mdi:order-bool-ascending-variant',
    title: 'Custom Inputs',
    category: 'formsTables',
    url: '/forms/form-elements/custom-inputs'
  },
  {
    id: 88,
    url: '/forms/form-elements/textarea',
    icon: 'mdi:card-text-outline',
    title: 'Textarea',
    category: 'formsTables'
  },
  {
    id: 89,
    url: '/forms/form-elements/autocomplete',
    icon: 'mdi:lastpass',
    title: 'Autocomplete',
    category: 'formsTables'
  },
  {
    id: 90,
    url: '/forms/form-elements/pickers',
    icon: 'mdi:calendar-month',
    title: 'Date Pickers',
    category: 'formsTables'
  },
  {
    id: 91,
    url: '/forms/form-elements/switch',
    icon: 'mdi:toggle-switch-outline',
    title: 'Switch',
    category: 'formsTables'
  },
  {
    id: 92,
    url: '/forms/form-elements/file-uploader',
    icon: 'mdi:tray-arrow-up',
    title: 'File Uploader',
    category: 'formsTables'
  },
  {
    id: 93,
    url: '/forms/form-elements/editor',
    icon: 'mdi:square-edit-outline',
    title: 'Editor',
    category: 'formsTables'
  },
  {
    id: 94,
    url: '/forms/form-elements/slider',
    icon: 'mdi:gesture-swipe-horizontal',
    title: 'Slider',
    category: 'formsTables'
  },
  {
    id: 95,
    url: '/forms/form-elements/input-mask',
    icon: 'mdi:lastpass',
    title: 'Input Mask',
    category: 'formsTables'
  },
  {
    id: 96,
    url: '/forms/form-layouts',
    icon: 'mdi:cube-outline',
    title: 'Form Layouts',
    category: 'formsTables'
  },
  {
    id: 97,
    url: '/forms/form-validation',
    icon: 'mdi:checkbox-marked-circle-outline',
    title: 'Form Validation',
    category: 'formsTables'
  },
  {
    id: 98,
    url: '/forms/form-wizard',
    icon: 'mdi:transit-connection-horizontal',
    title: 'Form Wizard',
    category: 'formsTables'
  },
  {
    id: 99,
    url: '/tables/mui',
    icon: 'mdi:grid-large',
    title: 'Table',
    category: 'formsTables'
  },
  {
    id: 100,
    url: '/tables/data-grid',
    icon: 'mdi:grid',
    title: 'Mui DataGrid',
    category: 'formsTables'
  },
  {
    id: 101,
    url: '/charts/apex-charts',
    icon: 'mdi:chart-line',
    title: 'Apex Charts',
    category: 'chartsMisc'
  },
  {
    id: 102,
    url: '/charts/recharts',
    icon: 'mdi:chart-bell-curve-cumulative',
    title: 'Recharts',
    category: 'chartsMisc'
  },
  {
    id: 103,
    url: '/charts/chartjs',
    icon: 'mdi:chart-bell-curve',
    title: 'ChartJS',
    category: 'chartsMisc'
  },
  {
    id: 104,
    url: '/acl',
    icon: 'mdi:shield-outline',
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
