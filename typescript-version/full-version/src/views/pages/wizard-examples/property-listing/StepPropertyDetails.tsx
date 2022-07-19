// ** MUI Imports
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'

// ** Custom Components Imports
import CustomRadioIcons from 'src/@core/components/mui/radio/CustomRadioIcons'

// ** Icons Imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import WalletOutline from 'mdi-material-ui/WalletOutline'

const dataIcons = [
  {
    value: 'sale',
    title: 'Sell the property',
    gridProps: { sm: 6, xs: 12 },
    icon: <HomeOutline sx={{ fontSize: '2rem', color: 'text.secondary' }} />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5, color: 'text.secondary' }}>
        Post your property for sale.
        <br />
        Unlimited free listing.
      </Typography>
    )
  },
  {
    value: 'rent',
    title: 'Rent the property',
    gridProps: { sm: 6, xs: 12 },
    icon: <WalletOutline sx={{ fontSize: '2rem', color: 'text.secondary' }} />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5, color: 'text.secondary' }}>
        Post your property for rent.
        <br />
        Unlimited free listing.
      </Typography>
    )
  }
]

const StepPropertyDetails = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomRadioIcons value='sale' name='custom-radios-property' data={dataIcons} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor='validation-property-select'>Property Type</InputLabel>
              <Select label='Property Type' labelId='validation-property-select' defaultValue=''>
                <MenuItem value=''></MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField type='number' label='Zip Code' placeholder='99950' aria-describedby='validation-zip-code' />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor='country-select'>Country</InputLabel>
              <Select label='Country' labelId='country-select' aria-describedby='country-select' defaultValue=''>
                <MenuItem value=''></MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='India'>India</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='State' placeholder='California' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='City' placeholder='Los Angeles' />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label='Landmark' placeholder='Nr. Hard Rock Cafe' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline minRows={2} label='Address' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StepPropertyDetails
