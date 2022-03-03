// ** Demo Components Imports
import Edit from 'src/views/apps/invoice/edit/Edit'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const InvoiceEdit = ({ id }) => {
  return <Edit id={id || '4987'} />
}
InvoiceEdit.getInitialProps = async ({ query }) => {
  const { id } = query

  return { id }
}

export default InvoiceEdit
