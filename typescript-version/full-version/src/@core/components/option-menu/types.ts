// ** React Import
import { ReactNode } from 'react'

// ** MUI Imports
import { SvgIconProps } from '@mui/material'
import { MenuProps } from '@mui/material/Menu'
import { MenuItemProps } from '@mui/material/MenuItem'
import { IconButtonProps } from '@mui/material/IconButton'

export type OptionType =
  | string
  | {
      text: ReactNode
      icon?: ReactNode
      menuItemProps?: MenuItemProps
    }

export type OptionsMenuType = {
  icon?: ReactNode
  options: OptionType[]
  leftAlignMenu?: boolean
  iconProps?: SvgIconProps
  iconButtonProps?: IconButtonProps
  menuProps?: Omit<MenuProps, 'open'>
}
