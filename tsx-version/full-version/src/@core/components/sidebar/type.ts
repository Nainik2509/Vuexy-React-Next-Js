// ** React Imports
import { ReactNode } from 'react'

export type SidebarType = {
  show: boolean
  children: ReactNode
  onOpen?: () => void
  onClose?: () => void
  hideBackdrop?: boolean
  direction?: 'left' | 'right'
  backDropClick?: () => void
}
