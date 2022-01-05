// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Types
import { InvoiceClientType } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import AddCard from 'src/components/apps/invoice/add/AddCard'
import AddActions from 'src/components/apps/invoice/add/AddActions'
import AddNewCustomers from 'src/components/apps/invoice/add/AddNewCustomer'

const InvoiceAdd = () => {
  // ** State
  const [addCustomerOpen, setAddCustomerOpen] = useState<boolean>(false)
  const [clients, setClients] = useState<InvoiceClientType[] | undefined>(undefined)
  const [selectedClient, setSelectedClient] = useState<InvoiceClientType | null>(null)

  const toggleAddCustomerDrawer = () => setAddCustomerOpen(!addCustomerOpen)

  return (
    <Grid container spacing={6}>
      <Grid item lg={9} md={8} xs={12}>
        <AddCard
          clients={clients}
          setClients={setClients}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          toggleAddCustomerDrawer={toggleAddCustomerDrawer}
        />
      </Grid>
      <Grid item lg={3} md={4} xs={12}>
        <AddActions />
      </Grid>
      <AddNewCustomers
        clients={clients}
        open={addCustomerOpen}
        setClients={setClients}
        toggle={toggleAddCustomerDrawer}
        setSelectedClient={setSelectedClient}
      />
    </Grid>
  )
}

export default InvoiceAdd
