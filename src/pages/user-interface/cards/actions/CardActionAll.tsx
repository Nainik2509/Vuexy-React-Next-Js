// ** React Imports
import { FC, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import Backdrop from '@mui/material/Backdrop'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Close from 'mdi-material-ui/Close'
import Refresh from 'mdi-material-ui/Refresh'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const CardActionAll: FC = () => {
  // ** States
  const [reload, setReload] = useState<boolean>(false)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [visibility, setVisibility] = useState<boolean>(true)

  const handleBackDrop = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  return (
    <Fade in={visibility} timeout={600}>
      <Card sx={{ position: 'relative' }}>
        <CardHeader
          title='All Actions'
          action={
            <Box>
              <IconButton aria-label='collapse' size='small' onClick={() => setCollapsed(!collapsed)} sx={{ mr: 2 }}>
                {!collapsed ? <ChevronDown fontSize='small' /> : <ChevronUp fontSize='small' />}
              </IconButton>
              <IconButton aria-label='reload' size='small' onClick={() => handleBackDrop()} sx={{ mr: 2 }}>
                <Refresh fontSize='small' />
              </IconButton>
              <IconButton aria-label='close' size='small' onClick={() => setVisibility(false)}>
                <Close fontSize='small' />
              </IconButton>
            </Box>
          }
        />
        <Collapse in={collapsed}>
          <CardContent>
            <Typography variant='body2'>
              You can specifically add remove action using <code>actionRemove</code> prop Click on{' '}
              <Close fontSize='small' sx={{ verticalAlign: 'bottom' }} /> icon to see it in action
            </Typography>
          </CardContent>

          <Backdrop
            open={reload}
            sx={{
              position: 'absolute',
              zIndex: theme => theme.zIndex.drawer + 1,
              color: theme => theme.palette.common.white
            }}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
        </Collapse>
      </Card>
    </Fade>
  )
}

export default CardActionAll
