// ** React Imports
import { FC, ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types
import { ThemeColor } from '@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from '@core/components/mui/avatar'

interface DataType {
  title: string
  imgAlt: string
  imgSrc: string
  amount: string
  trend: ReactNode
  subtitle: string
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    title: 'Paypal',
    imgAlt: 'paypal',
    amount: '+$24,820',
    avatarColor: 'error',
    subtitle: 'Received Money',
    imgSrc: '/assets/images/cards/paypal.png',
    trend: <ChevronUp sx={{ color: 'success.main' }} />
  },
  {
    amount: '-$1,250',
    title: 'Credit Card',
    imgAlt: 'credit-card',
    avatarColor: 'success',
    subtitle: 'Digital Ocean',
    imgSrc: '/assets/images/cards/credit-card.png',
    trend: <ChevronDown sx={{ color: 'error.main' }} />
  },
  {
    amount: '-$99',
    imgAlt: 'atm-card',
    title: 'Mastercard',
    subtitle: 'Netflix',
    avatarColor: 'warning',
    imgSrc: '/assets/images/cards/atm-card.png',
    trend: <ChevronDown sx={{ color: 'error.main' }} />
  },
  {
    amount: '-$82',
    title: 'Wallet',
    imgAlt: 'wallet',
    subtitle: "Mac'D",
    avatarColor: 'primary',
    imgSrc: '/assets/images/cards/wallet.png',
    trend: <ChevronDown sx={{ color: 'error.main' }} />
  },
  {
    title: 'Transfer',
    amount: '+$8,349',
    subtitle: 'Refund',
    avatarColor: 'info',
    imgAlt: 'arrow-growth',
    imgSrc: '/assets/images/cards/arrow-growth.png',
    trend: <ChevronUp sx={{ color: 'success.main' }} />
  },
  {
    title: 'Wallet',
    amount: '-$124',
    imgAlt: 'wallet',
    subtitle: 'Buy Watch',
    avatarColor: 'primary',
    imgSrc: '/assets/images/cards/wallet.png',
    trend: <ChevronDown sx={{ color: 'error.main' }} />
  }
]

const CardTransactions: FC = () => {
  return (
    <Card>
      <CardHeader
        title='Transactions'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: index !== data.length - 1 ? 6.75 : undefined
              }}
            >
              <CustomAvatar skin='light' color={item.avatarColor} variant='rounded' sx={{ mr: 3 }}>
                <img width='20' alt={item.imgAlt} src={item.imgSrc} />
              </CustomAvatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                  <Typography variant='body2' sx={{ fontSize: '0.75rem' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 1, fontWeight: 600 }}>{item.amount}</Typography>
                  {item.trend}
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardTransactions
