import { ReactNode } from 'react'

export type Layout = 'vertical' | 'horizontal' | 'blank' | 'blankWithAppBar'

export type Skin = 'default' | 'bordered' | 'semi-dark'

export type ContentWidth = 'full' | 'boxed'

export type AppBar = 'fixed' | 'static' | 'hidden'

export type Footer = 'fixed' | 'static' | 'hidden'

export type RouterTransitions = 'fadeIn' | 'zoomIn' | 'fadeInLeft' | 'none'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type VerticalNavToggle = 'accordion' | 'collapse'

export type HorizontalMenuToggle = 'hover' | 'click'

export type NavLink = {
  title: string
  action?: string
  path?: string
  icon?: ReactNode
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavGroup = {
  title: string
  icon?: ReactNode
  badgeContent?: string
  children?: (NavGroup | NavLink)[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavSectionTitle = {
  sectionTitle: string
}

export type VerticalNavItemsType = (NavLink | NavGroup | NavSectionTitle)[]
export type HorizontalNavItemsType = (NavLink | NavGroup)[]

export type LayoutProps = {
  children: ReactNode
  menuLockedIcon?: ReactNode
  menuUnlockedIcon?: ReactNode
  verticalNavItems?: VerticalNavItemsType
  footerContent?: (props?: any) => ReactNode
  horizontalNavItems?: HorizontalNavItemsType
  verticalAppBarContent?: (props?: any) => ReactNode
  verticalNavMenuContent?: (props?: any) => ReactNode
  verticalNavMenuBranding?: (props?: any) => ReactNode
  horizontalAppBarContent?: (props?: any) => ReactNode
  horizontalAppBarBranding?: (props?: any) => ReactNode
  horizontalNavMenuContent?: (props?: any) => ReactNode
  afterVerticalNavMenuContent?: (props?: any) => ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

export type BlankLayoutProps = {
  children?: ReactNode
}

export type BlankLayoutWithAppBarProps = {
  children: ReactNode
  appBarContent?: any
}
