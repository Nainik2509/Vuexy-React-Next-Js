// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import Edit from 'src/views/apps/invoice/edit/Edit'

const InvoiceEdit = ({ id }: InvoiceLayoutProps) => {
  return <Edit id={id} />
}

InvoiceEdit.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}

export default InvoiceEdit
