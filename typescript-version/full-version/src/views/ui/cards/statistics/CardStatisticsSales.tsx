// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LabelVariantOutline from 'mdi-material-ui/LabelVariantOutline'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

interface SaleDataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const salesData: SaleDataType[] = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <LabelVariantOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Revenue',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = () => {
  return salesData.map((sale: SaleDataType, index: number) => (
    <Grid item xs={6} md={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar variant='rounded' color={sale.color} sx={{ boxShadow: 3, mr: 4, width: 44, height: 44 }}>
          {sale.icon}
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption' sx={{ mb: 0.5 }}>
            {sale.title}
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 600, lineHeight: 1.05 }}>
            {sale.stats}
          </Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const CardStatisticsSales = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8}>
        <Card>
          <CardHeader
            title='Statistics Card'
            sx={{ pt: 4 }}
            titleTypographyProps={{
              sx: {
                fontSize: '1rem !important',
                fontWeight: '600 !important',
                lineHeight: '1.31 !important',
                letterSpacing: '0.29px !important'
              }
            }}
            action={
              <IconButton
                size='small'
                aria-label='settings'
                className='card-more-options'
                sx={{ color: 'text.secondary' }}
              >
                <DotsVertical />
              </IconButton>
            }
          />
          <CardContent>
            <Grid container spacing={6}>
              {renderStats()}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardStatisticsSales
