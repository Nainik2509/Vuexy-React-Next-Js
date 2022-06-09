// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomCheckboxIcons from 'src/@core/components/mui/checkbox/CustomCheckboxIcons'

// ** Icons Import
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

const dataIcons = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    icon: <RocketLaunchOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        A simple start for everyone.
      </Typography>
    )
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    icon: <AccountOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        For small to medium businesses.
      </Typography>
    )
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    icon: <CrownOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Solution for big organizations.
      </Typography>
    )
  }
]

const CustomCheckboxIconsExample = () => {
  return <CustomCheckboxIcons name='custom-checkbox-icons' data={dataIcons} />
}

export default CustomCheckboxIconsExample
