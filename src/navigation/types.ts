// ** React Imports
import { ReactNode } from 'react'

export type Navigation = {
  sectionTitle?: string
  title?: string
  icon?: ReactNode
  badgeContent?: string
  badgeColor?: string
  navLink?: string
  openInNewTab?: boolean
  disabled?: boolean
  externalLink?: boolean
  action?: string
  resource?: string
  children?: Navigation[]
}
