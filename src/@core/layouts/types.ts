import { ReactNode } from 'react'

import { NavGroup, NavLink, NavSectionTitle } from './components/vertical/navigation/types'

export type Layout = 'vertical' | 'horizontal' | 'blank' | 'blankWithAppBar'

export type Skin = 'default' | 'bordered' | 'semi-dark'

export type ContentWidth = 'full' | 'boxed'

export type AppBar = 'fixed' | 'static' | 'hidden'

export type Footer = 'fixed' | 'static' | 'hidden'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type VerticalNavToggle = 'accordion' | 'collapse'

export type HorizontalMenuToggle = 'hover'

export type LayoutProps = {
  children: ReactNode
  footerContent?: ReactNode
  appBarContent?: any
  navMenuHeader?: any
  navMenuContent?: any
  navItems: (NavGroup | NavLink | NavSectionTitle)[]
}
