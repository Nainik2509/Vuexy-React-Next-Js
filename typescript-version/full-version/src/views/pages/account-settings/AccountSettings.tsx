// ** React Imports
import { ReactElement, useState, useEffect, SyntheticEvent } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icons Imports
import LinkVariant from 'mdi-material-ui/LinkVariant'
import BellOutline from 'mdi-material-ui/BellOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import BookmarkOutline from 'mdi-material-ui/BookmarkOutline'

// ** Types
import { PricingPlanType } from 'src/@core/components/plan-details/types'

// ** Demo Tabs Imports
import TabAccount from 'src/views/pages/account-settings/TabAccount'
import TabBilling from 'src/views/pages/account-settings/TabBilling'
import TabSecurity from 'src/views/pages/account-settings/TabSecurity'
import TabConnections from 'src/views/pages/account-settings/TabConnections'
import TabNotifications from 'src/views/pages/account-settings/TabNotifications'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 130,
    borderRadius: theme.shape.borderRadius
  }
}))

const AccountSettings = ({ tab, apiPricingPlanData }: { tab: string; apiPricingPlanData: PricingPlanType[] }) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // ** Hooks
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true)
    router
      .push({
        pathname: `/pages/account-settings/${value.toLowerCase()}`
      })
      .then(() => {
        setActiveTab(value)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const tabContentList: { [key: string]: ReactElement } = {
    account: <TabAccount />,
    security: <TabSecurity />,
    connections: <TabConnections />,
    notifications: <TabNotifications />,
    billing: <TabBilling apiPricingPlanData={apiPricingPlanData} />
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TabContext value={activeTab}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TabList onChange={handleChange} aria-label='customized tabs example'>
                <Tab
                  value='account'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccountOutline sx={{ mr: 2 }} />
                      Account
                    </Box>
                  }
                />
                <Tab
                  value='security'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LockOpenOutline sx={{ mr: 2 }} />
                      Security
                    </Box>
                  }
                />
                <Tab
                  value='billing'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <BookmarkOutline sx={{ mr: 2 }} />
                      Billing
                    </Box>
                  }
                />
                <Tab
                  value='notifications'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <BellOutline sx={{ mr: 2 }} />
                      Notifications
                    </Box>
                  }
                />
                <Tab
                  value='connections'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LinkVariant sx={{ mr: 2 }} />
                      Connections
                    </Box>
                  }
                />
              </TabList>
            </Grid>
            <Grid item xs={12}>
              {isLoading ? (
                <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <CircularProgress sx={{ mb: 4 }} />
                  <Typography>Loading...</Typography>
                </Box>
              ) : (
                <TabPanel sx={{ p: 0 }} value={activeTab}>
                  {tabContentList[activeTab]}
                </TabPanel>
              )}
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default AccountSettings
