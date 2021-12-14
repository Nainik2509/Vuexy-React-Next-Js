// ** Next Imports
import { NextPageContext } from 'next'

// ** Types
import { InvoiceLayoutProps } from 'pages/apps/invoice/types'

// ** Demo Components Imports
import EditLayout from './EditLayout'

const InvoiceEdit = ({ id }: InvoiceLayoutProps) => {
  return <EditLayout id={id} />
}

export default InvoiceEdit

InvoiceEdit.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
