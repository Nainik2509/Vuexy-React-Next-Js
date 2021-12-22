// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

// ** Type Import
import { CardStatsType } from 'src/@fake-db/types'

// ** Demo Components Imports
import CardStatisticsSales from './CardStatisticsSales'
import CardStatisticsVertical from './CardStatisticsVertical'
import CardStatisticsHorizontal from './CardStatisticsHorizontal'
import CardStatisticsCharacters from './CardStatisticsCharacters'

const CardStatistics = () => {
  // ** State
  const [data, setData] = useState<CardStatsType | null>(null)

  useEffect(() => {
    axios.get('/cards/statistics').then(response => {
      if (response.data && Object.keys(response.data).length) {
        setData(response.data)
      } else {
        setData(null)
      }
    })
  }, [])

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
        <CardStatisticsCharacters data={data.statsCharacter} />
      </Grid>
    </Grid>
  ) : null
}

export default CardStatistics
