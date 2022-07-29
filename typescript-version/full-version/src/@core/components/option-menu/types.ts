// ** React Import
import { ReactNode } from 'react'

// ** MUI Imports
import { SvgIconProps } from '@mui/material'
import { MenuProps } from '@mui/material/Menu'
import { DividerProps } from '@mui/material/Divider'
import { MenuItemProps } from '@mui/material/MenuItem'
import { IconButtonProps } from '@mui/material/IconButton'

// ** Types
import { LinkProps } from 'next/link'

export type OptionDividerType = {
  divider: boolean
  dividerProps?: DividerProps
  url?: never
  text?: never
  icon?: never
  menuItemProps?: never
}
export type OptionMenuItemType = {
  text: ReactNode
  icon?: ReactNode
  menuItemProps?: MenuItemProps
  divider?: never
  dividerProps?: never
  linkProps?: LinkProps
  href?: LinkProps['href']
}

export type OptionType = string | OptionDividerType | OptionMenuItemType

export type OptionsMenuType = {
  icon?: ReactNode
  options: OptionType[]
  leftAlignMenu?: boolean
  iconProps?: SvgIconProps
  iconButtonProps?: IconButtonProps
  menuProps?: Omit<MenuProps, 'open'>
}
