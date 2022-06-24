// ** React Import
import { ReactNode } from 'react'

// ** MUI Imports
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
  menuProps?: MenuProps
  rightAlignMenu?: boolean
  iconButtonProps?: IconButtonProps
}
