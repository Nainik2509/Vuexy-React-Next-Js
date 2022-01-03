// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

const ReactHotToast = styled(Box)<BoxProps>(({ theme }) => ({
  '& .react-hot-toast': {
    fontWeight: 400,
    fontSize: '1rem',
    borderRadius: '5px',
    letterSpacing: '0.14px',
    boxShadow: theme.shadows[3],
    zIndex: theme.zIndex.snackbar,
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    '&>:first-of-type:not([role])>:first-of-type': {
      width: 14,
      height: 14
    }
  }
}))

export default ReactHotToast
