// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserViewPage from 'src/views/apps/user/view/UserViewPage'

const UserView = ({ id, invoiceData }) => {
  return <UserViewPage id={id || '1'} invoiceData={invoiceData} />
}
UserView.getInitialProps = async ({ query }) => {
  const { id } = query
  const res = await axios.get('/apps/invoice/invoices')
  const invoiceData = res.data.allData

  return { id, invoiceData }
}

export default UserView
