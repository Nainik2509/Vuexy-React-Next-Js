// ** React Imports
import { FC, ReactNode } from 'react'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from '@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'navigation/vertical'
import HorizontalNavItems from 'navigation/horizontal'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayout: FC<Props> = (props: Props) => {
  // ** Props
  const { children } = props

  // ** Hooks
  const { settings, saveSettings } = useSettings()

  return (
    <Layout
      settings={settings}
      saveSettings={saveSettings}
      navItems={settings.layout === 'horizontal' ? HorizontalNavItems() : VerticalNavItems()}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
