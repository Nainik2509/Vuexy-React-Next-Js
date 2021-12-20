// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import ApexBarChart from './ApexBarChart'
import ApexAreaChart from './ApexAreaChart'
import ApexLineChart from './ApexLineChart'
import ApexRadarChart from './ApexRadarChart'
import ApexDonutChart from './ApexDonutChart'
import ApexColumnChart from './ApexColumnChart'
import ApexScatterChart from './ApexScatterChart'
import ApexHeatmapChart from './ApexHeatmapChart'
import ApexRadialBarChart from './ApexRadialBarChart'
import ApexCandlestickChart from './ApexCandlestickChart'

const ApexCharts = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/apexcharts/react-apexcharts' target='_blank'>
              React ApexCharts
            </Link>
          </Typography>
        }
        subtitle={<Typography variant='body2'>React Component for ApexCharts</Typography>}
      />
      <Grid item xs={12}>
        <ApexAreaChart />
      </Grid>
      <Grid item xs={12}>
        <ApexColumnChart />
      </Grid>
      <Grid item xs={12}>
        <ApexScatterChart />
      </Grid>
      <Grid item xs={12}>
        <ApexLineChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexBarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexCandlestickChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexHeatmapChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexRadialBarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexRadarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <ApexDonutChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
