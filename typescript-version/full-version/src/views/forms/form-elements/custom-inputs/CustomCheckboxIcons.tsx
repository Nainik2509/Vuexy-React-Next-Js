// ** Icons Import
import Server from 'mdi-material-ui/Server'
import LockOutline from 'mdi-material-ui/LockOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'

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
    icon: <Server sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'encrypt',
    title: 'Encrypt',
    gridProps: { sm: 4, xs: 12 },
    content: 'Translate your data to encrypted text.',
    icon: <ShieldOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'site-lock',
    title: 'Site Lock',
    gridProps: { sm: 4, xs: 12 },
    content: 'Security tool to protect your website.',
    icon: <LockOutline sx={{ mb: 2, fontSize: '2rem' }} />
  }
]

const CustomCheckboxWithIcons = () => {
  return <CustomCheckboxIcons data={data} value={['backup']} name='custom-checkbox-icons' />
}

export default CustomCheckboxWithIcons
