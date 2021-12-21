// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CardTeamMembers from './CardTeamMembers'
import CardPlanUpgrade from './CardPlanUpgrade'
import CardCafeBadilico from './CardCafeBadilico'
import CardTransactions from './CardTransactions'
import CardTotalEarnings from './CardTotalEarings'
import CardFinanceSummary from './CardFinanceSummary'
import CardDepositWithdraw from './CardDepositWithdraw'
import CardSocialAnalytics from './CardSocialAnalytics'
import CardMeetingSchedule from './CardMeetingSchedule'
import CardDeveloperMeetup from './CardDeveloperMeetup'
import CardSalesByCountries from './CardSalesByCountries'
import CardActivityTimeline from './CardActivityTimeline'
import CardWebsiteStatistics from './CardWebsiteStatistics'

const CardsAdvanced = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={4}>
        <CardTransactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardPlanUpgrade />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardMeetingSchedule />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <CardTeamMembers />
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <CardDepositWithdraw />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardTotalEarnings />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <CardFinanceSummary />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardSocialAnalytics />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardWebsiteStatistics />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardDeveloperMeetup />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardSalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <CardActivityTimeline />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardCafeBadilico />
      </Grid>
    </Grid>
  )
}

export default CardsAdvanced
