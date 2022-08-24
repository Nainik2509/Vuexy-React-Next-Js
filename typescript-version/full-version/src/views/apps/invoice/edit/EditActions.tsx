// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  id: string | undefined
  toggleAddPaymentDrawer: () => void
  toggleSendInvoiceDrawer: () => void
}

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const EditActions = ({ id, toggleSendInvoiceDrawer, toggleAddPaymentDrawer }: Props) => {
  return (
    <div>
      <Card sx={{ mb: 6 }}>
        <CardContent>
          <Button
            fullWidth
            sx={{ mb: 3.5 }}
            variant='contained'
            onClick={toggleSendInvoiceDrawer}
            startIcon={<Icon icon='mdi:send-outline' />}
          >
            Send Invoice
          </Button>
          <Link href={`/apps/invoice/preview/${id}`} passHref>
            <Button fullWidth component='a' sx={{ mb: 3.5 }} color='secondary' variant='outlined'>
              Preview
            </Button>
          </Link>
          <Button fullWidth color='secondary' variant='outlined' sx={{ mb: 3.5 }}>
            Save
          </Button>
          <Button
            fullWidth
            color='success'
            variant='contained'
            onClick={toggleAddPaymentDrawer}
            startIcon={<Icon icon='mdi:currency-usd' />}
          >
            Add Payment
          </Button>
        </CardContent>
      </Card>

      <FormControl fullWidth>
        <InputLabel id='payment-select'>Accept payments via</InputLabel>
        <Select
          fullWidth
          defaultValue='Internet Banking'
          label='Accept payments via'
          labelId='payment-select'
          sx={{ mb: 4 }}
        >
          <MenuItem value='Internet Banking'>Internet Banking</MenuItem>
          <MenuItem value='Debit Card'>Debit Card</MenuItem>
          <MenuItem value='Credit Card'>Credit Card</MenuItem>
          <MenuItem value='Paypal'>Paypal</MenuItem>
          <MenuItem value='UPI Transfer'>UPI Transfer</MenuItem>
        </Select>
      </FormControl>
      <OptionsWrapper sx={{ mb: 1 }}>
        <InputLabel
          htmlFor='invoice-edit-payment-terms'
          sx={{ cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
        >
          Payment Terms
        </InputLabel>
        <Switch defaultChecked id='invoice-edit-payment-terms' />
      </OptionsWrapper>
      <OptionsWrapper sx={{ mb: 1 }}>
        <InputLabel
          htmlFor='invoice-edit-client-notes'
          sx={{ cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
        >
          Client Notes
        </InputLabel>
        <Switch id='invoice-edit-client-notes' />
      </OptionsWrapper>
      <OptionsWrapper>
        <InputLabel
          htmlFor='invoice-edit-payment-stub'
          sx={{ cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
        >
          Payment Stub
        </InputLabel>
        <Switch id='invoice-edit-payment-stub' />
      </OptionsWrapper>
    </div>
  )
}

export default EditActions
