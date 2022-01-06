// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Components Imports
import PrintLayout from 'src/views/apps/invoice/print/PrintLayout'

const InvoicePrint = ({ id }: InvoiceLayoutProps) => {
  return <PrintLayout id={id} />
}

InvoicePrint.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}

InvoicePrint.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default InvoicePrint
