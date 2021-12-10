// ** Icon imports
import Table from 'mdi-material-ui/Table'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FormSelect from 'mdi-material-ui/FormSelect'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import HomeOutlined from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'

// ** Type import
import { Navigation } from 'navigation/types'

const navigation = (): Navigation[] => [
  {
    title: 'Dashboards',
    icon: HomeOutlined,
    badgeContent: 'new',
    badgeColor: 'error',
    children: [
      {
        title: 'Analytics',
        navLink: '/dashboard/analytics'
      },
      {
        title: 'eCommerce',
        navLink: '/dashboard/ecommerce'
      }
    ]
  },
  {
    sectionTitle: 'Apps & Pages'
  },
  {
    title: 'Email',
    icon: EmailOutline,
    navLink: '/apps/email'
  },
  {
    title: 'Chat',
    icon: MessageOutline,
    navLink: '/apps/chat'
  },
  {
    title: 'Calendar',
    icon: CalendarBlankOutline,
    navLink: '/apps/calendar'
  },
  {
    title: 'Invoice',
    icon: FileDocumentOutline,
    children: [
      {
        title: 'List',
        navLink: '/apps/invoice/list'
      },
      {
        title: 'Preview',
        navLink: '/apps/invoice/preview'
      },
      {
        title: 'Edit',
        navLink: '/apps/invoice/edit'
      },
      {
        title: 'Add',
        navLink: '/apps/invoice/add'
      }
    ]
  },
  {
    title: 'User',
    icon: AccountOutline,
    children: [
      {
        title: 'List',
        navLink: '/apps/user/list'
      },
      {
        title: 'View',
        navLink: '/apps/user/view'
      }
    ]
  },
  {
    title: 'Roles & Permissions',
    icon: LockOutline,
    children: [
      {
        title: 'Roles',
        navLink: '/apps/roles'
      },
      {
        title: 'Permissions',
        navLink: '/apps/permissions'
      }
    ]
  },
  {
    title: 'Pages',
    icon: FileDocumentOutline,
    children: [
      {
        title: 'Authentication',
        children: [
          {
            title: 'Login',
            children: [
              {
                openInNewTab: true,
                title: 'Login v1',
                navLink: '/pages/auth/login-v1'
              },
              {
                openInNewTab: true,
                title: 'Login v2',
                navLink: '/pages/auth/login-v2'
              },
              {
                openInNewTab: true,
                title: 'Login With AppBar',
                navLink: '/pages/auth/login-with-appbar'
              }
            ]
          },
          {
            title: 'Register',
            children: [
              {
                openInNewTab: true,
                title: 'Register v1',
                navLink: '/pages/auth/register-v1'
              },
              {
                openInNewTab: true,
                title: 'Register v2',
                navLink: '/pages/auth/register-v2'
              }
            ]
          },
          {
            title: 'Forgot Password',
            children: [
              {
                openInNewTab: true,
                title: 'Forgot Password v1',
                navLink: '/pages/auth/forgot-password-v1'
              },
              {
                openInNewTab: true,
                title: 'Forgot Password v2',
                navLink: '/pages/auth/forgot-password-v2'
              }
            ]
          },
          {
            title: 'Reset Password',
            children: [
              {
                openInNewTab: true,
                title: 'Reset Password v1',
                navLink: '/pages/auth/reset-password-v1'
              },
              {
                openInNewTab: true,
                title: 'Reset Password v2',
                navLink: '/pages/auth/reset-password-v2'
              }
            ]
          }
        ]
      },
      {
        title: 'Account Settings',
        navLink: '/pages/account-settings'
      },
      {
        title: 'Pricing',
        navLink: '/pages/pricing'
      },
      {
        title: 'FAQ',
        navLink: '/pages/faq'
      },
      {
        title: 'Knowledge Base',
        navLink: '/pages/knowledge-base'
      },
      {
        title: 'Miscellaneous',
        children: [
          {
            openInNewTab: true,
            title: 'Coming Soon',
            navLink: '/pages/misc/coming-soon'
          },
          {
            openInNewTab: true,
            title: 'Not Authorized',
            navLink: '/pages/misc/not-authorized'
          },
          {
            openInNewTab: true,
            title: 'Under Maintenance',
            navLink: '/pages/misc/under-maintenance'
          },
          {
            openInNewTab: true,
            title: 'Error',
            navLink: '/pages/misc/error'
          }
        ]
      }
    ]
  },
  {
    icon: VectorArrangeBelow,
    title: 'Dialog Examples',
    navLink: '/pages/dialog-examples'
  },
  {
    sectionTitle: 'User Interface'
  },
  {
    title: 'Typography',
    icon: FormatLetterCase,
    navLink: '/ui/typography'
  },
  {
    title: 'Icons',
    navLink: '/ui/icons',
    icon: GoogleCirclesExtended
  },
  {
    title: 'Cards',
    icon: CreditCardOutline,
    children: [
      {
        title: 'Basic',
        navLink: '/ui/card-basic'
      },
      {
        title: 'Statistics',
        navLink: '/ui/card-statistics'
      },
      {
        title: 'Advanced',
        navLink: '/ui/card-advanced'
      },
      {
        title: 'Gamification',
        navLink: '/ui/card-gamification'
      },
      {
        title: 'Actions',
        navLink: '/ui/card-actions'
      }
    ]
  },
  {
    badgeContent: '16',
    title: 'Components',
    icon: ArchiveOutline,
    badgeColor: 'primary',
    children: [
      {
        title: 'Accordion',
        navLink: '/components/accordion'
      },
      {
        title: 'Alerts',
        navLink: '/components/alerts'
      },
      {
        title: 'Avatars',
        navLink: '/components/avatars'
      },
      {
        title: 'Badges',
        navLink: '/components/badges'
      },
      {
        title: 'Buttons',
        navLink: '/components/buttons'
      },
      {
        title: 'Button Group',
        navLink: '/components/button-group'
      },
      {
        title: 'Chips',
        navLink: '/components/chips'
      },
      {
        title: 'Dialogs',
        navLink: '/components/dialogs'
      },
      {
        title: 'List',
        navLink: '/components/list'
      },
      {
        title: 'Menu',
        navLink: '/components/menu'
      },
      {
        title: 'Pagination',
        navLink: '/components/pagination'
      },
      {
        title: 'Ratings',
        navLink: '/components/ratings'
      },
      {
        title: 'Snackbar',
        navLink: '/components/snackbar'
      },
      {
        title: 'Tabs',
        navLink: '/components/tabs'
      },
      {
        title: 'Timeline',
        navLink: '/components/timeline'
      },
      {
        title: 'Tree View',
        navLink: '/components/tree-view'
      },
      {
        title: 'More',
        navLink: '/components/more'
      },
      {
        title: 'Test',
        navLink: '/components/test'
      }
    ]
  },
  {
    sectionTitle: 'Forms & Tables'
  },
  {
    title: 'Form Elements',
    icon: FormSelect,
    children: [
      {
        title: 'Text Field',
        navLink: '/form-elements/text-field'
      },
      {
        title: 'Select',
        navLink: '/form-elements/select'
      },
      {
        title: 'Checkbox',
        navLink: '/form-elements/checkbox'
      },
      {
        title: 'Radio',
        navLink: '/form-elements/radio'
      },
      {
        title: 'Textarea',
        navLink: '/form-elements/textarea'
      },
      {
        title: 'Autocomplete',
        navLink: '/form-elements/autocomplete'
      },
      {
        title: 'Date Pickers',
        navLink: '/form-elements/pickers'
      },
      {
        title: 'Switch',
        navLink: '/form-elements/switch'
      },
      {
        title: 'File Uploader',
        navLink: '/form-elements/file-uploader'
      },
      {
        title: 'Editor',
        navLink: '/form-elements/editor'
      },
      {
        title: 'Slider',
        navLink: '/form-elements/slider'
      },
      {
        title: 'Input Mask',
        navLink: '/form-elements/input-mask'
      },
      {
        title: 'Test',
        navLink: '/form-elements/test'
      }
    ]
  },
  {
    icon: CubeOutline,
    title: 'Form Layouts',
    navLink: '/form-layouts'
  },
  {
    title: 'Form Validation',
    navLink: '/form-validation',
    icon: CheckboxMarkedCircleOutline
  },
  {
    title: 'Form Wizard',
    navLink: '/form-wizard',
    icon: PackageVariantClosed
  },
  {
    title: 'Table',
    icon: Table,
    navLink: '/table'
  },
  {
    title: 'React DataTable',
    icon: Table,
    navLink: '/data-table'
  },
  {
    sectionTitle: 'Charts & Misc'
  },
  {
    title: 'Charts',
    icon: ChartDonut,
    children: [
      {
        title: 'Apex',
        navLink: '/charts/apex-charts'
      },
      {
        title: 'Recharts',
        navLink: '/charts/recharts'
      },
      {
        title: 'ChartJS',
        navLink: '/charts/chartjs'
      }
    ]
  },
  {
    action: 'read',
    resource: 'ACL',
    icon: ShieldOutline,
    title: 'Access Control',
    navLink: '/pages/access-control'
  },
  {
    title: 'Others',
    icon: DotsHorizontal,
    children: [
      {
        title: 'Menu Levels',
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
        disabled: true
      },
      {
        title: 'Raise Support',
        externalLink: true,
        openInNewTab: true,
        navLink: 'https://themeselection.com/support'
      },
      {
        title: 'Documentation',
        externalLink: true,
        openInNewTab: true,
        navLink: '/documentation'
      }
    ]
  }
]

export default navigation
