// ** Next Import
import { NextPageContext } from 'next'

// ** Types
import { MailLayoutType } from '../types'

// ** Demo Components Imports
import EmailLayout from '../EmailLayout'

const EmailApp = ({ folder, label }: MailLayoutType) => {
  return <EmailLayout folder={folder} label={label} />
}

export default EmailApp

EmailApp.getInitialProps = async ({ query }: NextPageContext) => {
  const { folder, label } = query

  return { folder, label }
}
