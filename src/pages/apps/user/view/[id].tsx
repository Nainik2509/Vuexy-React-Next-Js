// ** Next Imports
import { NextPageContext } from 'next'

// ** Types
import { UserLayoutType } from 'pages/apps/user/types'

// ** Demo Components Imports
import UserLayout from './UserLayout'

const UserView = ({ id }: UserLayoutType) => {
  return <UserLayout id={id} />
}

export default UserView

UserView.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
