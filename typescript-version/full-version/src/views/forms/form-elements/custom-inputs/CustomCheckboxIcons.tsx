// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { CustomCheckboxIconsData } from 'src/@core/components/custom-checkbox/types'

// ** Demo Components Imports
import CustomCheckboxIcons from 'src/@core/components/custom-checkbox/icons'

const data: CustomCheckboxIconsData[] = [
  {
    value: 'backup',
    title: 'Backup',
    gridProps: { sm: 4, xs: 12 },
    content: 'Backup every file from your project.',
    icon: (
      <Box component='span' sx={{ '& svg': { mb: 2 } }}>
        <Icon icon='mdi:server' fontSize='2rem' />
      </Box>
    )
  },
  {
    value: 'encrypt',
    title: 'Encrypt',
    gridProps: { sm: 4, xs: 12 },
    content: 'Translate your data to encrypted text.',
    icon: (
      <Box component='span' sx={{ '& svg': { mb: 2 } }}>
        <Icon icon='mdi:shield-outline' fontSize='2rem' />
      </Box>
    )
  },
  {
    value: 'site-lock',
    title: 'Site Lock',
    gridProps: { sm: 4, xs: 12 },
    content: 'Security tool to protect your website.',
    icon: (
      <Box component='span' sx={{ '& svg': { mb: 2 } }}>
        <Icon icon='mdi:lock-outline' fontSize='2rem' />
      </Box>
    )
  }
]

const CustomCheckboxWithIcons = () => {
  return <CustomCheckboxIcons data={data} value={['backup']} name='custom-checkbox-icons' />
}

export default CustomCheckboxWithIcons
