// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import PreviewLayout from 'src/views/apps/invoice/preview/PreviewLayout'

const InvoicePreview = ({ id }: InvoiceLayoutProps) => {
  return <PreviewLayout id={id || '4987'} />
}

export default InvoicePreview

InvoicePreview.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
