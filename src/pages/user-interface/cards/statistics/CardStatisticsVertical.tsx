// ** MUI Import
import Grid from '@mui/material/Grid'

/**
 * ! Icons Imports:
 * ! You need to import all the icons which come from the API or from your server and then add these icons in 'icons' variable.
 * ! If you need all the icons from the library, use "import * as Icon from '@mitch528/mdi-material-ui'"
 * */
import Poll from 'mdi-material-ui/Poll'
import Check from 'mdi-material-ui/Check'
import ChartPie from 'mdi-material-ui/ChartPie'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import LabelVariantOutline from 'mdi-material-ui/LabelVariantOutline'

// ** Types Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

// ** Demo Components Imports
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

interface Props {
  data: CardStatsVerticalProps[]
}

const icons = {
  Poll,
  Check,
  ChartPie,
  TrendingUp,
  CurrencyUsd,
  LabelVariantOutline
}

const CardStatsVertical = ({ data }: Props) => {
  return (
    <Grid container spacing={6}>
      {data.map((item: CardStatsVerticalProps, index: number) => {
        const IconTag = icons[item.icon as keyof typeof icons]

        return (
          <Grid item xs={12} sm={4} lg={2} key={index}>
            <CardStatisticsVertical {...item} icon={<IconTag />} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CardStatsVertical
