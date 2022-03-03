// ** MUI Imports
import Box from '@mui/material/Box'

// ** Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Utils
// import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
// ** Menu Components
import HorizontalNavItems from './HorizontalNavItems'

const Navigation = props => {
  return (
    <Box
      className='menu-content'
      sx={{
        display: 'flex',
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
      <HorizontalNavItems {...props} />
    </Box>
  )
}

export default Navigation
