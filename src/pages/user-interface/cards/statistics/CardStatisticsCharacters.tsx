// ** MUI Import
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsCharacter from 'src/@core/components/card-statistics/card-stats-with-image'

const CardStatsCharacter = () => {
  return (
    <Box sx={{ marginTop: 7 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsCharacter
            stats='13.7k'
            title='Ratings'
            trendNumber='+38%'
            chipText='Year of 2021'
            src='/assets/images/cards/pose_f9.png'
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={{ marginTop: [7, 0] }}>
          <CardStatisticsCharacter
            stats='24.5k'
            trend='negative'
            title='Sessions'
            trendNumber='-22%'
            chipText='Last Week'
            chipColor='secondary'
            src='/assets/images/cards/pose_m18.png'
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={{ marginTop: { xs: 7, lg: 0 } }}>
          <CardStatisticsCharacter
            stats='2,856'
            chipColor='info'
            title='Customers'
            trendNumber='+59%'
            chipText='Last Quarter'
            src='/assets/images/cards/pose_m1.png'
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={{ marginTop: { xs: 7, lg: 0 } }}>
          <CardStatisticsCharacter
            stats='42.5k'
            trendNumber='+26%'
            chipColor='warning'
            title='Total Orders'
            chipText='Last Month'
            src='/assets/images/cards/pose_m35.png'
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardStatsCharacter
