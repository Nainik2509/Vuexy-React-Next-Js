// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Custom Component Imports
import CardStatisticsBar from 'src/@core/components/card-statistics/card-stats-with-charts/bar'
import CardStatisticsArea from 'src/@core/components/card-statistics/card-stats-with-charts/area'
import CardStatisticsLineLinear from 'src/@core/components/card-statistics/card-stats-with-charts/line-linear'
import CardStatisticsLineShadow from 'src/@core/components/card-statistics/card-stats-with-charts/line-shadow'
import CardStatisticsStackedBar from 'src/@core/components/card-statistics/card-stats-with-charts/stacked-bar'
import CardStatisticsPie from './CardStatisticsRechartsPie'

interface Props {
  data: {
    areaData: {
      color: string
      title: string
      subtitle: string
      fillColor: string
      data: { value: number }[]
    }
    barData: {
      title: string
      subtitle: string
      data: { color: string; value: number }[]
    }
    lineData: {
      color: string
      title: string
      subtitle: string
      data: { value: number }[]
    }
    lineShadowData: {
      title: string
      subtitle: string
      colorTopBar: string
      colorBottomBar: string
      data: { value: number }[]
    }
    pieData: {
      title: string
      subtitle: string
      data: { value: number }[]
    }
    stackedBarData: {
      title: string
      color: string
      fillColor: string
      subtitle: string
      data: { valueTop: number; valueBottom: number }[]
    }
  }
}

const CardStatisticsRecharts = ({ data }: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatisticsLineShadow {...data.lineShadowData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatisticsStackedBar {...data.stackedBarData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatisticsArea {...data.areaData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatisticsPie {...data.pieData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatisticsBar {...data.barData} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatisticsLineLinear {...data.lineData} />
      </Grid>
    </Grid>
  )
}

export default CardStatisticsRecharts
