// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import MuiAvatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

// ** Custom Components Imports
import CustomChip from '@core/components/mui/chip'
import CustomAvatar from '@core/components/mui/avatar'

const CardFinanceSummary: FC = () => {
  return (
    <Card>
      <CardHeader
        title='Finance Summary'
        subheader='Check out each Column for more details'
        titleTypographyProps={{ variant: 'h6', sx: { marginBottom: 1 } }}
        action={
          <CustomAvatar skin='light' sx={{ width: 48, height: 48 }}>
            <CurrencyUsd sx={{ fontSize: '2rem', color: 'primary.main' }} />
          </CustomAvatar>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
            <Typography variant='body2'>Annual Companies Taxes</Typography>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              $1450.35
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
            <Typography variant='body2'>Next Tax Review Date</Typography>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              July 14, 2021
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
            <Typography variant='body2'>Average Product Price</Typography>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              $85.50
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginBottom: 3 }}>
            <Typography variant='body2'>Satisfaction Rate</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: 130, mr: 3 }}>
                <LinearProgress value={75} sx={{ height: 6 }} variant='determinate' />
              </Box>
              <Typography sx={{ fontWeight: 600 }}>75%</Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <AvatarGroup max={4}>
              <MuiAvatar src='/assets/images/avatars/1.png' />
              <MuiAvatar src='/assets/images/avatars/2.png' />
              <MuiAvatar src='/assets/images/avatars/3.png' />
              <MuiAvatar src='/assets/images/avatars/4.png' />
              <MuiAvatar src='/assets/images/avatars/5.png' />
              <MuiAvatar src='/assets/images/avatars/6.png' />
              <MuiAvatar src='/assets/images/avatars/7.png' />
            </AvatarGroup>
          </Grid>

          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: ['flex-end', 'flex-start'] }}>
            <CustomChip
              size='small'
              skin='light'
              color='primary'
              label='5 Days Ago'
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 600 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardFinanceSummary
