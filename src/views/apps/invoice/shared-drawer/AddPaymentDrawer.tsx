// ** React Imports
import { useState, forwardRef, ForwardedRef } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Styles
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

interface Props {
  open: boolean
  toggle: () => void
}

interface PickerProps {
  label?: string
}

const CustomInput = forwardRef(({ ...props }: PickerProps, ref: ForwardedRef<HTMLElement>) => {
  return <TextField inputRef={ref} {...props} label={props.label || ''} />
})

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const EditInvoiceDrawer = ({ open, toggle }: Props) => {
  // ** State
  const [date, setDate] = useState<DateType>(new Date())

  return (
    <Drawer
      open={open}
      anchor='right'
      onClose={toggle}
      variant='temporary'
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: [300, 400] } }}
    >
      <Header>
        <Typography variant='h6'>Add Payment</Typography>
        <Close fontSize='small' onClick={toggle} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box sx={{ p: 5 }}>
        <FormControl fullWidth sx={{ mb: 6 }}>
          <TextField
            variant='outlined'
            label='Invoice Balance'
            InputProps={{ disabled: true }}
            defaultValue='5000.00'
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 6 }}>
          <TextField variant='outlined' label='Payment Amount' placeholder='$1000' />
        </FormControl>
        <DatePickerWrapper sx={{ mb: 6, '& .MuiFormControl-root': { width: '100%' } }}>
          <DatePicker
            id='due-date'
            selected={date}
            onChange={(date: Date) => setDate(date)}
            customInput={<CustomInput label='Payment Date' />}
          />
        </DatePickerWrapper>
        <FormControl fullWidth sx={{ mb: 6 }}>
          <InputLabel id='payment-method'>Payment Method</InputLabel>
          <Select
            label='Payment Method'
            labelId='payment-method'
            id='payment-method-select'
            defaultValue='select-method'
          >
            <MenuItem value='select-method'>Select Payment Method</MenuItem>
            <MenuItem value='Cash'>Cash</MenuItem>
            <MenuItem value='Bank Transfer'>Bank Transfer</MenuItem>
            <MenuItem value='Credit'>Credit</MenuItem>
            <MenuItem value='Debit'>Debit</MenuItem>
            <MenuItem value='Paypal'>Paypal</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 6 }}>
          <TextField
            rows={6}
            multiline
            variant='outlined'
            label='Internal Payment Note'
            placeholder='Internal Payment Note'
          />
        </FormControl>

        <Box>
          <Button size='large' variant='contained' onClick={toggle} sx={{ mr: 4 }}>
            Send
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default EditInvoiceDrawer
