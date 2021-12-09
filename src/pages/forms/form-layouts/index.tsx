// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import FormLayoutsTabs from './FormLayoutsTabs'
import FormLayoutsBasic from './FormLayoutsBasic'
import FormLayoutsIcons from './FormLayoutsIcons'
import FormLayoutsSeparator from './FormLayoutsSeparator'
import FormLayoutsAlignment from './FormLayoutsAlignment'
import FormLayoutsCollapsible from './FormLayoutsCollapsible'

const FormLayouts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <FormLayoutsBasic />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormLayoutsIcons />
      </Grid>
      <Grid item xs={12}>
        <FormLayoutsSeparator />
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: theme => `${theme.spacing(8)} !important` }}>
        <Typography variant='h6'>Form with Tabs</Typography>
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: theme => `${theme.spacing(4)} !important` }}>
        <FormLayoutsTabs />
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: theme => `${theme.spacing(8)} !important` }}>
        <Typography variant='h6'>Collapsible Sections</Typography>
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: theme => `${theme.spacing(4)} !important` }}>
        <FormLayoutsCollapsible />
      </Grid>
      <Grid item xs={12}>
        <FormLayoutsAlignment />
      </Grid>
    </Grid>
  )
}

export default FormLayouts
