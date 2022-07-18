// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import List, { ListProps } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-container': {
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
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

const ListUsers = () => {
  return (
    <StyledList disablePadding>
      <ListItem>
        <ListItemAvatar>
          <Avatar src='/images/avatars/2.png' alt='Caroline Black' />
        </ListItemAvatar>
        <Box>
          <ListItemText primary='Caroline Black' />
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
              <Circle sx={{ mr: 1, color: 'success.main', fontSize: '0.625rem' }} />
              <Typography variant='caption'>Online</Typography>
            </Box>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              13 minutes ago
            </Typography>
          </Box>
        </Box>
        <ListItemSecondaryAction>
          <Button variant='contained' size='small'>
            Add
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src='/images/avatars/1.png' alt='Alfred Copeland' />
        </ListItemAvatar>
        <Box>
          <ListItemText primary='Alfred Copeland' />
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
              <Circle sx={{ mr: 1, color: 'warning.main', fontSize: '0.625rem' }} />
              <Typography variant='caption'>Away</Typography>
            </Box>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              11 minutes ago
            </Typography>
          </Box>
        </Box>
        <ListItemSecondaryAction>
          <Button variant='contained' size='small'>
            Add
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src='/images/avatars/8.png' alt='Celia Schneider' />
        </ListItemAvatar>
        <Box>
          <ListItemText primary='Celia Schneider' />
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
              <Circle sx={{ mr: 1, color: 'secondary.main', fontSize: '0.625rem' }} />
              <Typography variant='caption'>Offline</Typography>
            </Box>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              9 minutes ago
            </Typography>
          </Box>
        </Box>

        <ListItemSecondaryAction>
          <Button variant='contained' size='small'>
            Add
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src='/images/avatars/5.png' alt='Celia Schneider' />
        </ListItemAvatar>
        <Box>
          <ListItemText primary='Max Rogan' />
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
              <Circle sx={{ mr: 1, color: 'error.main', fontSize: '0.625rem' }} />
              <Typography variant='caption'>In Meeting</Typography>
            </Box>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              28 minutes ago
            </Typography>
          </Box>
        </Box>

        <ListItemSecondaryAction>
          <Button variant='contained' size='small'>
            Add
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </StyledList>
  )
}

export default ListUsers
