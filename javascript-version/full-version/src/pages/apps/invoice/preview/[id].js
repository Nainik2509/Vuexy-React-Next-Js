// ** Demo Components Imports
import Preview from 'src/views/apps/invoice/preview/Preview'

const InvoicePreview = ({ id }) => {
  return <Preview id={id} />
}
InvoicePreview.getInitialProps = async ({ query }) => {
  const { id } = query

  return { id }
}

export default InvoicePreview
