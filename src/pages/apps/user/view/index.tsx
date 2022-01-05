// ** Next Import
import { NextPageContext } from 'next/types'

// ** Types
import { UserLayoutType } from 'src/types/apps/userTypes'

// ** Demo Components Imports
import UserLayout from 'src/components/apps/user/view/UserLayout'

const UserView = ({ id }: UserLayoutType) => {
  return <UserLayout id={id || '1'} />
}

export default UserView

UserView.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query

  return { id }
}
