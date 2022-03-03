// ** Demo Components Imports
import Edit from 'src/views/apps/invoice/edit/Edit'

const InvoiceEdit = ({ id }) => {
  return <Edit id={id} />
}
InvoiceEdit.getInitialProps = async ({ query }) => {
  const { id } = query

  return { id }
}

export default InvoiceEdit
