// ** Icons Import
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

// ** Type Import
import { CustomRadioIconsData } from 'src/@core/components/custom-radio/types'

// ** Demo Components Imports
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data: CustomRadioIconsData[] = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    content: 'A simple start for everyone.',
    icon: <RocketLaunchOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    content: 'For small to medium businesses.',
    icon: <AccountOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    content: 'Solution for big organizations.',
    icon: <CrownOutline sx={{ mb: 2, fontSize: '2rem' }} />
  }
]

const CustomRadioWithIcons = () => {
  return <CustomRadioIcons data={data} value='starter' name='custom-radios-icons' />
}

export default CustomRadioWithIcons
