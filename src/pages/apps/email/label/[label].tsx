// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { MailLayoutType } from 'src/types/apps/emailTypes'

// ** Demo Components Imports
import Email from 'src/views/apps/email/Email'

const EmailApp = ({ folder, label }: MailLayoutType) => {
  return <Email folder={folder} label={label} />
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
