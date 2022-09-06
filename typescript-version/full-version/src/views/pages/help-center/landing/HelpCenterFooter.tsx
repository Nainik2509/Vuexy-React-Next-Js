// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const HelpCenterFooter = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant='h5' sx={{ fontWeight: 600, fontSize: '1.5rem !important' }}>
        Still need help?
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography sx={{ color: 'text.secondary' }}>Our specialists are always happy to help.</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Contact us during standard business hours or email us 24/7, and we'll get back to you.
        </Typography>
      </Box>
      <div className='demo-space-x'>
        <Button variant='contained'>Visit our community</Button>
        <Button variant='contained'>Contact us</Button>
      </div>
    </Box>
  )
}

export default HelpCenterFooter
