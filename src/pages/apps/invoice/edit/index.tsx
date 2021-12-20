// ** Next Imports
import { NextPageContext } from 'next'

// ** Types
import { InvoiceLayoutProps } from 'src/pages/apps/invoice/types'

// ** Demo Components Imports
import EditLayout from './EditLayout'

const InvoiceEdit = ({ id }: InvoiceLayoutProps) => {
  return <EditLayout id={id || '4987'} />
}

export default InvoiceEdit

InvoiceEdit.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
