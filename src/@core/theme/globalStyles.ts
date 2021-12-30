// ** MUI Imports
import { Theme } from '@mui/material'

// ** Type Imports
import { Settings } from 'src/@core/context/settingsContext'

const GlobalStyles = (theme: Theme, settings: Settings) => {
  // ** Vars
  const { skin } = settings

  const perfectScrollbarTrackBgColor = () => {
    if (skin === 'semi-dark') {
      return '#353149 !important'
    } else if (theme.palette.mode === 'light') {
      return '#DDDBDF !important'
    } else {
      return '#353149 !important'
    }
  }
  const perfectScrollbarThumbBgColor = () => {
    if (skin === 'semi-dark') {
      return '#575468 !important'
    } else if (theme.palette.mode === 'light') {
      return '#B0ACB5 !important'
    } else {
      return '#575468 !important'
    }
  }

  return {
    'body[style^="padding-right"] header::after, body[style^="padding-right"] footer::after': {
      content: '""',
      position: 'absolute' as const,
      left: '100%',
      top: 0,
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      width: '30px'
    },
    '.demo-space-x > *': {
      marginTop: '1rem !important',
      marginRight: '1rem !important',
      'body[dir="rtl"] &': {
        marginRight: '0 !important',
        marginLeft: '1rem !important'
      }
    },
    '.demo-space-y > *:not(:last-of-type)': {
      marginBottom: '1rem'
    },
    '.MuiGrid-container.match-height .MuiCard-root': {
      height: '100%'
    },
    '.ps__rail-y': {
      zIndex: 1,
      '&:hover, &:focus, &.ps--clicking': {
        backgroundColor: theme.palette.mode === 'light' ? '#DDDBDF !important' : '#353149 !important'
      },
      '& .ps__thumb-y': {
        backgroundColor: theme.palette.mode === 'light' ? '#B0ACB5 !important' : '#575468 !important'
      },
      '.main-menu-content &': {
        '&:hover, &:focus, &.ps--clicking': {
          backgroundColor: perfectScrollbarTrackBgColor()
        },
        '& .ps__thumb-y': {
          backgroundColor: perfectScrollbarThumbBgColor()
        }
      }
    },
    'body[dir="rtl"]': {
      '& .ps__rail-y': {
        left: '0 !important',
        right: 'auto !important',
        '& .ps__thumb-y': {
          left: '2px !important',
          right: 'auto !important'
        }
      }
    },
    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        left: 0,
        top: 0,
        height: 3,
        width: '100%',
        zIndex: 2000,
        position: 'fixed',
        backgroundColor: theme.palette.primary.main
      }
    }
  }
}

export default GlobalStyles
