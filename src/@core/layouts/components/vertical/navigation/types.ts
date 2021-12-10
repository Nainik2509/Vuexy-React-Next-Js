import { ReactNode } from 'react'

export type NavLink = {
  title: string
  icon?: ReactNode
  action?: string
  navLink: string
  newTab: boolean
  resource?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavGroup = {
  title: string
  icon: ReactNode
  badgeContent?: string
  externalLink?: boolean
  children: NavLink[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavSectionTitle = {
  sectionTitle: string
}
