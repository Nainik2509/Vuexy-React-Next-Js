// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Components Imports
import RechartsBarChart from 'src/views/charts/recharts/RechartsBarChart'
import RechartsPieChart from 'src/views/charts/recharts/RechartsPieChart'
import RechartsLineChart from 'src/views/charts/recharts/RechartsLineChart'
import RechartsAreaChart from 'src/views/charts/recharts/RechartsAreaChart'
import RechartsRadarChart from 'src/views/charts/recharts/RechartsRadarChart'
import RechartsScatterChart from 'src/views/charts/recharts/RechartsScatterChart'

const Recharts = () => {
  // ** Hooks
  const { settings } = useSettings()

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/recharts/recharts' target='_blank'>
              Recharts
            </Link>
          </Typography>
        }
        subtitle={<Typography variant='body2'>Redefined chart library built with React and D3</Typography>}
      />
      <Grid item xs={12}>
        <RechartsLineChart direction={settings.direction} />
      </Grid>
      <Grid item xs={12}>
        <RechartsAreaChart direction={settings.direction} />
      </Grid>
      <Grid item xs={12}>
        <RechartsScatterChart direction={settings.direction} />
      </Grid>
      <Grid item xs={12}>
        <RechartsBarChart direction={settings.direction} />
      </Grid>
      <Grid item xs={12} md={6}>
        <RechartsRadarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <RechartsPieChart />
      </Grid>
    </Grid>
  )
}

export default Recharts
