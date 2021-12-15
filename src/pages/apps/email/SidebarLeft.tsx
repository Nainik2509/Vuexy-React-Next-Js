// ** React Imports
import { ElementType } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem, { ListItemProps } from '@mui/material/ListItem'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'
import SendOutline from 'mdi-material-ui/SendOutline'
import StarOutline from 'mdi-material-ui/StarOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import AlertOctagonOutline from 'mdi-material-ui/AlertOctagonOutline'

// ** Third Party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Custom Components Imports
import CustomBadge from '@core/components/mui/badge'

// ** Types
import { CustomBadgeProps } from '@core/components/mui/badge/types'
import { MailFolderType, MailLabelType, MailSidebarType } from './types'

// ** Styled Components
const ListItemStyled = styled(ListItem)<ListItemProps & { component?: ElementType; to?: string }>(({ theme }) => ({
  borderLeftWidth: '3px',
  borderLeftStyle: 'solid',
  padding: theme.spacing(0, 5),
  marginBottom: theme.spacing(1)
}))

const ListBadge = styled(CustomBadge)<CustomBadgeProps>(() => ({
  '& .MuiBadge-badge': {
    height: '18px',
    minWidth: '18px',
    transform: 'none',
    position: 'relative',
    transformOrigin: 'none'
  }
}))

const SidebarLeft = (props: MailSidebarType) => {
  // ** Props
  const {
    store,
    lgAbove,
    dispatch,
    leftSidebarOpen,
    leftSidebarWidth,
    toggleComposeOpen,
    handleSelectAllMail,
    handleLeftSidebarToggle
  } = props

  const RenderBadge = (
    folder: 'inbox' | 'draft' | 'spam',
    color: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  ) => {
    if (store.mailMeta && store.mailMeta[folder] > 0) {
      return <ListBadge skin='light' color={color} sx={{ ml: 2 }} badgeContent={store.mailMeta[folder]} />
    } else {
      return null
    }
  }

  const handleActiveItem = (type: 'folder' | 'label', value: MailFolderType | MailLabelType) => {
    if (store.filter[type] !== value) {
      return false
    } else {
      return true
    }
  }

  const activeInboxCondition =
    handleActiveItem('folder', 'inbox') && store.filter.folder === 'inbox' && store.filter.label === ''

  return (
    <Drawer
      open={leftSidebarOpen}
      onClose={handleLeftSidebarToggle}
      variant={lgAbove ? 'permanent' : 'temporary'}
      ModalProps={{
        disablePortal: true,
        keepMounted: true // Better open performance on mobile.
      }}
      sx={{
        display: 'block',
        position: lgAbove ? 'static' : 'absolute',
        '& .MuiDrawer-paper': {
          boxShadow: 'none',
          width: leftSidebarWidth,
          zIndex: lgAbove ? 2 : 'drawer',
          position: lgAbove ? 'static' : 'absolute',
          borderTopLeftRadius: theme => theme.shape.borderRadius,
          borderBottomLeftRadius: theme => theme.shape.borderRadius
        },
        '& .MuiBackdrop-root': {
          position: 'absolute',
          borderRadius: 1
        }
      }}
    >
      <Box sx={{ p: 5, overflowY: 'hidden' }}>
        <Button fullWidth variant='contained' onClick={toggleComposeOpen}>
          Compose
        </Button>
      </Box>
      <PerfectScrollbar options={{ wheelPropagation: false }}>
        <Box sx={{ pt: 0, overflowY: 'hidden' }}>
          <List component='div'>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/inbox'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme => (activeInboxCondition ? theme.palette.primary.main : 'transparent')
              }}
            >
              <a>
                <ListItemIcon sx={{ color: activeInboxCondition ? 'primary.main' : 'text.secondary' }}>
                  <EmailOutline sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Inbox'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (activeInboxCondition ? theme.palette.primary.main : '')
                    }
                  }}
                />
                {RenderBadge('inbox', 'primary')}
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/sent'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('folder', 'sent') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ color: handleActiveItem('folder', 'sent') ? 'primary.main' : 'text.secondary' }}>
                  <SendOutline sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Sent'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('folder', 'sent') ? theme.palette.primary.main : '')
                    }
                  }}
                />
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/draft'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('folder', 'draft') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ color: handleActiveItem('folder', 'draft') ? 'primary.main' : 'text.secondary' }}>
                  <PencilOutline sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Draft'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('folder', 'draft') ? theme.palette.primary.main : '')
                    }
                  }}
                />
                {RenderBadge('draft', 'warning')}
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/starred'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('folder', 'starred') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ color: handleActiveItem('folder', 'starred') ? 'primary.main' : 'text.secondary' }}>
                  <StarOutline sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Starred'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('folder', 'starred') ? theme.palette.primary.main : '')
                    }
                  }}
                />
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/spam'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('folder', 'spam') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ color: handleActiveItem('folder', 'spam') ? 'primary.main' : 'text.secondary' }}>
                  <AlertOctagonOutline sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Spam'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('folder', 'spam') ? theme.palette.primary.main : '')
                    }
                  }}
                />
                {RenderBadge('spam', 'error')}
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/trash'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('folder', 'trash') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ color: handleActiveItem('folder', 'trash') ? 'primary.main' : 'text.secondary' }}>
                  <DeleteOutline sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText
                  primary='Trash'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('folder', 'trash') ? theme.palette.primary.main : '')
                    }
                  }}
                />
              </a>
            </ListItemStyled>
          </List>
          <Typography
            component='h6'
            variant='caption'
            sx={{ mx: 6, mt: 4, mb: 0, color: 'text.disabled', letterSpacing: '0.21px', textTransform: 'uppercase' }}
          >
            Labels
          </Typography>
          <List component='div'>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/label/personal'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('label', 'personal') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ mr: 3.5 }}>
                  <Circle sx={{ fontSize: '0.75rem', color: 'success.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary='Personal'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('label', 'personal') ? theme.palette.primary.main : '')
                    }
                  }}
                />
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/label/company'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('label', 'company') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ mr: 3.5 }}>
                  <Circle sx={{ fontSize: '0.75rem', color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary='Company'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('label', 'company') ? theme.palette.primary.main : '')
                    }
                  }}
                />
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/label/important'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('label', 'important') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ mr: 3.5 }}>
                  <Circle sx={{ fontSize: '0.75rem', color: 'warning.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary='Important'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('label', 'important') ? theme.palette.primary.main : '')
                    }
                  }}
                />
              </a>
            </ListItemStyled>
            <ListItemStyled
              // component={Link}
              // href='/apps/email/label/private'
              onClick={() => setTimeout(() => dispatch(handleSelectAllMail(false)), 50)}
              sx={{
                borderLeftColor: theme =>
                  handleActiveItem('label', 'private') ? theme.palette.primary.main : 'transparent'
              }}
            >
              <a>
                <ListItemIcon sx={{ mr: 3.5 }}>
                  <Circle sx={{ fontSize: '0.75rem', color: 'error.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary='Private'
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      fontWeight: 500,
                      color: theme => (handleActiveItem('label', 'private') ? theme.palette.primary.main : '')
                    }
                  }}
                />
              </a>
            </ListItemStyled>
          </List>
        </Box>
      </PerfectScrollbar>
    </Drawer>
  )
}

export default SidebarLeft
