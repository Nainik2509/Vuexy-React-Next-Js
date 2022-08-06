// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface ConnectedAccountsType {
  title: string
  logo: string
  checked: boolean
  subtitle: string
}

interface SocialAccountsType {
  title: string
  logo: string
  username?: string
  isConnected: boolean
}

const connectedAccountsArr: ConnectedAccountsType[] = [
  {
    checked: true,
    title: 'Google',
    logo: '/images/logos/google.png',
    subtitle: 'Calendar and Contacts'
  },
  {
    checked: false,
    title: 'Slack',
    logo: '/images/logos/slack.png',
    subtitle: 'Communications'
  },
  {
    checked: true,
    title: 'Github',
    logo: '/images/logos/github.png',
    subtitle: 'Manage your Git repositories'
  },
  {
    checked: true,
    title: 'Mailchimp',
    subtitle: 'Email marketing service',
    logo: '/images/logos/mail-chimp.png'
  },
  {
    title: 'Asana',
    checked: false,
    subtitle: 'Communication',
    logo: '/images/logos/asana.png'
  }
]

const socialAccountsArr: SocialAccountsType[] = [
  {
    title: 'Facebook',
    isConnected: false,
    logo: '/images/logos/facebook.png'
  },
  {
    title: 'Twitter',
    isConnected: true,
    username: '@ThemeSelection',
    logo: '/images/logos/twitter.png'
  },
  {
    title: 'Instagram',
    isConnected: true,
    username: '@ThemeSelection',
    logo: '/images/logos/instagram.png'
  },
  {
    title: 'Dribbble',
    isConnected: false,
    logo: '/images/logos/dribbble.png'
  },
  {
    title: 'Behance',
    isConnected: false,
    logo: '/images/logos/behance.png'
  }
]

const TabConnections = () => {
  return (
    <Grid container spacing={6}>
      {/* Connected Accounts Cards */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Connected Accounts' />
          <CardContent>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              Display content from your connected accounts on your site
            </Typography>

            {connectedAccountsArr.map(account => {
              return (
                <Box
                  key={account.title}
                  sx={{ display: 'flex', justifyContent: 'space-between', '&:not(:last-of-type)': { mb: 4 } }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 4 }}>
                      <img src={account.logo} alt={account.title} height='30' width='30' />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 500 }}>{account.title}</Typography>
                      <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                        {account.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                  <Switch defaultChecked={account.checked} />
                </Box>
              )
            })}
          </CardContent>
        </Card>
      </Grid>
      {/* Social Accounts Cards */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Social Accounts' />
          <CardContent>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              Display content from social accounts on your site
            </Typography>

            {socialAccountsArr.map(account => {
              return (
                <Box
                  key={account.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&:not(:last-of-type)': { mb: 4 }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 4, minWidth: 40 }}>
                      <img src={account.logo} alt={account.title} height='30' />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 500 }}>{account.title}</Typography>
                      <Typography
                        variant={account.isConnected ? 'body1' : 'caption'}
                        sx={{ ...(account.isConnected ? { color: 'primary.main' } : { color: 'text.disabled' }) }}
                      >
                        {account.isConnected ? account.username : 'Not Connected'}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant='outlined'
                    sx={{ px: 0, minWidth: 38, borderRadius: 1 }}
                    color={account.isConnected ? 'error' : 'secondary'}
                  >
                    <Icon icon={account.isConnected ? 'mdi:delete-outline' : 'mdi:link-variant'} />
                  </Button>
                </Box>
              )
            })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabConnections
