// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import MuiTimelineDot from '@mui/lab/TimelineDot'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Hooks Imports
import useBgColor, { UseBgColorType } from 'src/@core/hooks/useBgColor'

// ** Types
import { CustomTimelineDotProps, ColorsType } from './types'

const TimelineDot = (props: CustomTimelineDotProps) => {
  // ** Props
  const { sx, skin, color, variant } = props

  // ** Hook
  const theme = useTheme()
  const bgColors: UseBgColorType = useBgColor()

  const colors: ColorsType = {
    primary: {
      boxShadow: 'none',
      ...bgColors.primaryLight
    },
    secondary: {
      boxShadow: 'none',
      ...bgColors.secondaryLight
    },
    success: {
      boxShadow: 'none',
      ...bgColors.successLight
    },
    error: {
      boxShadow: 'none',
      ...bgColors.errorLight
    },
    warning: {
      boxShadow: 'none',
      ...bgColors.warningLight
    },
    info: {
      boxShadow: 'none',
      ...bgColors.infoLight
    },
    grey: {
      boxShadow: 'none',
      color: theme.palette.grey[500],
      backgroundColor: hexToRGBA(theme.palette.grey[500], 0.12)
    }
  }

  return (
    <MuiTimelineDot
      {...props}
      sx={color && skin === 'light' && variant === 'filled' ? Object.assign(colors[color], sx) : sx}
    />
  )
}

TimelineDot.defaultProps = {
  color: 'grey',
  variant: 'filled'
}

export default TimelineDot
