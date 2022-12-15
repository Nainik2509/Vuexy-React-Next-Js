// ** Custom Component Import
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'

const CardAnalyticsRevenueGenerated = () => {
  return (
    <CardStatsWithAreaChart
      stats='97.5k'
      chartColor='success'
      avatarColor='success'
      title='Revenue Generated'
      avatarIcon='tabler:credit-card'
      chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
    />
  )
}

export default CardAnalyticsRevenueGenerated
