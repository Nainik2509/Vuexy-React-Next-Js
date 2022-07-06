// ** React Imports
import { useState, useEffect, ReactElement } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Components
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'
import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup'

// ** Icons Imports
import LinkVariant from 'mdi-material-ui/LinkVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ViewGridOutline from 'mdi-material-ui/ViewGridOutline'
import AccountMultipleOutline from 'mdi-material-ui/AccountMultipleOutline'

// ** Demo Components
import Teams from 'src/views/pages/user-profile/teams'
import Profile from 'src/views/pages/user-profile/profile'
import Projects from 'src/views/pages/user-profile/projects'
import Connections from 'src/views/pages/user-profile/connections'
import UserProfileHeader from 'src/views/pages/user-profile/UserProfileHeader'

type tabContentListType = {
  [key: string]: ReactElement
}

const tabsList: TablistType[] = [
  { name: 'Profile', value: 'profile', icon: <AccountOutline /> },
  { name: 'Teams', value: 'teams', icon: <AccountMultipleOutline /> },
  { name: 'Projects', value: 'projects', icon: <ViewGridOutline /> },
  { name: 'Connections', value: 'connections', icon: <LinkVariant /> }
]

type TablistType = {
  name: string
  value: string
  icon: ReactElement
}

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
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),

  [theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'column',
    '& .MuiButton-root': {
      justifyContent: 'flex-start'
    }
  }
}))

const UserProfile = ({ tab, data }: any) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)

  // ** Hooks
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push({
      pathname: `/pages/user-profile/${value.toLowerCase()}`
    })
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const tabContentList: tabContentListType = {
    profile: <Profile data={data} />,
    teams: <Teams data={data} />,
    projects: <Projects data={data} />,
    connections: <Connections data={data} />
  }

  return (
    <>
      <UserProfileHeader />
      <StyledButtonGroup variant='contained'>
        {tabsList.map(({ name, value, icon }, index) => {
          const ButtonTag = activeTab !== value ? DefaultButton : Button

          return (
            <ButtonTag
              key={index}
              disableRipple
              startIcon={icon}
              onClick={() => handleClick(value)}
              sx={{ borderRadius: '6px !important' }}
            >
              {name}
            </ButtonTag>
          )
        })}
      </StyledButtonGroup>
      {data ? <>{tabContentList[activeTab]}</> : null}
    </>
  )
}

export default UserProfile
