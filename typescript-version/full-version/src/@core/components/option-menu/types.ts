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
      icon?: ReactNode
      text: string | ReactNode
      menuItemProps?: MenuItemProps
    }

export type PropType = {
  icon?: ReactNode
  options: OptionType[]
  iconProps?: SvgIconProps
  leftAlignMenu?: boolean
  menuProps?: Omit<MenuProps, 'open'>
  iconButtonProps?: IconButtonProps
}
