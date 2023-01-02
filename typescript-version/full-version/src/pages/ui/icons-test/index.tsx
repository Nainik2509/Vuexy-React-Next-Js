// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
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
      <Typography variant='h4' sx={{ mb: 4 }}>
        Icons from APIs
      </Typography>
      <Typography variant='h5' sx={{ mb: 4 }}>
        Online Icons
      </Typography>
      <Typography>
        BoxIcons coming from Iconify's API
        <Icon icon='bx:x' />
      </Typography>
      <Typography variant='h5' sx={{ my: 4 }}>
        FakeDB Tabler icons but offline
      </Typography>
      <Typography sx={{ mb: 4 }}>Tabler icons coming from our API and SVGs are from the Iconify Bundle</Typography>
      {iconData.map((icon: IconsDataType, index: number) => (
        <Icon key={index} fontSize='2.1875rem' icon={`tabler:${icon.icon}`} />
      ))}
      <Typography variant='h4' sx={{ my: 4 }}>
        Offline Icons
      </Typography>
      <Typography>
        Iconify icons come with the following props as well: <code>id</code>, <code>key</code>, <code>name</code>,{' '}
        <code>ref</code>, <code>role</code>, <code>strokeLinecap</code>.
      </Typography>
      <Typography>
        Our logo wrapped with <code>Box</code> component
        <Box component='span' sx={{ ml: 5, display: 'inline-flex', color: 'primary.main' }}>
          <Icon icon='custom:logo' />
        </Box>
      </Typography>
      <Typography sx={{ mt: 4, fontWeight: 600 }}>Material Line Icons with height</Typography>
      <Icon icon='line-md:home-twotone-alt' height='35' />
      <Icon icon='line-md:github' height='35' />
      <Icon icon='line-md:document-list' height='35' />
      <Icon icon='line-md:document-code' height='35' />
      <Icon icon='line-md:image-twotone' height='35' />
      <Typography sx={{ mt: 4, fontWeight: 600 }}>Tabler Icons</Typography>
      <Typography>
        Simple Tabler Icon
        <Icon icon='tabler:bike' />
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        Tabler Icon wrapped with <code>Box</code> component
        <Box component='span' sx={{ ml: 5, display: 'inline-flex', color: 'success.main' }}>
          <Icon icon='tabler:bike' />
        </Box>
      </Typography>
      <Typography>
        Tabler Icon with font-size
        <Icon icon='tabler:bike' fontSize={50} />
      </Typography>
      <Typography>
        Tabler Icon with color and passed color-name
        <Icon icon='tabler:bike' color='red' />
      </Typography>
      <Typography>
        Tabler Icon with horizontal flip
        <Icon icon='tabler:bike' hFlip />
      </Typography>
      <Typography>
        Tabler Icon with vertical flip
        <Icon icon='tabler:bike' vFlip />
      </Typography>
      <Typography>
        Tabler Icon with vertical & horizontal flips
        <Icon icon='tabler:bike' hFlip vFlip />
      </Typography>
      <Typography>
        Tabler Icon with color and passed hex code
        <Icon icon='tabler:bike' color='#09a6eb' />
      </Typography>
      <Typography>
        Tabler Icon with rotate 90 degree
        <Icon icon='tabler:bike' rotate={1} />
      </Typography>
      <Typography>
        Tabler Icon with rotate 270 degree
        <Icon icon='tabler:bike' rotate={3} />
      </Typography>
      <Typography>
        Inline Tabler Icon
        <Icon icon='tabler:bike' inline={true} />
      </Typography>
      <Typography>
        Tabler Icon with width
        <Icon icon='tabler:bike' width='100' />
      </Typography>
      <Typography>
        Tabler Icon with height
        <Icon icon='tabler:bike' height='75' />
      </Typography>
      <Typography>
        Tabler Icon with cursor pointer
        <Icon icon='tabler:bike' cursor='pointer' />
      </Typography>
      <Typography>
        Tabler Icon with display flex
        <Icon icon='tabler:bike' display='flex' />
      </Typography>
      <Typography>
        Tabler Icon with fill-opacity using string
        <Icon icon='tabler:bike' fillOpacity='0.5' />
        Tabler Icon with fill-opacity using number
        <Icon icon='tabler:bike' fillOpacity={0.25} />
      </Typography>
      <Typography>
        Tabler Icon with onClick. It has all props for <code>on</code>
        <Icon icon='tabler:bike' onClick={() => alert('Clicked on the icon')} />
      </Typography>
      <Typography>
        Tabler Icon with opacity using string
        <Icon icon='tabler:bike' opacity='0.6' />
        Tabler Icon with opacity using number
        <Icon icon='tabler:bike' opacity={0.3} />
      </Typography>
      <Typography>
        Tabler Icon with stroke
        <Icon icon='tabler:bike' stroke='#f00' />
      </Typography>
      <Typography>
        Tabler Icon with stroke and stroke-dasharray using string
        <Icon icon='tabler:bike' stroke='#f00' strokeDasharray='3' />
        Tabler Icon with stroke and stroke-dasharray using number
        <Icon icon='tabler:bike' stroke='#f00' strokeDasharray={5} />
      </Typography>
      <Typography>
        Tabler Icon with stroke and stroke-opacity using string
        <Icon icon='tabler:bike' stroke='#f00' strokeOpacity='0.5' />
        Tabler Icon with stroke and stroke-opacity using number
        <Icon icon='tabler:bike' stroke='#f00' strokeOpacity={0.25} />
      </Typography>
      <Typography>
        Tabler Icon with stroke and stroke-width using string
        <Icon icon='tabler:bike' stroke='#f00' strokeWidth='2' />
        Tabler Icon with stroke and stroke-width using number
        <Icon icon='tabler:bike' stroke='#f00' strokeWidth={2} />
      </Typography>
      <Typography>
        Tabler Icon with style
        <Icon icon='tabler:bike' style={{ color: '#00f' }} />
      </Typography>
      <Typography>
        Tabler Icon with transform scale
        <Icon icon='tabler:bike' transform='scale(2)' />
      </Typography>
      <Typography>
        Tabler Icon with visibility hidden
        <Icon icon='tabler:bike' visibility='hidden' />
      </Typography>
      <Typography variant='h5' sx={{ mt: 4 }}>
        Icons from different icon libraries
      </Typography>
      <Icon icon='bx:basket' />
      <Icon icon='bi:airplane-engines' />
      <Icon icon='uit:adobe-alt' />
      <Icon icon='fa6-regular:comment' />
      <Icon icon='twemoji:auto-rickshaw' />
    </>
  )
}

export default AnalyticsDashboard
