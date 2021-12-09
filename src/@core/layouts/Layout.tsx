// ** React Imports
import { FC, ReactNode } from 'react'

// ** Layout Components
import VerticalLayout from './VerticalLayout'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }: Props) => {
  return <VerticalLayout>{children}</VerticalLayout>
}

export default Layout
