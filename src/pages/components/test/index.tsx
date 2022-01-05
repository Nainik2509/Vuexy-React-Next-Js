// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Imports
import Drawer from 'src/components/components/test/Drawer'
import CardAppBar from 'src/components/components/test/CardAppBar'
import PaperSimple from 'src/components/components/test/PaperSimple'
import CardDivider from 'src/components/components/test/CardDivider'
import CardPopover from 'src/components/components/test/CardPopover'
import CardTooltip from 'src/components/components/test/CardTooltip'
import PaperVariant from 'src/components/components/test/PaperVariant'
import CardProgress from 'src/components/components/test/CardProgress'
import OutsideAppBar from 'src/components/components/test/OutsideAppBar'
import OutsideDivider from 'src/components/components/test/OutsideDivider'
import CardBreadcrumb from 'src/components/components/test/CardBreadcrumb'
import OutsidePopover from 'src/components/components/test/OutsidePopover'
import OutsideTooltip from 'src/components/components/test/OutsideTooltip'
import OutsideProgress from 'src/components/components/test/OutsideProgress'
import OutsideBreadcrumb from 'src/components/components/test/OutsideBreadcrumb'

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
