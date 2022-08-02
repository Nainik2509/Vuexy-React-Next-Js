// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Import
import MUILink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Axios Import
import axios from 'axios'

// ** Type Import
import { IconsDataType } from 'src/@fake-db/iconify-icons'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const AnalyticsDashboard = () => {
  // ** State
  const [iconData, setIconData] = useState<IconsDataType[]>([])

  useEffect(() => {
    axios.get('/api/icons/data').then(response => setIconData(response.data))
  }, [])

  return (
    <>
      <Typography variant='h5' sx={{ mb: 4 }}>
        All the icons are made with the help of our custom component.
      </Typography>
      <Typography>
        BoxIcons coming from Iconify's API
        <Icon icon='bx:x' />
      </Typography>
      <Typography variant='h5' sx={{ my: 4 }}>
        Offline MDI icons
      </Typography>
      <Typography sx={{ mb: 4 }}>MDI icons coming from our API and SVGs are from the Iconify Bundle</Typography>
      {iconData.map((icon: IconsDataType, index: number) => (
        <Icon key={index} fontSize='2.1875rem' icon={`mdi:${icon.icon}`} />
      ))}
      <br />
      <Link passHref href='/dashboards/ecommerce/'>
        <Typography component={MUILink} sx={{ color: 'primary.main' }}>
          Go to the eCommerce page to view other offline icons coming from the Iconify Bundle with icon options
        </Typography>
      </Link>
    </>
  )
}

export default AnalyticsDashboard
