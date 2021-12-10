// ** React Imports
import { FC, ReactNode } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Components
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }: Props) => {
  // ** Hooks
  const { settings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (settings.layout === 'horizontal') {
    return <HorizontalLayout hidden={hidden}>{children}</HorizontalLayout>
  }

  return <VerticalLayout hidden={hidden}>{children}</VerticalLayout>
}

export default Layout
