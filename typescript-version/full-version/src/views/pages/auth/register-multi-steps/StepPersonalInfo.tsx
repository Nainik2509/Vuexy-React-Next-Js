// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

const defaultValues = {
  address: '',
  firstName: ''
}

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, obj => showErrors('firstName', obj.value.length, obj.min))
    .required(),
  address: yup
    .string()
    .min(10, obj => showErrors('firstName', obj.value.length, obj.min))
    .required()
})

const StepPersonalDetails = ({ handleNext, handlePrev }: { [key: string]: () => void }) => {
  // ** Hook
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = () => handleNext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5'>Personal Information</Typography>
        <Typography>Enter Your Personal Information</Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Controller
              name='firstName'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  placeholder='john'
                  label='First Name'
                  onChange={onChange}
                  error={Boolean(errors.firstName)}
                  aria-describedby='validation-firstName'
                />
              )}
            />
            {errors.firstName && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-firstName'>
                {errors.firstName.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField fullWidth label='Last Name' placeholder='Doe' />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='Mobile'
            placeholder='202 555 0111'
            InputProps={{
              startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type='number' label='Pincode' placeholder='689421' />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Controller
              name='address'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Address'
                  onChange={onChange}
                  error={Boolean(errors.address)}
                  aria-describedby='validation-address'
                  placeholder='7777, Mendez Plains, Florida'
                />
              )}
            />
            {errors.address && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-address'>
                {errors.address.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Landmark' placeholder='Mendez Plains' />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label='City' placeholder='Miami' />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id='state-select'>State</InputLabel>
            <Select labelId='state-select' label='State'>
              <MenuItem value='New York'>New York</MenuItem>
              <MenuItem value='California'>California</MenuItem>
              <MenuItem value='Florida'>Florida</MenuItem>
              <MenuItem value='Washington'>Washington</MenuItem>
              <MenuItem value='Texas'>Texas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant='contained' startIcon={<ChevronLeft fontSize='small' />} onClick={handlePrev}>
              Previous
            </Button>
            <Button type='submit' variant='contained' endIcon={<ChevronRight fontSize='small' />}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default StepPersonalDetails
