// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Type Import
import { Settings } from '@core/context/settingsContext'
import { LayoutProps } from '@core/layouts/types'

// ** Layout Components
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

type Props = LayoutProps & {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const Layout: FC<Props> = (props: Props) => {
  const { children, settings } = props

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
