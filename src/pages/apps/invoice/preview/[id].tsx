// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import PreviewLayout from 'src/components/apps/invoice/preview/PreviewLayout'

const InvoicePreview = ({ id }: InvoiceLayoutProps) => {
  return <PreviewLayout id={id} />
}

export default InvoicePreview

InvoicePreview.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
