// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation: HorizontalNavItemsType = [
  {
    icon: 'HomeOutline',
    title: 'Dashboards',
    children: [
      {
        icon: 'ChartTimelineVariant',
        title: 'Analytics',
        path: '/dashboards/analytics'
      },
      {
        icon: 'CartOutline',
        title: 'eCommerce',
        path: '/dashboards/ecommerce'
      }
    ]
  },
  {
    icon: 'Apps',
    title: 'Apps',
    children: [
      {
        title: 'Email',
        icon: 'EmailOutline',
        path: '/apps/email'
      },
      {
        title: 'Chat',
        icon: 'MessageOutline',
        path: '/apps/chat'
      },
      {
        title: 'Calendar',
        icon: 'CalendarBlankOutline',
        path: '/apps/calendar'
      },
      {
        title: 'Kanban',
        icon: 'ViewGridOutline',
        path: '/apps/kanban'
      },
      {
        title: 'Invoice',
        icon: 'FileDocumentOutline',
        children: [
          {
            title: 'List',
            path: '/apps/invoice/list'
          },
          {
            title: 'Preview',
            path: '/apps/invoice/preview'
          },
          {
            title: 'Edit',
            path: '/apps/invoice/edit'
          },
          {
            title: 'Add',
            path: '/apps/invoice/add'
          }
        ]
      },
      {
        title: 'User',
        icon: 'AccountOutline',
        children: [
          {
            title: 'List',
            path: '/apps/user/list'
          },
          {
            title: 'View',
            path: '/apps/user/view'
          }
        ]
      },
      {
        title: 'Roles & Permissions',
        icon: 'ShieldOutline',
        children: [
          {
            title: 'Roles',
            path: '/apps/roles'
          },
          {
            title: 'Permissions',
            path: '/apps/permissions'
          }
        ]
      }
    ]
  },
  {
    icon: 'PaletteSwatchOutline',
    title: 'UI',
    children: [
      {
        title: 'Typography',
        icon: 'FormatLetterCase',
        path: '/ui/typography'
      },
      {
        title: 'Icons',
        path: '/ui/icons',
        icon: 'GoogleCirclesExtended'
      },
      {
        title: 'Cards',
        icon: 'CreditCardOutline',
        children: [
          {
            title: 'Basic',
            path: '/ui/cards/basic'
          },
          {
            title: 'Advanced',
            path: '/ui/cards/advanced'
          },
          {
            title: 'Statistics',
            path: '/ui/cards/statistics'
          },
          {
            title: 'Gamification',
            path: '/ui/cards/gamification'
          },
          {
            title: 'Actions',
            path: '/ui/cards/actions'
          }
        ]
      },
      {
        title: 'Components',
        icon: 'ArchiveOutline',
        children: [
          {
            title: 'Accordion',
            path: '/components/accordion'
          },
          {
            title: 'Alerts',
            path: '/components/alerts'
          },
          {
            title: 'Avatars',
            path: '/components/avatars'
          },
          {
            title: 'Badges',
            path: '/components/badges'
          },
          {
            title: 'Buttons',
            path: '/components/buttons'
          },
          {
            title: 'Button Group',
            path: '/components/button-group'
          },
          {
            title: 'Chips',
            path: '/components/chips'
          },
          {
            title: 'Dialogs',
            path: '/components/dialogs'
          },
          {
            title: 'List',
            path: '/components/list'
          },
          {
            title: 'Menu',
            path: '/components/menu'
          },
          {
            title: 'Pagination',
            path: '/components/pagination'
          },
          {
            title: 'Ratings',
            path: '/components/ratings'
          },
          {
            title: 'Snackbar',
            path: '/components/snackbar'
          },
          {
            title: 'Swiper',
            path: '/components/swiper'
          },
          {
            title: 'Tabs',
            path: '/components/tabs'
          },
          {
            title: 'Timeline',
            path: '/components/timeline'
          },
          {
            title: 'Toasts',
            path: '/components/toast'
          },
          {
            title: 'Tree View',
            path: '/components/tree-view'
          },
          {
            title: 'More',
            path: '/components/more'
          },
          {
            title: 'Test',
            path: '/components/test'
          }
        ]
      }
    ]
  },
  {
    icon: 'FileDocumentOutline',
    title: 'Pages',
    children: [
      {
        title: 'User Profile',
        icon: 'CardAccountDetailsOutline',
        children: [
          {
            title: 'Profile',
            path: '/pages/user-profile/profile'
          },
          {
            title: 'Teams',
            path: '/pages/user-profile/teams'
          },
          {
            title: 'Projects',
            path: '/pages/user-profile/projects'
          },
          {
            title: 'Connections',
            path: '/pages/user-profile/connections'
          }
        ]
      },
      {
        icon: 'AccountCogOutline',
        title: 'Account Settings',
        children: [
          {
            title: 'Account',
            path: '/pages/account-settings/account'
          },
          {
            title: 'Security',
            path: '/pages/account-settings/security'
          },
          {
            title: 'Billing',
            path: '/pages/account-settings/billing'
          },
          {
            title: 'Notifications',
            path: '/pages/account-settings/notifications'
          },

          {
            title: 'Connections',
            path: '/pages/account-settings/connections'
          }
        ]
      },
      {
        title: 'FAQ',
        path: '/pages/faq',
        icon: 'HelpCircleOutline'
      },
      {
        icon: 'BookOpenOutline',
        title: 'Knowledge Base',
        path: '/pages/knowledge-base'
      },
      {
        title: 'Pricing',
        icon: 'CurrencyUsd',
        path: '/pages/pricing'
      },
      {
        title: 'Miscellaneous',
        icon: 'FileOutline',
        children: [
          {
            openInNewTab: true,
            title: 'Coming Soon',
            path: '/pages/misc/coming-soon'
          },
          {
            openInNewTab: true,
            title: 'Under Maintenance',
            path: '/pages/misc/under-maintenance'
          },
          {
            openInNewTab: true,
            title: 'Page Not Found - 404',
            path: '/pages/misc/404-not-found'
          },
          {
            openInNewTab: true,
            title: 'Not Authorized - 401',
            path: '/pages/misc/401-not-authorized'
          },
          {
            openInNewTab: true,
            title: 'Server Error - 500',
            path: '/pages/misc/500-server-error'
          }
        ]
      },
      {
        title: 'Auth Pages',
        icon: 'LockOutline',
        children: [
          {
            title: 'Login',
            children: [
              {
                openInNewTab: true,
                title: 'Login v1',
                path: '/pages/auth/login-v1'
              },
              {
                openInNewTab: true,
                title: 'Login v2',
                path: '/pages/auth/login-v2'
              },
              {
                openInNewTab: true,
                title: 'Login With AppBar',
                path: '/pages/auth/login-with-appbar'
              }
            ]
          },
          {
            title: 'Register',
            children: [
              {
                openInNewTab: true,
                title: 'Register v1',
                path: '/pages/auth/register-v1'
              },
              {
                openInNewTab: true,
                title: 'Register v2',
                path: '/pages/auth/register-v2'
              },
              {
                openInNewTab: true,
                title: 'Register Multi-Steps',
                path: '/pages/auth/register-multi-steps'
              }
            ]
          },
          {
            title: 'Verify Email',
            children: [
              {
                openInNewTab: true,
                title: 'Verify Email v1',
                path: '/pages/auth/verify-email-v1'
              },
              {
                openInNewTab: true,
                title: 'Verify Email v2',
                path: '/pages/auth/verify-email-v2'
              }
            ]
          },
          {
            title: 'Forgot Password',
            children: [
              {
                openInNewTab: true,
                title: 'Forgot Password v1',
                path: '/pages/auth/forgot-password-v1'
              },
              {
                openInNewTab: true,
                title: 'Forgot Password v2',
                path: '/pages/auth/forgot-password-v2'
              }
            ]
          },
          {
            title: 'Reset Password',
            children: [
              {
                openInNewTab: true,
                title: 'Reset Password v1',
                path: '/pages/auth/reset-password-v1'
              },
              {
                openInNewTab: true,
                title: 'Reset Password v2',
                path: '/pages/auth/reset-password-v2'
              }
            ]
          },
          {
            title: 'Two Steps',
            children: [
              {
                openInNewTab: true,
                title: 'Two Steps v1',
                path: '/pages/auth/two-steps-v1'
              },
              {
                openInNewTab: true,
                title: 'Two Steps v2',
                path: '/pages/auth/two-steps-v2'
              }
            ]
          }
        ]
      },
      {
        title: 'Wizard Examples',
        icon: 'TransitConnectionHorizontal',
        children: [
          {
            title: 'Checkout',
            path: '/pages/wizard-examples/checkout'
          },
          {
            title: 'Property Listing',
            path: '/pages/wizard-examples/property-listing'
          },
          {
            title: 'Create Deal',
            path: '/pages/wizard-examples/create-deal'
          }
        ]
      },
      {
        icon: 'VectorArrangeBelow',
        title: 'Dialog Examples',
        path: '/pages/dialog-examples'
      }
    ]
  },
  {
    title: 'Forms & Tables',
    icon: 'CheckboxMarkedOutline',
    children: [
      {
        title: 'Form Elements',
        icon: 'FormSelect',
        children: [
          {
            title: 'Text Field',
            path: '/forms/form-elements/text-field'
          },
          {
            title: 'Select',
            path: '/forms/form-elements/select'
          },
          {
            title: 'Checkbox',
            path: '/forms/form-elements/checkbox'
          },
          {
            title: 'Radio',
            path: '/forms/form-elements/radio'
          },
          {
            title: 'Custom Inputs',
            path: '/forms/form-elements/custom-inputs'
          },
          {
            title: 'Textarea',
            path: '/forms/form-elements/textarea'
          },
          {
            title: 'Autocomplete',
            path: '/forms/form-elements/autocomplete'
          },
          {
            title: 'Date Pickers',
            path: '/forms/form-elements/pickers'
          },
          {
            title: 'Switch',
            path: '/forms/form-elements/switch'
          },
          {
            title: 'File Uploader',
            path: '/forms/form-elements/file-uploader'
          },
          {
            title: 'Editor',
            path: '/forms/form-elements/editor'
          },
          {
            title: 'Slider',
            path: '/forms/form-elements/slider'
          },
          {
            title: 'Input Mask',
            path: '/forms/form-elements/input-mask'
          },
          {
            title: 'Test',
            path: '/forms/form-elements/test'
          }
        ]
      },
      {
        icon: 'CubeOutline',
        title: 'Form Layouts',
        path: '/forms/form-layouts'
      },
      {
        title: 'Form Validation',
        path: '/forms/form-validation',
        icon: 'CheckboxMarkedCircleOutline'
      },
      {
        title: 'Form Wizard',
        path: '/forms/form-wizard',
        icon: 'TransitConnectionHorizontal'
      },
      {
        title: 'Table',
        icon: 'GridLarge',
        path: '/tables/mui'
      },
      {
        title: 'Mui DataGrid',
        icon: 'Grid',
        path: '/tables/data-grid'
      }
    ]
  },
  {
    title: 'Charts',
    icon: 'ChartDonut',
    children: [
      {
        title: 'Apex',
        icon: 'ChartLine',
        path: '/charts/apex-charts'
      },
      {
        title: 'Recharts',
        icon: 'ChartBellCurveCumulative',
        path: '/charts/recharts'
      },
      {
        title: 'ChartJS',
        path: '/charts/chartjs',
        icon: 'ChartBellCurve'
      }
    ]
  },
  {
    title: 'Others',
    icon: 'DotsHorizontal',
    children: [
      {
        path: '/acl',
        action: 'read',
        subject: 'acl-page',
        icon: 'ShieldOutline',
        title: 'Access Control'
      },
      {
        title: 'Menu Levels',
        icon: 'Menu',
        children: [
          {
            title: 'Menu Level 2.1'
          },
          {
            title: 'Menu Level 2.2',
            children: [
              {
                title: 'Menu Level 3.1'
              },
              {
                title: 'Menu Level 3.2'
              }
            ]
          }
        ]
      },
      {
        title: 'Disabled Menu',
        icon: 'EyeOffOutline',
        disabled: true
      },
      {
        title: 'Raise Support',
        icon: 'Lifebuoy',
        externalLink: true,
        openInNewTab: true,
        path: 'https://themeselection.com/support'
      },
      {
        title: 'Documentation',
        icon: 'FileDocumentOutline',
        externalLink: true,
        openInNewTab: true,
        path: 'https://themeselection.com/docs/'
      }
    ]
  }
]

mock.onGet('/api/horizontal-nav/data').reply(() => {
  return [200, navigation]
})
