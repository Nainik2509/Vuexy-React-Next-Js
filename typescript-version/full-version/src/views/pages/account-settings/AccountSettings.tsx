// ** React Imports
import { ReactElement, useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button, { ButtonProps } from '@mui/material/Button'

// ** Icons Imports
import LinkVariant from 'mdi-material-ui/LinkVariant'
import BellOutline from 'mdi-material-ui/BellOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import BookmarkOutline from 'mdi-material-ui/BookmarkOutline'

// ** Demo Tabs Imports
import TabAccount from 'src/views/pages/account-settings/TabAccount'
import TabBilling from 'src/views/pages/account-settings/TabBilling'
import TabSecurity from 'src/views/pages/account-settings/TabSecurity'
import TabConnections from 'src/views/pages/account-settings/TabConnections'
import TabNotifications from 'src/views/pages/account-settings/TabNotifications'

// ** Types
import { PricingDataType } from 'src/@core/components/plan-details/types'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

type TablistType = {
  name: string
  value: string
  icon: ReactElement
}

type tabContentListType = {
  [key: string]: ReactElement
}

const tabsList: TablistType[] = [
  { name: 'Account', value: 'account', icon: <AccountOutline /> },
  { name: 'Security', value: 'security', icon: <LockOpenOutline /> },
  { name: 'Billing', value: 'billing', icon: <BookmarkOutline /> },
  { name: 'Notifications', value: 'notifications', icon: <BellOutline /> },
  { name: 'Connections', value: 'connections', icon: <LinkVariant /> }
]

const DefaultButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: 'none !important',
  boxShadow: 'none !important',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent !important',
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

const AccountSettings = ({ tab, apiPricingData }: { tab: string; apiPricingData: PricingDataType }) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)

  // ** Hooks
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push({
      pathname: `/pages/account-settings/${value.toLowerCase()}`
    })
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const tabContentList: tabContentListType = {
    account: <TabAccount />,
    security: <TabSecurity />,
    connections: <TabConnections />,
    notifications: <TabNotifications />,
    billing: <TabBilling apiPricingData={apiPricingData} />
  }

  return (
    <>
      <ButtonGroup variant='contained' sx={{ mb: 4, boxShadow: 'none' }}>
        {tabsList.map(({ name, value, icon }) => {
          const ButtonTag = activeTab !== value ? DefaultButton : Button

          return (
            <ButtonTag
              key={value}
              disableRipple
              startIcon={icon}
              onClick={() => handleClick(value)}
              sx={{ borderRadius: '6px !important' }}
            >
              {name}
            </ButtonTag>
          )
        })}
      </ButtonGroup>
      <>{tabContentList[activeTab]}</>
    </>
  )
}

export default AccountSettings
