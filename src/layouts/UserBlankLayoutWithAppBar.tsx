// ** React Imports
import { ReactNode } from 'react'

// ** Layout Imports
// !Do not remove this Layout import
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'

interface Props {
  children: ReactNode
}

const UserBlankLayoutWithAppBar = ({ children }: Props) => {
  return <BlankLayoutWithAppBar>{children}</BlankLayoutWithAppBar>
}

export default UserBlankLayoutWithAppBar
