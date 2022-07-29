// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Check from 'mdi-material-ui/Check'
import React from 'mdi-material-ui/React'
import Github from 'mdi-material-ui/Github'
import Translate from 'mdi-material-ui/Translate'
import FlagOutline from 'mdi-material-ui/FlagOutline'
import StarOutline from 'mdi-material-ui/StarOutline'
import PhoneOutline from 'mdi-material-ui/PhoneOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ViewGridPlusOutline from 'mdi-material-ui/ViewGridPlusOutline'

// ** Types
import { ProfileTeamsType, ProfileTabCommonType } from 'src/@fake-db/types'

interface Props {
  teams: ProfileTeamsType[]
  about: ProfileTabCommonType[]
  contacts: ProfileTabCommonType[]
  overview: ProfileTabCommonType[]
}

const icons = {
  Check,
  React,
  Github,
  Translate,
  FlagOutline,
  StarOutline,
  PhoneOutline,
  EmailOutline,
  MessageOutline,
  AccountOutline,
  ViewGridPlusOutline
}

const renderList = (arr: ProfileTabCommonType[]) => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      // @ts-ignore
      const Icon = icons[item.icon]

      return (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', '&:not(:last-of-type)': { mb: 4 } }}>
          <Icon sx={{ color: 'text.secondary' }} />

          <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>
            {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
          </Typography>
        </Box>
      )
    })
  } else {
    return null
  }
}

const renderTeams = (arr: ProfileTeamsType[]) => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      // @ts-ignore
      const Icon = icons[item.icon]

      return (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', '&:not(:last-of-type)': { mb: 4 } }}>
          <Icon sx={{ color: `${item.color}.main` }} />

          <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>
            {item.property.charAt(0).toUpperCase() + item.property.slice(1)}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
          </Typography>
        </Box>
      )
    })
  } else {
    return null
  }
}

const AboutOverivew = (props: Props) => {
  const { teams, about, contacts, overview } = props

  return (
    <>
      <Card>
        <CardContent>
          <Box sx={{ mb: 7 }}>
            <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
              About
            </Typography>
            {renderList(about)}
          </Box>
          <Box sx={{ mb: 7 }}>
            <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
              Contacts
            </Typography>
            {renderList(contacts)}
          </Box>
          <Box>
            <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
              Teams
            </Typography>
            {renderTeams(teams)}
          </Box>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Box>
            <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
              Overview
            </Typography>
            {renderList(overview)}
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default AboutOverivew
