// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import useAxios from 'axios-hooks'

// ** Demo Components Imports
import CardStatisticsSales from './CardStatisticsSales'
import CardStatisticsVertical from './CardStatisticsVertical'

// import CardStatisticsRecharts from './CardStatisticsRecharts'
import CardStatisticsHorizontal from './CardStatisticsHorizontal'
import CardStatisticsCharacters from './CardStatisticsCharacters'

const CardStatistics = () => {
  // ** State
  const [data, setData] = useState<any>(null)

  // ** Hooks
  const [response] = useAxios({ url: '/cards/statistics', method: 'get' })

  useEffect(() => {
    if (response.data && Object.keys(response.data).length) {
      setData(response.data)
    } else {
      setData(null)
    }
  }, [response])

  return data !== null ? (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CardStatisticsHorizontal data={data.statsHorizontal} />
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsSales />
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsVertical data={data.statsVertical} />
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsCharacters />
      </Grid>
      {/* <Grid item xs={12}>
        <CardStatisticsRecharts data={data.statsCharts} />
      </Grid> */}
    </Grid>
  ) : null
}

export default CardStatistics
