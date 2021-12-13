// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

const ReactHotToast = styled(Box)<BoxProps>(({ theme }) => ({
  '& .react-hot-toast': {
    boxShadow: theme.shadows[5],
    color: theme.palette.text.primary,
    background: theme.palette.background.default
  }
}))

export default ReactHotToast
