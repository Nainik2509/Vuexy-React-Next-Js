// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import EditLayout from 'src/components/apps/invoice/edit/EditLayout'

const InvoiceEdit = ({ id }: InvoiceLayoutProps) => {
  return <EditLayout id={id || '4987'} />
}

export default InvoiceEdit

InvoiceEdit.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
