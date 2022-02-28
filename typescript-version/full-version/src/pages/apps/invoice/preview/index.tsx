// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import Preview from 'src/views/apps/invoice/preview/Preview'

const InvoicePreview = ({ id }: InvoiceLayoutProps) => {
  return <Preview id={id || '4987'} />
}

InvoicePreview.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}

export default InvoicePreview
