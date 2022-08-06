// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  id: string | undefined
  toggleAddPaymentDrawer: () => void
  toggleSendInvoiceDrawer: () => void
}

const PreviewActions = ({ id, toggleSendInvoiceDrawer, toggleAddPaymentDrawer }: Props) => {
  return (
    <Card>
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
        <Link href={`/apps/invoice/edit/${id}`} passHref>
          <Button fullWidth component='a' sx={{ mb: 3.5 }} color='secondary' variant='outlined'>
            Edit Invoice
          </Button>
        </Link>
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
  )
}

export default PreviewActions
