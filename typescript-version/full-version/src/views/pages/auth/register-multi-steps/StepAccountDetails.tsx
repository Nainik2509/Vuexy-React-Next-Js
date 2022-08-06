// ** React Imports
import { useState, MouseEvent } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface State {
  showPassword: boolean
  showConfirmPassword: boolean
}

const defaultValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
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
  email: yup.string().required(),
  username: yup
    .string()
    .min(6, obj => showErrors('username', obj.value.length, obj.min))
    .required(),
  password: yup
    .string()
    .min(8, obj => showErrors('password', obj.value.length, obj.min))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match')
})

const StepAccountDetails = ({ handleNext }: { handleNext: () => void }) => {
  // ** States
  const [values, setValues] = useState<State>({
    showPassword: false,
    showConfirmPassword: false
  })

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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }
  const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onSubmit = () => handleNext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5'>Account Information</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Enter Your Account Details</Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Controller
              name='username'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Username'
                  onChange={onChange}
                  placeholder='johndoe'
                  error={Boolean(errors.username)}
                  aria-describedby='validation-username'
                />
              )}
            />
            {errors.username && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-username'>
                {errors.username.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type='email'
                  label='Email'
                  value={value}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  placeholder='john.doe@email.com'
                  aria-describedby='validation-email'
                />
              )}
            />
            {errors.email && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-email'>
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor='input-password' error={Boolean(errors.password)}>
              Password
            </InputLabel>
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  value={value}
                  label='Password'
                  id='input-password'
                  onChange={onChange}
                  error={Boolean(errors.password)}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <Icon icon='mdi:eye-outline' /> : <Icon icon='mdi:eye-off-outline' />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password && <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor='input-confirm-password' error={Boolean(errors.confirmPassword)}>
              Password
            </InputLabel>
            <Controller
              control={control}
              name='confirmPassword'
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <OutlinedInput
                  value={value}
                  label='Password'
                  onChange={onChange}
                  id='input-confirm-password'
                  error={Boolean(errors.confirmPassword)}
                  type={values.showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {values.showConfirmPassword ? (
                          <Icon icon='mdi:eye-outline' />
                        ) : (
                          <Icon icon='mdi:eye-off-outline' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.confirmPassword && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.confirmPassword.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Profile Link' placeholder='johndoe/profile' />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button disabled variant='contained' startIcon={<Icon icon='mdi:chevron-left' fontSize={20} />}>
              Previous
            </Button>
            <Button type='submit' variant='contained' endIcon={<Icon icon='mdi:chevron-right' fontSize={20} />}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default StepAccountDetails
