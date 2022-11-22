// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Types Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const { title, subtitle, icon, stats, trendNumber, optionsMenuProps, color = 'primary', trend = 'positive' } = props

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', mb: 5.5, alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <CustomAvatar color={color} sx={{ width: 38, height: 38, boxShadow: 3, mr: 4 }}>
            {icon}
          </CustomAvatar>
          {optionsMenuProps ? (
            <OptionsMenu {...optionsMenuProps} />
          ) : (
            <OptionsMenu
              options={['Refresh', 'Share', 'Update']}
              iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }}
            />
          )}
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{title}</Typography>
        <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', mb: 1.5, alignItems: 'flex-start' }}>
          <Typography variant='h5' sx={{ mr: 1, fontWeight: 600 }}>
            {stats}
          </Typography>
          <Typography
            component='sup'
            sx={{ fontSize: '0.75rem', color: trend === 'positive' ? 'success.main' : 'error.main' }}
          >
            {trendNumber}
          </Typography>
        </Box>
        <Typography variant='caption'>{subtitle}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical