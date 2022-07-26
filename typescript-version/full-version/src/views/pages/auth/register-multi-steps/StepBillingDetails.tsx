// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

// ** Third Party Imports
import * as yup from 'yup'
import Payment from 'payment'
import Cards, { Focused } from 'react-credit-cards'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Custom Components Imports
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

const defaultValues = {
  cardNumber: ''
}

const data = [
  {
    icon: null,
    value: 'basic',
    gridProps: { sm: 4, xs: 12 },
    title: (
      <Typography variant='h6' sx={{ fontWeight: 500 }}>
        Basic
      </Typography>
    ),
    content: (
      <>
        <Typography variant='body2'>A simple start for start ups & Students</Typography>
        <Box sx={{ mt: 2, display: 'flex' }}>
          <Typography component='sup' sx={{ mt: 1.5, color: 'primary.main', alignSelf: 'flex-start' }}>
            $
          </Typography>
          <Typography component='span' sx={{ fontSize: '2rem', color: 'primary.main' }}>
            0
          </Typography>
          <Typography component='sub' sx={{ mb: 1.5, alignSelf: 'flex-end', color: 'text.disabled' }}>
            /month
          </Typography>
        </Box>
      </>
    )
  },
  {
    icon: null,
    value: 'standard',
    gridProps: { sm: 4, xs: 12 },
    title: (
      <Typography variant='h6' sx={{ fontWeight: 500 }}>
        Standard
      </Typography>
    ),
    content: (
      <>
        <Typography variant='body2'>For small to medium businesses</Typography>
        <Box sx={{ mt: 2, display: 'flex' }}>
          <Typography component='sup' sx={{ mt: 1.5, color: 'primary.main', alignSelf: 'flex-start' }}>
            $
          </Typography>
          <Typography component='span' sx={{ fontSize: '2rem', fontWeight: 500, color: 'primary.main' }}>
            99
          </Typography>
          <Typography component='sub' sx={{ mb: 1.5, alignSelf: 'flex-end', color: 'text.disabled' }}>
            /month
          </Typography>
        </Box>
      </>
    )
  },
  {
    icon: null,
    value: 'enterprise',
    gridProps: { sm: 4, xs: 12 },
    title: (
      <Typography variant='h6' sx={{ fontWeight: 500 }}>
        Enterprise
      </Typography>
    ),
    content: (
      <>
        <Typography variant='body2'>Solution for enterprise & organizations</Typography>
        <Box sx={{ mt: 2, display: 'flex' }}>
          <Typography component='sup' sx={{ mt: 1.5, color: 'primary.main', alignSelf: 'flex-start' }}>
            $
          </Typography>
          <Typography component='span' sx={{ fontSize: '2rem', color: 'primary.main' }}>
            499
          </Typography>
          <Typography component='sub' sx={{ mb: 1.5, alignSelf: 'flex-end', color: 'text.disabled' }}>
            /month
          </Typography>
        </Box>
      </>
    )
  }
]

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
  cardNumber: yup
    .string()
    .min(16, obj => showErrors('cardNumber', obj.value.length, obj.min))
    .required()
})

const StepBillingDetails = ({ handlePrev }: { handlePrev: () => void }) => {
  // ** State
  const [cvc, setCvc] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [focus, setFocus] = useState<Focused>()
  const [expiry, setExpiry] = useState<string>('')

  // ** Hook
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleBlur = () => setFocus(undefined)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (target.name === 'cardNumber') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setValue('cardNumber', target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, getValues('cardNumber'), Payment)
      setCvc(target.value)
    }
  }

  const onSubmit = () => alert('Submitted..!!')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5'>Select Plan</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Select plan as per your requirement</Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CustomRadioIcons data={data} value='basic' name='custom-radios-plan' />
        </Grid>

        <Grid item xs={12}>
          <Box>
            <Typography variant='h5'>Payment Information</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your card information</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <CardWrapper sx={{ '& .rccs': { m: '0 auto' } }}>
            <Cards cvc={cvc} focused={focus} expiry={expiry} name={name} number={getValues('cardNumber')} />
          </CardWrapper>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Controller
              name='cardNumber'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  fullWidth
                  value={value}
                  autoComplete='off'
                  label='Card Number'
                  onBlur={handleBlur}
                  placeholder='1356 3215 6548 7898'
                  error={Boolean(errors.cardNumber)}
                  aria-describedby='validation-cardNumber'
                  onFocus={e => setFocus(e.target.name as Focused)}
                  onChange={e => {
                    handleInputChange(e)
                    onChange(e)
                  }}
                />
              )}
            />
            {errors.cardNumber && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-cardNumber'>
                {errors.cardNumber.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name='name'
            value={name}
            autoComplete='off'
            onBlur={handleBlur}
            label='Name on Card'
            placeholder='John Doe'
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name as Focused)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            name='expiry'
            label='Expiry'
            value={expiry}
            onBlur={handleBlur}
            placeholder='MM/YY'
            onChange={handleInputChange}
            inputProps={{ maxLength: '5' }}
            onFocus={e => setFocus(e.target.name as Focused)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            name='cvc'
            label='CVC'
            value={cvc}
            autoComplete='off'
            onBlur={handleBlur}
            onChange={handleInputChange}
            onFocus={e => setFocus(e.target.name as Focused)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <Tooltip title='Card Verification Value'>
                    <HelpCircleOutline fontSize='small' sx={{ cursor: 'pointer' }} />
                  </Tooltip>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant='contained' startIcon={<ChevronLeft fontSize='small' />} onClick={handlePrev}>
              Previous
            </Button>
            <Button type='submit' color='success' variant='contained'>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default StepBillingDetails
