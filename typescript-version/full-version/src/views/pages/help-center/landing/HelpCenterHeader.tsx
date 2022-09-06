// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Autocomplete from '@mui/material/Autocomplete'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

// ** Third Party Imports
import axios from 'axios'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Card component
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  border: 0,
  boxShadow: 'none',
  backgroundSize: 'cover',
  marginBottom: theme.spacing(6.8),
  backgroundImage: 'url(/images/pages/help-center-bg.png)'
}))

// Styled TextField component
const TextField = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper
  },
  [theme.breakpoints.up('sm')]: {
    width: '55%'
  }
}))

const KnowledgeBaseHeader = () => {
  // ** States
  const [value, setValue] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [options, setOptions] = useState<string[]>([])

  const loading = open && options.length === 0

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    axios.get('/pages/help-center/articles').then(response => {
      setOptions(response.data)
    })
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  const handleRedirection = (option: string) => {
    setValue(option.replace(/-/g, ' '))
    setOpen(false)
    router.push(`/pages/help-center/article/${option}`)
  }

  return (
    <Card>
      <CardContent sx={{ pt: 23, textAlign: 'center', pb: theme => `${theme.spacing(23)} !important` }}>
        <Typography variant='h5' sx={{ fontWeight: 600, fontSize: '1.5rem !important' }}>
          Hello, how can we help?
        </Typography>
        <Autocomplete
          open={open}
          options={options}
          inputValue={value}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          isOptionEqualToValue={(option, value) => {
            console.log(option, value)

            return value === option
          }}
          onChange={(event, option) => handleRedirection(option as string)}
          renderInput={params => (
            <TextField
              {...params}
              sx={{ my: 4 }}
              placeholder='Find anything (features, payment or reset password)'
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position='start'>
                    <Icon icon='mdi:magnify' />
                  </InputAdornment>
                )
              }}
            />
          )}
          renderOption={(props, option: string) => {
            return (
              <ListItem
                {...props}
                key={option}
                sx={{ textTransform: 'capitalize' }}
                onClick={() => handleRedirection(option)}
              >
                {option.replace(/-/g, ' ')}
              </ListItem>
            )
          }}
        />

        <Typography variant='body2'>Common troubleshooting topics: eCommerce, Blogging to payment</Typography>
      </CardContent>
    </Card>
  )
}

export default KnowledgeBaseHeader
