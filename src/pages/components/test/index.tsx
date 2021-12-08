// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Imports
import Drawer from './Drawer'
import CardAppBar from './CardAppBar'
import PaperSimple from './PaperSimple'
import CardDivider from './CardDivider'
import CardPopover from './CardPopover'
import CardTooltip from './CardTooltip'
import PaperVariant from './PaperVariant'
import CardProgress from './CardProgress'
import OutsideAppBar from './OutsideAppBar'
import OutsideDivider from './OutsideDivider'
import CardBreadcrumb from './CardBreadcrumb'
import OutsidePopover from './OutsidePopover'
import OutsideTooltip from './OutsideTooltip'
import OutsideProgress from './OutsideProgress'
import OutsideBreadcrumb from './OutsideBreadcrumb'

const Test = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} sm={6}>
        <PaperSimple />
      </Grid>
      <Grid item xs={12} sm={6}>
        <PaperVariant />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Divider</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardDivider />
      </Grid>
      <Grid item xs={12} sm={6}>
        <OutsideDivider />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Progress</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardProgress />
      </Grid>
      <Grid item xs={12} sm={6}>
        <OutsideProgress />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Breadcrumb</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardBreadcrumb />
      </Grid>
      <Grid item xs={12} sm={6}>
        <OutsideBreadcrumb />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Popover</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardPopover />
      </Grid>
      <Grid item xs={12} sm={6}>
        <OutsidePopover />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Tooltip</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardTooltip />
      </Grid>
      <Grid item xs={12} sm={6}>
        <OutsideTooltip />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>AppBar</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardAppBar />
      </Grid>
      <Grid item xs={12} sm={6}>
        <OutsideAppBar />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Drawer</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Drawer />
      </Grid>
    </Grid>
  )
}

export default Test
