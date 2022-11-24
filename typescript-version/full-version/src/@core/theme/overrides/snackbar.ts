// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Type Import
import { Skin } from 'src/@core/layouts/types'

const Snackbar = (theme: Theme, skin: Skin) => {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          ...(skin === 'bordered' && { boxShadow: 'none' }),
          backgroundColor: `rgba(${theme.palette.customColors.main}, 1)`,
          color: theme.palette.common[theme.palette.mode === 'light' ? 'white' : 'black']
        }
      }
    }
  }
}

export default Snackbar
