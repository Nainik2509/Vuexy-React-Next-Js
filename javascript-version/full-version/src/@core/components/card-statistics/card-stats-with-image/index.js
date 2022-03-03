// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Styled component for the image
const Img = styled('img')({
  right: 7,
  bottom: 0,
  height: 177,
  position: 'absolute'
})

const CardStatsCharacter = ({ data }) => {
  // ** Vars
  const { title, chipColor, chipText, src, stats, trend, trendNumber } = data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative' }}>
      <CardContent>
        <Typography sx={{ fontWeight: 600, marginBottom: 8.75, lineHeight: 1.31 }}>{title}</Typography>
        <Box sx={{ rowGap: 1, width: '55%', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Typography variant='h5' sx={{ fontWeight: 600, marginRight: 1.5, lineHeight: 0.88 }}>
            {stats}
          </Typography>
          <Typography
            component='sup'
            sx={{ fontSize: '0.75rem', color: trend === 'negative' ? 'error.main' : 'success.main' }}
          >
            {trendNumber}
          </Typography>
        </Box>
        <CustomChip
          size='small'
          skin='light'
          label={chipText}
          color={chipColor}
          sx={{ height: 20, marginTop: 3.5, fontWeight: 600, fontSize: '0.75rem' }}
        />
        <Img src={src} alt={title} />
      </CardContent>
    </Card>
  )
}

export default CardStatsCharacter

CardStatsCharacter.defaultProps = {
  trend: 'positive',
  chipColor: 'primary'
}
