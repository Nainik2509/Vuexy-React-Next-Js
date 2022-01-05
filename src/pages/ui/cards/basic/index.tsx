// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser from 'src/components/ui/cards/basic/CardUser'
import CardImgTop from 'src/components/ui/cards/basic/CardImgTop'
import CardMobile from 'src/components/ui/cards/basic/CardMobile'
import CardSupport from 'src/components/ui/cards/basic/CardSupport'
import CardTwitter from 'src/components/ui/cards/basic/CardTwitter'
import CardFacebook from 'src/components/ui/cards/basic/CardFacebook'
import CardLinkedIn from 'src/components/ui/cards/basic/CardLinkedIn'
import CardAppleWatch from 'src/components/ui/cards/basic/CardAppleWatch'
import CardMembership from 'src/components/ui/cards/basic/CardMembership'
import CardInfluencer from 'src/components/ui/cards/basic/CardInfluencer'
import CardNavigation from 'src/components/ui/cards/basic/CardNavigation'
import CardWithCollapse from 'src/components/ui/cards/basic/CardWithCollapse'
import CardVerticalRatings from 'src/components/ui/cards/basic/CardVerticalRatings'
import CardNavigationCenter from 'src/components/ui/cards/basic/CardNavigationCenter'
import CardHorizontalRatings from 'src/components/ui/cards/basic/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Basic Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMobile />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardMembership />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardVerticalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h5'>Navigation Cards</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigation />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigationCenter />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h5'>Solid Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardLinkedIn />
      </Grid>
    </Grid>
  )
}

export default CardBasic
