// ** Next Import
import { NextPageContext } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { UserLayoutType } from 'src/types/apps/userTypes'

// ** Demo Components Imports
import UserViewPage from 'src/views/apps/user/view/UserViewPage'

type Props = UserLayoutType & {
  invoiceData: InvoiceType[]
}

const UserView = ({ id, invoiceData }: Props) => {
  return <UserViewPage id={id || '1'} invoiceData={invoiceData} />
}

UserView.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  const res = await axios.get('/apps/invoice/invoices')
  const invoiceData: InvoiceType[] = res.data.allData

  return { id, invoiceData }
}

export default UserView
