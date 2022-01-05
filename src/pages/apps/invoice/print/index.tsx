// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import PrintLayout from 'src/views/apps/invoice/print/PrintLayout'

const InvoicePrint = ({ id }: InvoiceLayoutProps) => {
  return <PrintLayout id={id || '4987'} />
}

export default InvoicePrint

InvoicePrint.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
