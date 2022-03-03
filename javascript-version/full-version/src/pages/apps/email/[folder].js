// ** Demo Components Imports
import Email from 'src/views/apps/email/Email'

const EmailApp = ({ folder, label }) => {
  return <Email folder={folder} label={label} />
}
EmailApp.getInitialProps = async ({ query }) => {
  const { folder, label } = query

  return { folder, label }
}

export default EmailApp
