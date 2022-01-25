// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Components Imports
import PrintPage from 'src/views/apps/invoice/print/PrintPage'

const InvoicePrint = ({ id }: InvoiceLayoutProps) => {
  return <PrintPage id={id || '4987'} />
}

InvoicePrint.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}

InvoicePrint.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

InvoicePrint.setConfig = () => {
  return {
    mode: 'light',
    routerTransition: 'none'
  }
}

export default InvoicePrint
