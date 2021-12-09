// ** React Imports
import { FC } from 'react'

// ** MUI Import
import Grid from '@mui/material/Grid'

/**
 * ! Icons Imports:
 * ! You need to import all the icons which come from the API or from your server and then add these icons in 'icons' variable.
 * ! If you need all the icons from the library, use "import * as Icon from '@mitch528/mdi-material-ui'"
 * */
import Poll from 'mdi-material-ui/Poll'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Types Imports
import { CardStatsHorizontalProps } from '@core/components/card-statistics/types'

// ** Custom Components Imports
import CardStatisticsHorizontal from '@core/components/card-statistics/card-stats-horizontal'

const icons = {
  Poll,
  TrendingUp,
  CurrencyUsd,
  AccountOutline
}

const CardStatsHorizontal: FC<{ data: CardStatsHorizontalProps[] }> = ({ data }) => {
  return (
    <Grid container spacing={6}>
      {data.map((item: CardStatsHorizontalProps, index: number) => {
        const IconTag = icons[item.icon as keyof typeof icons]

        return (
          <Grid item xs={12} md={3} sm={6} key={index}>
            <CardStatisticsHorizontal {...item} icon={<IconTag />} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CardStatsHorizontal
