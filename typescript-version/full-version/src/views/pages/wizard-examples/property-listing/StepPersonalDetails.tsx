// ** React Imports
import { useState, MouseEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data = [
  {
    value: 'builder',
    title: 'I am the Builder',
    gridProps: { sm: 4, xs: 12 },
    content: 'List property as Builder, list your project and get highest reach.',
    icon: (
      <Box component='span' sx={{ mb: 2, color: 'text.secondary' }}>
        <Icon icon='mdi:office-building-outline' fontSize='2rem' />
      </Box>
    )
  },
  {
    value: 'owner',
    title: 'I am the Owner',
    gridProps: { sm: 4, xs: 12 },
    icon: (
      <Box component='span' sx={{ mb: 2, color: 'text.secondary' }}>
        <Icon icon='mdi:crown-outline' fontSize='2rem' />
      </Box>
    ),
    content: 'Submit property as an Individual. Lease, Rent or Sell at the best price.'
  },
  {
    value: 'broker',
    title: 'I am the Broker',
    gridProps: { sm: 4, xs: 12 },
    icon: (
      <Box component='span' sx={{ mb: 2, color: 'text.secondary' }}>
        <Icon icon='mdi:briefcase-outline' fontSize='2rem' />
      </Box>
    ),
    content: 'Earn highest commission by listing your clients properties at the best price.'
  }
]

const StepPersonalDetails = () => {
  // ** State
  const [showValues, setShowValues] = useState<boolean>(false)

  const handleTogglePasswordView = () => {
    setShowValues(!showValues)
  }
  const handleMousePasswordView = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomRadioIcons data={data} value='builder' name='custom-radios' />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField label='First Name' placeholder='John' />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField label='Last Name' placeholder='Doe' />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Username' placeholder='john.doe' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Password'
              type={showValues ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleTogglePasswordView}
                      aria-label='toggle password visibility'
                      onMouseDown={handleMousePasswordView}
                    >
                      {showValues ? <Icon icon='mdi:eye-outline' /> : <Icon icon='mdi:eye-off-outline' />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type='email' label='Email' placeholder='john.doe@email.com' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Contact'
              placeholder='202 555 0111'
              InputProps={{
                startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StepPersonalDetails
