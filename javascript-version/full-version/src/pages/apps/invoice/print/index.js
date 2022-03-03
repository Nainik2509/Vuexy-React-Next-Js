// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Components Imports
import PrintPage from 'src/views/apps/invoice/print/PrintPage'

const InvoicePrint = ({ id }) => {
  return <PrintPage id={id || '4987'} />
}
InvoicePrint.getInitialProps = async ({ query }) => {
  const { id } = query

  return { id }
}
InvoicePrint.getLayout = page => <BlankLayout>{page}</BlankLayout>
InvoicePrint.setConfig = () => {
  return {
    mode: 'light'
  }
}

export default InvoicePrint
