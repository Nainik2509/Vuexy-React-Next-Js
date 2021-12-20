// ** Next Imports
import { NextPageContext } from 'next'

// ** Types
import { InvoiceLayoutProps } from 'src/pages/apps/invoice/types'

// ** Demo Components Imports
import PreviewLayout from './PreviewLayout'

const InvoicePreview = ({ id }: InvoiceLayoutProps) => {
  return <PreviewLayout id={id || '4987'} />
}

export default InvoicePreview

InvoicePreview.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
