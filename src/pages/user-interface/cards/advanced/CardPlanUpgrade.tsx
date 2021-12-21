// ** React Imports
import { SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ArrowRight from 'mdi-material-ui/ArrowRight'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Hooks Imports
import useBgColor from 'src/@core/hooks/theme/useBgColor'

const CardPlanUpgrade = () => {
  // ** Hook
  const colorClasses = useBgColor()

  return (
    <Card>
      <CardHeader
        title='Upgrade Your Plan'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='body2' sx={{ fontSize: '0.75rem' }}>
          Please make the payment to start enjoying all the features of our premium plan as soon as possible.
        </Typography>

        <Box
          sx={{
            mt: 4,
            borderRadius: '4px',
            color: 'text.primary',
            padding: theme => theme.spacing(2.25, 2.75),
            backgroundColor: colorClasses.primaryLight.backgroundColor
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='rounded'
              sx={{
                mr: 3,
                width: '2.625rem',
                height: '2.625rem',
                backgroundColor: 'transparent',
                border: theme => `1px solid ${theme.palette.primary.main}`
              }}
            >
              <img height='20' alt='briefcase' src='/assets/images/cards/briefcase.png' />
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Platinum</Typography>
                <Link
                  href='/'
                  sx={{ fontWeight: 500, fontSize: '0.75rem' }}
                  onClick={(e: SyntheticEvent) => e.preventDefault()}
                >
                  Upgrade Plan
                </Link>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ mt: 0.75, fontWeight: 500, color: 'text.primary', alignSelf: 'flex-start' }}
                >
                  $
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                  5,250
                </Typography>
                <Typography component='sub' variant='caption' sx={{ lineHeight: 1.5, alignSelf: 'flex-end' }}>
                  /Year
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ mt: 4.5, mb: 2, fontWeight: 600, fontSize: '0.875rem' }}>Payment details</Typography>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <img height='30' alt='master-card' src='/assets/images/cards/logo-mastercard-small.png' />
          <Box
            sx={{
              ml: 3,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ marginRight: 2, display: 'flex', marginBottom: 0.4, flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Credit card</Typography>
              <Typography variant='caption'>2566 xxxx xxxx 8908</Typography>
            </Box>
            <TextField label='CVC' size='small' sx={{ width: 70, marginTop: 0.4 }} />
          </Box>
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <img height='30' alt='credit-card' src='/assets/images/cards/logo-credit-card-2.png' />
          <Box
            sx={{
              ml: 3,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ marginRight: 2, display: 'flex', marginBottom: 0.4, flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Credit card</Typography>
              <Typography variant='caption'>8990 xxxx xxxx 6852</Typography>
            </Box>
            <TextField label='CVC' size='small' sx={{ width: 70, marginTop: 0.4 }} />
          </Box>
        </Box>

        <Link
          href='/'
          onClick={(e: SyntheticEvent) => e.preventDefault()}
          sx={{ marginTop: 4, fontWeight: 500, marginBottom: 4, fontSize: '0.75rem' }}
        >
          Add Payment Method
        </Link>

        <FormControl fullWidth sx={{ mt: 4.5, mb: 3.5 }}>
          <TextField label='Email Address' placeholder='john.doe@email.com' size='small' />
        </FormControl>
        <Button fullWidth variant='contained' endIcon={<ArrowRight />}>
          Proceed to payment
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardPlanUpgrade
