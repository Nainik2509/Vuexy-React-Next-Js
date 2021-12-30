// ** MUI Imports
import { Theme } from '@mui/material'

const Tabs = (theme: Theme) => {
  return {
    MuiTabs: {
      styleOverrides: {
        vertical: {
          minWidth: 130,
          marginRight: theme.spacing(4),
          borderRight: `1px solid ${theme.palette.divider}`,
          '& .MuiTab-root': {
            minWidth: 130
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary
        }
      }
    }
  }
}

export default Tabs
