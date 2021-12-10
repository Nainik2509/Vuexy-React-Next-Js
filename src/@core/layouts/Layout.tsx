// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Type Import
import { LayoutProps } from '@core/layouts/types'

// ** Layout Components
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props

  // ** Hooks
  const { settings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (settings.layout === 'horizontal') {
    return (
      <HorizontalLayout hidden={hidden} {...props}>
        {children}
      </HorizontalLayout>
    )
  }

  return (
    <VerticalLayout hidden={hidden} {...props}>
      {children}
    </VerticalLayout>
  )
}

export default Layout
