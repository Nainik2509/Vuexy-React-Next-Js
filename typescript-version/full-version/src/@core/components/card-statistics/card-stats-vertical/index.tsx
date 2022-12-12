// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Type Import
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

// ** Custom Component Import
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const {
    sx,
    stats,
    title,
    subtitle,
    trendDiff,
    avatarIcon,
    iconSize = 24,
    avatarSize = 42,
    trend = 'positive',
    avatarColor = 'primary'
  } = props

  return (
    <Card sx={{ ...sx }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <CustomAvatar
          skin='light'
          variant='rounded'
          color={avatarColor}
          sx={{ mb: 3.5, width: avatarSize, height: avatarSize }}
        >
          <Icon icon={avatarIcon} fontSize={iconSize} />
        </CustomAvatar>
        <Typography variant='h6' sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ mb: 1, color: 'text.disabled' }}>
          {subtitle}
        </Typography>
        <Typography sx={{ mb: 3.5, color: 'text.secondary' }}>{stats}</Typography>
        <CustomChip
          rounded
          size='small'
          skin='light'
          color={trend === 'negative' ? 'error' : 'success'}
          label={`${trend === 'negative' ? '-' : '+'}${trendDiff}`}
        />
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical
