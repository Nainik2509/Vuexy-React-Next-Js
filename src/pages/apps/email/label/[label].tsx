// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { MailLayoutType } from 'src/types/apps/emailTypes'

// ** Demo Components Imports
import EmailLayout from 'src/views/apps/email/EmailLayout'

const EmailApp = ({ folder, label }: MailLayoutType) => {
  return <EmailLayout folder={folder} label={label} />
}

EmailApp.getInitialProps = async ({ query }: NextPageContext) => {
  const { folder, label } = query

  return { folder, label }
}
EmailApp.setConfig = () => {
  return {
    routerTransition: 'none'
  }
}

export default EmailApp
