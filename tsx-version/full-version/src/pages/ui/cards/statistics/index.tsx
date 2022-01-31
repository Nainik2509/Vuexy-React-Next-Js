// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

// ** Type Import
import { CardStatsType } from 'src/@fake-db/types'

// ** Demo Components Imports
import CardStatisticsSales from 'src/views/ui/cards/statistics/CardStatisticsSales'
import CardStatisticsVertical from 'src/views/ui/cards/statistics/CardStatisticsVertical'
import CardStatisticsHorizontal from 'src/views/ui/cards/statistics/CardStatisticsHorizontal'
import CardStatisticsCharacters from 'src/views/ui/cards/statistics/CardStatisticsCharacters'

const CardStatistics = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CardStatisticsHorizontal data={apiData.statsHorizontal} />
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsSales />
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsVertical data={apiData.statsVertical} />
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsCharacters data={apiData.statsCharacter} />
      </Grid>
    </Grid>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default CardStatistics
