// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiBox, { BoxProps } from '@mui/material/Box'
import { StepIconProps } from '@mui/material/StepIcon'

// ** Icons Imports
import Alert from 'mdi-material-ui/Alert'
import CheckCircle from 'mdi-material-ui/CheckCircle'

// ** Hooks Imports
import useBgColor, { UseBgColorType } from 'src/@core/hooks/useBgColor'

// Styled Box component
const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
  width: 20,
  height: 20,
  borderWidth: 3,
  borderRadius: '50%',
  borderStyle: 'solid'
}))

const StepperCustomDot = (props: StepIconProps) => {
  // ** Props
  const { active, completed, error } = props

  // ** Hook
  const bgColors: UseBgColorType = useBgColor()

  if (error) {
    return <Alert sx={{ width: 20, height: 20, color: 'error.main', transform: 'scale(1.2)' }} />
  } else if (completed) {
    return <CheckCircle sx={{ width: 20, height: 20, color: 'primary.main', transform: 'scale(1.2)' }} />
  } else {
    return (
      <Box
        sx={{
          borderColor: bgColors.primaryLight.backgroundColor,
          ...(active && { borderWidth: 5, borderColor: 'primary.main', backgroundColor: 'common.white' })
        }}
      />
    )
  }
}

export default StepperCustomDot
