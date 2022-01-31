// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

const ReactHotToast = styled(Box)<BoxProps>(({ theme }) => ({
  '& > div': {
    top: '75px !important',
    right: '24px !important'
  },
  '& .react-hot-toast': {
    fontWeight: 400,
    fontSize: '1rem',
    borderRadius: '5px',
    letterSpacing: '0.14px',
    zIndex: theme.zIndex.snackbar,
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === 'light'
        ? '0px 4px 10px -4px rgb(58 53 65 / 60%)'
        : '0px 8px 16px -4px rgb(19 17 32 / 65%)',
    '&>:first-of-type:not([role])>:first-of-type': {
      width: 14,
      height: 14
    }
  }
}))

export default ReactHotToast
