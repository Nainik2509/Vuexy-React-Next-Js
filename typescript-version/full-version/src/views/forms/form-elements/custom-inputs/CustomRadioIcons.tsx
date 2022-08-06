// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

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
    icon: (
      <Box component='span' sx={{ '& svg': { mb: 2 } }}>
        <Icon icon='mdi:rocket-launch-outline' fontSize='2rem' />
      </Box>
    )
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    content: 'For small to medium businesses.',
    icon: (
      <Box component='span' sx={{ '& svg': { mb: 2 } }}>
        <Icon icon='mdi:account-outline' fontSize='2rem' />
      </Box>
    )
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    content: 'Solution for big organizations.',
    icon: (
      <Box component='span' sx={{ '& svg': { mb: 2 } }}>
        <Icon icon='mdi:crown-outline' fontSize='2rem' />
      </Box>
    )
  }
]

const CustomRadioWithIcons = () => {
  return <CustomRadioIcons data={data} value='starter' name='custom-radios-icons' />
}

export default CustomRadioWithIcons
