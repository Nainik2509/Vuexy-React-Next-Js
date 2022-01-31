// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Components
import toast from 'react-hot-toast'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ToastTypes = () => {
  const handleToast = () => {
    const toastID = toast.loading('Loading...')

    setTimeout(() => {
      toast.dismiss(toastID)
    }, 2000)
  }

  const handleCustomToast = () => {
    return toast(
      t => (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt='Victor Anderson'
              src='/images/avatars/3.png'
              sx={{ mr: 4, width: '2.35rem', height: '2.35rem' }}
            />
            <Box>
              <Typography>John Doe</Typography>
              <Typography variant='caption'>Sure! 8:30pm works great!</Typography>
            </Box>
          </Box>
          <IconButton onClick={() => toast.dismiss(t.id)}>
            <Close fontSize='small' />
          </IconButton>
        </Box>
      ),
      {
        style: {
          minWidth: '300px'
        }
      }
    )
  }

  return (
    <Card>
      <CardHeader title='Types' />
      <CardContent>
        <div className='demo-space-x'>
          <Button variant='contained' onClick={() => toast('Blank Toast')}>
            Blank
          </Button>
          <Button color='success' variant='contained' onClick={() => toast.success('Success Toast')}>
            Success
          </Button>
          <Button color='error' variant='contained' onClick={() => toast.error('Error Toast')}>
            error
          </Button>
          <Button color='warning' variant='contained' onClick={handleToast}>
            Loading
          </Button>
          <Button color='info' variant='contained' onClick={handleCustomToast}>
            Custom
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ToastTypes
