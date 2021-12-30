// ** MUI Imports
import { Theme } from '@mui/material'

const Divider = (theme: Theme) => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: `${theme.spacing(2)} 0`
        },
        light: {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.1)`
        }
      }
    }
  }
}

export default Divider
