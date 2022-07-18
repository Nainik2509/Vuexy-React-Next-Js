// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import List, { ListProps } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import LinearProgress from '@mui/material/LinearProgress'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icons Imports
import React from 'mdi-material-ui/React'
import Vuejs from 'mdi-material-ui/Vuejs'
import Angular from 'mdi-material-ui/Angular'
import Bootstrap from 'mdi-material-ui/Bootstrap'
import LanguageJavascript from 'mdi-material-ui/LanguageJavascript'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-root': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      marginBottom: theme.spacing(2),
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    },
    '& .MuiLinearProgress-root': {
      height: 5,
      borderRadius: 8,
      '& .MuiLinearProgress-bar': {
        borderRadius: 8
      }
    }
  }
}))

const ListProgress = () => {
  return (
    <StyledList disablePadding>
      <ListItem>
        <ListItemAvatar>
          <CustomAvatar skin='light' variant='rounded' color='info' sx={{ height: 36, width: 36 }}>
            <React />
          </CustomAvatar>
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText primary='React is a JavaScript library for building user interfaces' />
          <LinearProgress color='info' value={90} variant='determinate' />
        </Box>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <CustomAvatar skin='light' variant='rounded' sx={{ height: 36, width: 36 }}>
            <Bootstrap />
          </CustomAvatar>
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText primary='Bootstrap is an open source toolkit' />
          <LinearProgress value={75} variant='determinate' />
        </Box>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <CustomAvatar skin='light' variant='rounded' color='success' sx={{ height: 36, width: 36 }}>
            <Vuejs />
          </CustomAvatar>
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText primary='Vue.js is the Progressive JavaScript Framework' />
          <LinearProgress color='success' value={85} variant='determinate' />
        </Box>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <CustomAvatar skin='light' variant='rounded' color='error' sx={{ height: 36, width: 36 }}>
            <Angular />
          </CustomAvatar>
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText primary='Angular implements Functional Programming concepts' />
          <LinearProgress color='error' value={60} variant='determinate' />
        </Box>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <CustomAvatar skin='light' variant='rounded' color='warning' sx={{ height: 36, width: 36 }}>
            <LanguageJavascript />
          </CustomAvatar>
        </ListItemAvatar>
        <Box sx={{ width: '100%' }}>
          <ListItemText primary='JavaScript is the programming language of the Web' />
          <LinearProgress color='warning' value={70} variant='determinate' />
        </Box>
      </ListItem>
    </StyledList>
  )
}

export default ListProgress
