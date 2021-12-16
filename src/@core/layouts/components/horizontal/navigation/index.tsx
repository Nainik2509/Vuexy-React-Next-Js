// ** React Imports
import { FC, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { HorizontalNavItemsType } from '@core/layouts/types'

// ** Config Import
import themeConfig from 'configs/themeConfig'

// ** Utils
// import { hexToRGBA } from '@core/utils/hex-to-rgba'

// ** Menu Components
import HorizontalNavItems from './HorizontalNavItems'

// ** Types
interface Props {
  horizontalNavItems?: HorizontalNavItemsType
}

const Navigation: FC<Props> = (props: Props) => {
  // ** States
  const [openNav, setOpenNav] = useState<string[]>([])

  const handleGroupMouseEnter = (id: string) => {
    const arr = openNav
    arr.push(id)
    setOpenNav([...arr])
  }

  const handleGroupMouseLeave = (id: string) => {
    const arr = openNav
    arr.splice(arr.indexOf(id), 1)
    setOpenNav([...arr])
  }

  return (
    <Box
      className='menu-content'
      sx={{
        display: 'flex',

        // overflowX: 'auto',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& > *:not(.MuiTooltip-popper)': {
          '&:not(:last-child)': { mr: 3 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 200 })
        }

        /* '&::-webkit-scrollbar': {
              height: 6
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: 20,
              background: theme => hexToRGBA(theme.palette.mode === 'light' ? '#B0ACB5' : '#575468', 0.6)
            },
            '&::-webkit-scrollbar-track': {
              borderRadius: 20,
              background: 'transparent'
            } */
      }}
    >
      <HorizontalNavItems
        openNav={openNav}
        setOpenNav={setOpenNav}
        handleGroupMouseEnter={handleGroupMouseEnter}
        handleGroupMouseLeave={handleGroupMouseLeave}
        {...props}
      />
    </Box>
  )
}

export default Navigation
