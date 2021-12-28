// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'
import { Settings } from 'src/@core/context/settingsContext'

// ** Layout Components
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

type Props = LayoutProps & {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const Layout = (props: Props) => {
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
