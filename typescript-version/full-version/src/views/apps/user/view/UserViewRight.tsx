// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components Imports
import UserViewBilling from 'src/views/apps/user/view/UserViewBilling'
import UserViewOverview from 'src/views/apps/user/view/UserViewOverview'
import UserViewSecurity from 'src/views/apps/user/view/UserViewSecurity'
import UserViewConnection from 'src/views/apps/user/view/UserViewConnection'
import UserViewNotification from 'src/views/apps/user/view/UserViewNotification'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'

interface Props {
  invoiceData: InvoiceType[]
}

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(3)
  }
}))

const UserViewRight = ({ invoiceData }: Props) => {
  // ** State
  const [value, setValue] = useState<string>('overview')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='overview' label='Overview' icon={<Icon icon='mdi:account-outline' />} />
        <Tab value='security' label='Security' icon={<Icon icon='mdi:lock-outline' />} />
        <Tab value='billing-plan' label='Billing & Plan' icon={<Icon icon='mdi:bookmark-outline' />} />
        <Tab value='notification' label='Notification' icon={<Icon icon='mdi:bell-outline' />} />
        <Tab value='connection' label='Connection' icon={<Icon icon='mdi:link-variant' />} />
      </TabList>
      <Box sx={{ mt: 6 }}>
        <TabPanel sx={{ p: 0 }} value='overview'>
          <UserViewOverview invoiceData={invoiceData} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <UserViewSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='billing-plan'>
          <UserViewBilling />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='notification'>
          <UserViewNotification />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='connection'>
          <UserViewConnection />
        </TabPanel>
      </Box>
    </TabContext>
  )
}

export default UserViewRight
