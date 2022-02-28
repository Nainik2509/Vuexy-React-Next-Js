// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { InvoiceLayoutProps } from 'src/types/apps/invoiceTypes'

// ** Demo Components Imports
import Edit from 'src/views/apps/invoice/edit/Edit'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const InvoiceEdit = ({ id }: InvoiceLayoutProps) => {
  return <Edit id={id || '4987'} />
}

InvoiceEdit.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}

export default InvoiceEdit
