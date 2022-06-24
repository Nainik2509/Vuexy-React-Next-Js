// ** React Imports
import { useState, MouseEvent } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Components Imports
import CustomRadioIcons from 'src/@core/components/mui/radio/CustomRadioIcons'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import CrownOutline from 'mdi-material-ui/CrownOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import BriefcaseOutline from 'mdi-material-ui/BriefcaseOutline'
import OfficeBuildingOutline from 'mdi-material-ui/OfficeBuildingOutline'

const dataIcons = [
  {
    value: 'builder',
    title: 'I am the Builder',
    gridProps: { sm: 4, xs: 12 },
    icon: <OfficeBuildingOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        List property as Builder, list your project and get highest reach.
      </Typography>
    )
  },
  {
    value: 'owner',
    title: 'I am the Owner',
    gridProps: { sm: 4, xs: 12 },
    icon: <CrownOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Submit property as an Individual. Lease, Rent or Sell at the best price.
      </Typography>
    )
  },
  {
    value: 'broker',
    title: 'I am the Broker',
    gridProps: { sm: 4, xs: 12 },
    icon: <BriefcaseOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Earn highest commission by listing your clients properties at the best price.
      </Typography>
    )
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
        <CustomRadioIcons value='builder' name='custom-radios' data={dataIcons} />
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
                      {showValues ? <EyeOutline /> : <EyeOffOutline />}
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
