// ** Next Imports
import { NextPageContext } from 'next'

// ** Types
import { InvoiceLayoutProps } from 'src/pages/apps/invoice/types'

// ** Demo Components Imports
import PrintLayout from './PrintLayout'

const InvoicePrint = ({ id }: InvoiceLayoutProps) => {
  return <PrintLayout id={id} />
}

export default InvoicePrint

InvoicePrint.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
