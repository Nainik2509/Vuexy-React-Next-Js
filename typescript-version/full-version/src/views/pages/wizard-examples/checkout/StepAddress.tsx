// ** React Imports
import { ChangeEvent, SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Type Imports
import {
  CustomRadioBasicData,
  CustomRadioIconsData,
  CustomRadioIconsProps
} from 'src/@core/components/custom-radio/types'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

interface IconType {
  icon: CustomRadioIconsProps['icon']
  iconProps: CustomRadioIconsProps['iconProps']
}

const data: CustomRadioBasicData[] = [
  {
    value: 'home',
    isSelected: true,
    title: <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>John Doe (Default)</Typography>,
    meta: <CustomChip rounded size='small' skin='light' label='Home' color='primary' />,
    content: (
      <Box sx={{ mt: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body2' sx={{ mb: 'auto' }}>
          4135 Parkway Street, Los Angeles, CA, 90017.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ mr: 3, color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Remove
            </Box>
          </Link>
        </Box>
      </Box>
    )
  },
  {
    value: 'office',
    title: <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>ACME Inc.</Typography>,
    meta: <CustomChip rounded size='small' skin='light' label='Office' color='success' />,
    content: (
      <Box sx={{ mt: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body2' sx={{ mb: 'auto' }}>
          87 Hoffman Avenue, New York, NY, 10016.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ mr: 3, color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Remove
            </Box>
          </Link>
        </Box>
      </Box>
    )
  }
]

const dataIcons: CustomRadioIconsData[] = [
  {
    isSelected: true,
    value: 'standard',
    title: 'Standard',
    content: (
      <>
        <CustomChip
          rounded
          size='small'
          skin='light'
          label='Free'
          color='success'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 Week.
        </Typography>
      </>
    )
  },
  {
    value: 'express',
    title: 'Express',
    content: (
      <>
        <CustomChip
          rounded
          label='$10'
          size='small'
          skin='light'
          color='secondary'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 3-4 days.
        </Typography>
      </>
    )
  },
  {
    value: 'overnight',
    title: 'Overnight',
    content: (
      <>
        <CustomChip
          rounded
          label='$15'
          size='small'
          skin='light'
          color='secondary'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 day.
        </Typography>
      </>
    )
  }
]

const StepAddress = ({ handleNext }: { handleNext: () => void }) => {
  const initialBasicSelected: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value
  const initialIconSelected: string = dataIcons.filter(item => item.isSelected)[
    dataIcons.filter(item => item.isSelected).length - 1
  ].value

  // ** States
  const [selectedIconRadio, setSelectedIconRadio] = useState<string>(initialIconSelected)
  const [selectedBasicRadio, setSelectedBasicRadio] = useState<string>(initialBasicSelected)

  // ** Hook
  const theme = useTheme()

  const icons: IconType[] = [
    {
      icon: 'mdi:account-outline',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'mdi:crown-outline',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'mdi:rocket-launch-outline',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    }
  ]

  const handleBasicRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedBasicRadio(prop)
    } else {
      setSelectedBasicRadio((prop.target as HTMLInputElement).value)
    }
  }
  const handleIconRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedIconRadio(prop)
    } else {
      setSelectedIconRadio((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8} xl={9}>
        <Typography sx={{ mt: 1, mb: 4, color: 'text.secondary' }}>Select your preferable address</Typography>
        <Grid container spacing={4}>
          {data.map((item, index) => (
            <CustomRadioBasic
              key={index}
              data={data[index]}
              name='custom-radios-address'
              selected={selectedBasicRadio}
              gridProps={{ sm: 6, xs: 12 }}
              handleChange={handleBasicRadioChange}
            />
          ))}
        </Grid>
        <Button variant='outlined' sx={{ mt: 4.5 }}>
          Add new address
        </Button>
        <Typography sx={{ mt: 8, mb: 4, color: 'text.secondary' }}>Choose Delivery Speed</Typography>
        <Grid container spacing={4}>
          {dataIcons.map((item, index) => (
            <CustomRadioIcons
              key={index}
              data={dataIcons[index]}
              icon={icons[index].icon}
              selected={selectedIconRadio}
              name='custom-radios-delivery'
              gridProps={{ sm: 4, xs: 12 }}
              iconProps={icons[index].iconProps}
              handleChange={handleIconRadioChange}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4} xl={3}>
        <Card sx={{ mb: 4, background: 'transparent', boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Estimated Delivery Date</Typography>
            <Box sx={{ mb: 4, display: 'flex' }}>
              <Box sx={{ mr: 4 }}>
                <img width={50} src='/images/products/google-home.png' alt='Google Home' />
              </Box>
              <div>
                <Typography sx={{ color: 'text.secondary' }}>Google - Google Home - White</Typography>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>18th Nov 2021</Typography>
              </div>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mr: 4 }}>
                <img width={50} src='/images/products/iphone-11.png' alt='iphone 11' />
              </Box>
              <div>
                <Typography sx={{ color: 'text.secondary' }}>Apple iPhone 11 (64GB, Black)</Typography>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>20th Nov 2021</Typography>
              </div>
            </Box>
          </CardContent>
          <Divider sx={{ mt: theme => `${theme.spacing(4)} !important`, mb: '0 !important' }} />
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Price Details</Typography>
            <Grid container>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ color: 'text.secondary' }}>Order Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right', color: 'text.secondary' }}>$1100.00</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: 'text.secondary' }}>Delivery Charges</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Typography sx={{ mr: 2, textDecoration: 'line-through', color: 'text.secondary' }}>$5.00</Typography>
                  <CustomChip rounded size='small' skin='light' color='success' label='Free' />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardContent sx={{ p: theme => `${theme.spacing(4)} !important` }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 700, color: 'text.secondary' }}>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ textAlign: 'right', color: 'text.secondary' }}>$1100.00</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Button fullWidth variant='contained' onClick={handleNext}>
          Place Order
        </Button>
      </Grid>
    </Grid>
  )
}

export default StepAddress
