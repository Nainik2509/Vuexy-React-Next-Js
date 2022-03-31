// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { AppBarSearchType } from 'src/@fake-db/types'

const searchData: AppBarSearchType[] = [
  {
    id: 1,
    url: '/',
    icon: 'HomeVariantOutline',
    title: 'Analytics Dashboard'
  },
  {
    id: 2,
    url: '/dashboards/ecommerce',
    icon: 'HomeVariantOutline',
    title: 'eCommerce Dashboard'
  },
  {
    id: 3,
    url: '/apps/email',
    icon: 'EmailOutline',
    title: 'Email'
  },
  {
    id: 4,
    url: '/apps/chat',
    icon: 'MessageOutline',
    title: 'Chat'
  },
  {
    id: 5,
    url: '/apps/calendar',
    icon: 'CalendarBlankOutline',
    title: 'Calendar'
  },
  {
    id: 6,
    url: '/apps/invoice/list',
    icon: 'FormatListNumbered',
    title: 'Invoice List'
  },
  {
    id: 7,
    url: '/apps/invoice/preview',
    icon: 'FileDocumentOutline',
    title: 'Invoice Preview'
  },
  {
    id: 8,
    url: '/apps/invoice/edit',
    icon: 'PencilOutline',
    title: 'Invoice Edit'
  },
  {
    id: 9,
    url: '/apps/invoice/add',
    icon: 'Plus',
    title: 'Invoice Add'
  },
  {
    id: 10,
    url: '/apps/user/list',
    icon: 'AccountOutline',
    title: 'User List'
  },
  {
    id: 11,
    url: '/apps/user/view',
    icon: 'FormatListNumbered',
    title: 'User View'
  },
  {
    id: 12,
    url: '/apps/roles',
    icon: 'ShieldOutline',
    title: 'Roles'
  },
  {
    id: 13,
    url: '/apps/permissions',
    icon: 'LockOutline',
    title: 'Permissions'
  },
  {
    id: 14,
    url: '/pages/auth/login-v1',
    icon: 'Login',
    title: 'Login V1'
  },
  {
    id: 15,
    url: '/pages/auth/login-v2',
    icon: 'Login',
    title: 'Login V2'
  },
  {
    id: 16,
    url: '/pages/auth/login-with-appbar',
    icon: 'Login',
    title: 'Login With AppBar'
  },
  {
    id: 17,
    url: '/pages/auth/register-v1',
    icon: 'AccountPlusOutline',
    title: 'Register V1'
  },
  {
    id: 18,
    url: '/pages/auth/register-v2',
    icon: 'AccountPlusOutline',
    title: 'Register V2'
  },
  {
    id: 19,
    url: '/pages/auth/forgot-password-v1',
    icon: 'LockOutline',
    title: 'Forgot Password V1'
  },
  {
    id: 20,
    url: '/pages/auth/forgot-password-v2',
    icon: 'LockOutline',
    title: 'Forgot Password V2'
  },
  {
    id: 21,
    url: '/pages/auth/reset-password-v1',
    icon: 'LockReset',
    title: 'Reset Password V1'
  },
  {
    id: 22,
    url: '/pages/auth/reset-password-v2',
    icon: 'LockReset',
    title: 'Reset Password V2'
  },
  {
    id: 23,
    url: '/pages/account-settings',
    icon: 'CogOutline',
    title: 'Account Settings'
  },
  {
    id: 24,
    url: '/pages/pricing',
    icon: 'CurrencyUsd',
    title: 'Pricing'
  },
  {
    id: 25,
    url: '/pages/faq',
    icon: 'HelpCircleOutline',
    title: 'FAQ'
  },
  {
    id: 26,
    url: '/pages/knowledge-base',
    icon: 'BookOpenOutline',
    title: 'Knowledge Base'
  },
  {
    id: 27,
    url: '/pages/misc/coming-soon',
    icon: 'ClockOutline',
    title: 'Coming Soon'
  },
  {
    id: 28,
    url: '/pages/misc/under-maintenance',
    icon: 'Screwdriver',
    title: 'Under Maintenance'
  },
  {
    id: 29,
    url: '/pages/misc/404-not-found',
    icon: 'AlertCircleOutline',
    title: 'Page Not Found - 404'
  },
  {
    id: 30,
    url: '/pages/misc/401-not-authorized',
    icon: 'AccountMultipleRemoveOutline',
    title: 'Not Authorized - 401'
  },
  {
    id: 31,
    url: '/pages/misc/500-server-error',
    icon: 'AccountMultipleRemoveOutline',
    title: 'Server Error - 500'
  },
  {
    id: 32,
    url: '/pages/dialog-examples',
    icon: 'VectorArrangeBelow',
    title: 'Dialog Examples'
  },
  {
    id: 33,
    url: '/ui/typography',
    icon: 'FormatTextVariantOutline',
    title: 'Typography'
  },
  {
    id: 34,
    url: '/ui/icons',
    icon: 'StarOutline',
    title: 'Icons'
  },
  {
    id: 35,
    url: '/ui/cards/basic',
    icon: 'CardOutline',
    title: 'Card Basic'
  },
  {
    id: 36,
    url: '/ui/cards/statistics',
    icon: 'CardTextOutline',
    title: 'Card Statistics'
  },
  {
    id: 37,
    url: '/ui/cards/advanced',
    icon: 'CardBulletedSettingsOutline',
    title: 'Card Advanced'
  },
  {
    id: 38,
    url: '/ui/cards/gamification',
    icon: 'CardAccountDetailsOutline',
    title: 'Card Gamification'
  },
  {
    id: 39,
    url: '/ui/cards/actions',
    icon: 'CardPlusOutline',
    title: 'Card Actions'
  },
  {
    id: 40,
    url: '/components/accordion',
    icon: 'FullscreenExit',
    title: 'Accordion'
  },
  {
    id: 41,
    url: '/components/alerts',
    icon: 'AlertOutline',
    title: 'Alerts'
  },
  {
    id: 42,
    url: '/components/avatars',
    icon: 'AccountCircleOutline',
    title: 'Avatars'
  },
  {
    id: 43,
    url: '/components/badges',
    icon: 'CircleOutline',
    title: 'Badges'
  },
  {
    id: 44,
    url: '/components/buttons',
    icon: 'GestureTapButton',
    title: 'Buttons'
  },
  {
    id: 45,
    url: '/components/button-group',
    icon: 'CheckboxMultipleBlankOutline',
    title: 'Button Group'
  },
  {
    id: 46,
    url: '/components/chips',
    icon: 'CardOutline',
    title: 'Chips'
  },
  {
    id: 47,
    url: '/components/dialogs',
    icon: 'TextBoxOutline',
    title: 'Dialogs'
  },
  {
    id: 48,
    url: '/components/list',
    icon: 'FormatListBulleted',
    title: 'List'
  },
  {
    id: 49,
    url: '/components/menu',
    icon: 'Menu',
    title: 'Menu'
  },
  {
    id: 50,
    url: '/components/pagination',
    icon: 'DotsHorizontal',
    title: 'Pagination'
  },
  {
    id: 51,
    url: '/components/ratings',
    icon: 'StarOutline',
    title: 'Ratings'
  },
  {
    id: 52,
    url: '/components/snackbar',
    icon: 'AlertCircleOutline',
    title: 'Snackbar'
  },
  {
    id: 53,
    url: '/components/tabs',
    icon: 'Tab',
    title: 'Tabs'
  },
  {
    id: 54,
    url: '/components/toast',
    icon: 'RectangleOutline',
    title: 'Toast'
  },
  {
    id: 55,
    url: '/components/timeline',
    icon: 'TimelineOutline',
    title: 'Timeline'
  },
  {
    id: 56,
    url: '/components/tree-view',
    icon: 'FileTreeOutline',
    title: 'Tree View'
  },
  {
    id: 57,
    url: '/components/more',
    icon: 'ViewGridPlusOutline',
    title: 'More Components'
  },
  {
    id: 58,
    url: '/forms/form-elements/text-field',
    icon: 'Lastpass',
    title: 'TextField'
  },
  {
    id: 59,
    url: '/forms/form-elements/select',
    icon: 'FormatListCheckbox',
    title: 'Select'
  },
  {
    id: 60,
    url: '/forms/form-elements/checkbox',
    icon: 'CheckboxOutline',
    title: 'Checkbox'
  },
  {
    id: 61,
    url: '/forms/form-elements/radio',
    icon: 'RadioboxMarked',
    title: 'Radio'
  },
  {
    id: 62,
    url: '/forms/form-elements/textarea',
    icon: 'CardTextOutline',
    title: 'Textarea'
  },
  {
    id: 63,
    url: '/forms/form-elements/autocomplete',
    icon: 'Lastpass',
    title: 'Autocomplete'
  },
  {
    id: 64,
    url: '/forms/form-elements/pickers',
    icon: 'CalendarRange',
    title: 'Date Pickers'
  },
  {
    id: 65,
    url: '/forms/form-elements/switch',
    icon: 'ToggleSwitchOutline',
    title: 'Switch'
  },
  {
    id: 66,
    url: '/forms/form-elements/file-uploader',
    icon: 'TrayArrowUp',
    title: 'File Uploader'
  },
  {
    id: 67,
    url: '/forms/form-elements/editor',
    icon: 'SquareEditOutline',
    title: 'Editor'
  },
  {
    id: 68,
    url: '/forms/form-elements/slider',
    icon: 'TransitConnectionHorizontal',
    title: 'Slider'
  },
  {
    id: 69,
    url: '/forms/form-elements/input-mask',
    icon: 'Lastpass',
    title: 'Input Mask'
  },
  {
    id: 70,
    url: '/forms/form-layouts',
    icon: 'ViewGridOutline',
    title: 'Form Layouts'
  },
  {
    id: 71,
    url: '/forms/form-validation',
    icon: 'AlertOutline',
    title: 'Form Validation'
  },
  {
    id: 72,
    url: '/forms/form-wizard',
    icon: 'TransitConnectionHorizontal',
    title: 'Form Wizard'
  },
  {
    id: 73,
    url: '/tables/mui',
    icon: 'Table',
    title: 'Table'
  },
  {
    id: 74,
    url: '/tables/data-grid',
    icon: 'Table',
    title: 'Mui DataGrid'
  },
  {
    id: 75,
    url: '/charts/apex-charts',
    icon: 'ChartLine',
    title: 'Apex Charts'
  },
  {
    id: 76,
    url: '/charts/recharts',
    icon: 'ChartBellCurveCumulative',
    title: 'Recharts'
  },
  {
    id: 77,
    url: '/charts/chartjs',
    icon: 'ChartBellCurve',
    title: 'ChartJS'
  },
  {
    id: 78,
    url: '/acl',
    icon: 'ShieldOutline',
    title: 'Access Control (ACL)'
  }
]

// ** GET Search Data
mock.onGet('/app-bar/search').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const exactData: { [k: string]: AppBarSearchType[] } = {
    pages: []
  }

  const includeData: { [k: string]: AppBarSearchType[] } = {
    pages: []
  }

  searchData.forEach(obj => {
    const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
    if (isMatched) {
      exactData.pages.push(obj)
    }
  })

  searchData.forEach(obj => {
    const isMatched =
      !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)
    if (isMatched) {
      includeData.pages.push(obj)
    }
  })

  return [200, [...exactData.pages.concat(includeData.pages).slice(0, 8)]]
})
