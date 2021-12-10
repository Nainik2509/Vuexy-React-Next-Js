// ** React Imports
import { FC } from 'react'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from '@core/layouts/Layout'

// ** Type Import
import { LayoutProps } from '@core/layouts/types'

// ** Navigation Imports
import VerticalNavItems from 'navigation/vertical'
import HorizontalNavItems from 'navigation/horizontal'
import { useSettings } from '@core/hooks/useSettings'

const UserLayout: FC<LayoutProps> = (props: LayoutProps) => {
  // ** Props
  const { children } = props

  // ** Hooks
  const { settings, saveSettings } = useSettings()

  return (
    <Layout
      {...props}
      settings={settings}
      saveSettings={saveSettings}
      navItems={settings.layout === 'horizontal' ? HorizontalNavItems() : VerticalNavItems()}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
