// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Type Imports
import { PropType, OptionType } from './types'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

const OptionMenu = (props: PropType) => {
  // ** Props
  const { icon, options, menuProps, rightAlignMenu, iconButtonProps } = props

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Hook & Var
  const { settings } = useSettings()
  const { direction } = settings

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton aria-haspopup='true' onClick={handleClick} {...iconButtonProps}>
        {icon ? icon : <DotsVertical />}
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        {...(rightAlignMenu && {
          anchorOrigin: { vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' },
          transformOrigin: { vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }
        })}
        {...menuProps}
      >
        {options.map((option: OptionType, index: number) => {
          return typeof option === 'string' ? (
            <MenuItem key={index} onClick={handleClose}>
              {option}
            </MenuItem>
          ) : (
            <MenuItem key={index} onClick={handleClose} {...option.menuItemProps}>
              {option.icon ? option.icon : null}
              {option.text}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default OptionMenu
