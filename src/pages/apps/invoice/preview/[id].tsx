// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/pages/apps/invoice/types'

// ** Demo Components Imports
import PreviewLayout from './PreviewLayout'

const InvoicePreview = ({ id }: InvoiceLayoutProps) => {
  return <PreviewLayout id={id} />
}

export default InvoicePreview

InvoicePreview.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
