// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CardTeamMembers from 'src/components/ui/cards/advanced/CardTeamMembers'
import CardPlanUpgrade from 'src/components/ui/cards/advanced/CardPlanUpgrade'
import CardCafeBadilico from 'src/components/ui/cards/advanced/CardCafeBadilico'
import CardTransactions from 'src/components/ui/cards/advanced/CardTransactions'
import CardTotalEarnings from 'src/components/ui/cards/advanced/CardTotalEarings'
import CardFinanceSummary from 'src/components/ui/cards/advanced/CardFinanceSummary'
import CardDepositWithdraw from 'src/components/ui/cards/advanced/CardDepositWithdraw'
import CardSocialAnalytics from 'src/components/ui/cards/advanced/CardSocialAnalytics'
import CardMeetingSchedule from 'src/components/ui/cards/advanced/CardMeetingSchedule'
import CardDeveloperMeetup from 'src/components/ui/cards/advanced/CardDeveloperMeetup'
import CardSalesByCountries from 'src/components/ui/cards/advanced/CardSalesByCountries'
import CardActivityTimeline from 'src/components/ui/cards/advanced/CardActivityTimeline'
import CardWebsiteStatistics from 'src/components/ui/cards/advanced/CardWebsiteStatistics'

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
