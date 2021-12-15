import { ReactNode } from 'react'

export type NavLink = {
  title: string
  action?: string
  path: string
  icon?: ReactNode
  resource?: string
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
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  children?: (NavGroup | NavLink)[]
}

export type NavSectionTitle = {
  sectionTitle: string
}
