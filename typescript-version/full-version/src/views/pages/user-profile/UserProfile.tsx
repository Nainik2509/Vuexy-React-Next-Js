// ** React Imports
import { useState, useEffect, ReactElement } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Components
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'
import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components
import Teams from 'src/views/pages/user-profile/teams'
import Profile from 'src/views/pages/user-profile/profile'
import Projects from 'src/views/pages/user-profile/projects'
import Connections from 'src/views/pages/user-profile/connections'
import UserProfileHeader from 'src/views/pages/user-profile/UserProfileHeader'

type tabContentListType = {
  [key: string]: ReactElement
}

type TablistType = {
  name: string
  icon: string
  value: string
}

const tabsList: TablistType[] = [
  { name: 'Profile', value: 'profile', icon: 'mdi:account-outline' },
  { name: 'Teams', value: 'teams', icon: 'mdi:account-multiple-outline' },
  { name: 'Projects', value: 'projects', icon: 'mdi:view-grid-outline' },
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
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserProfileHeader />
      </Grid>
      <Grid item xs={12}>
        <StyledButtonGroup variant='contained'>
          {tabsList.map(({ name, value, icon }, index) => {
            const ButtonTag = activeTab !== value ? DefaultButton : Button

            return (
              <ButtonTag
                key={index}
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
      </Grid>
      <Grid item xs={12}>
        {tabContentList[activeTab]}
      </Grid>
    </Grid>
  )
}

export default UserProfile
