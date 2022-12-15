// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import CardAnalyticsProject from 'src/views/dashboards/analytics/CardAnalyticsProject'
import CardAnalyticsOrderVisits from 'src/views/dashboards/analytics/CardAnalyticsOrderVisits'
import CardAnalyticsTotalEarning from 'src/views/dashboards/analytics/CardAnalyticsTotalEarning'
import CardAnalyticsSourceVisits from 'src/views/dashboards/analytics/CardAnalyticsSourceVisits'
import CardAnalyticsEarningReports from 'src/views/dashboards/analytics/CardAnalyticsEarningReports'
import CardAnalyticsSupportTracker from 'src/views/dashboards/analytics/CardAnalyticsSupportTracker'
import CardAnalyticsSalesByCountries from 'src/views/dashboards/analytics/CardAnalyticsSalesByCountries'
import CardAnalyticsMonthlyCampaignState from 'src/views/dashboards/analytics/CardAnalyticsMonthlyCampaignState'
import CardAnalyticsWebsiteAnalyticsSlider from 'src/views/dashboards/analytics/CardAnalyticsWebsiteAnalyticsSlider'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <CardAnalyticsWebsiteAnalyticsSlider />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardAnalyticsOrderVisits />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardStatsWithAreaChart
              stats='97.5k'
              chartColor='success'
              avatarColor='success'
              title='Revenue Generated'
              avatarIcon='tabler:credit-card'
              chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardAnalyticsEarningReports />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardAnalyticsSupportTracker />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardAnalyticsSalesByCountries />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardAnalyticsTotalEarning />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardAnalyticsMonthlyCampaignState />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardAnalyticsSourceVisits />
          </Grid>
          <Grid item xs={12} lg={8}>
            <CardAnalyticsProject />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
