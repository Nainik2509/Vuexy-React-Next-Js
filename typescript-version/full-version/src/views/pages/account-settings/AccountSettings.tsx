// ** React Imports
import { ReactElement, useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'
import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Tabs Imports
import TabAccount from 'src/views/pages/account-settings/TabAccount'
import TabBilling from 'src/views/pages/account-settings/TabBilling'
import TabSecurity from 'src/views/pages/account-settings/TabSecurity'
import TabConnections from 'src/views/pages/account-settings/TabConnections'
import TabNotifications from 'src/views/pages/account-settings/TabNotifications'

// ** Types
import { PricingDataType } from 'src/@core/components/plan-details/types'

type TablistType = {
  name: string
  icon: string
  value: string
}

type tabContentListType = {
  [key: string]: ReactElement
}

const tabsList: TablistType[] = [
  { name: 'Account', value: 'account', icon: 'mdi:account-outline' },
  { name: 'Security', value: 'security', icon: 'mdi:lock-open-outline' },
  { name: 'Billing', value: 'billing', icon: 'mdi:bookmark-outline' },
  { name: 'Notifications', value: 'notifications', icon: 'mdi:bell-outline' },
  { name: 'Connections', value: 'connections', icon: 'mdi:link-variant' }
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

const StyledButtonGroup = styled(ButtonGroup)<ButtonGroupProps>(({ theme }) => ({
  boxShadow: 'none',
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'column',
    '& .MuiButton-root': {
      justifyContent: 'flex-start'
    }
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
      <StyledButtonGroup variant='contained'>
        {tabsList.map(({ name, value, icon }) => {
          const ButtonTag = activeTab !== value ? DefaultButton : Button

          return (
            <ButtonTag
              key={value}
              disableRipple
              startIcon={<Icon icon={icon} />}
              onClick={() => handleClick(value)}
              sx={{ borderRadius: '6px !important' }}
            >
              {name}
            </ButtonTag>
          )
        })}
      </StyledButtonGroup>
      <>{tabContentList[activeTab]}</>
    </>
  )
}

export default AccountSettings
