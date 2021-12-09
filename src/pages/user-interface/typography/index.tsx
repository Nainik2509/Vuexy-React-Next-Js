// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TypographyTexts from './TypographyTexts'
import TypographyHeadings from './TypographyHeadings'

const TypographyPage = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <TypographyHeadings />
      </Grid>
      <Grid item xs={12}>
        <TypographyTexts />
      </Grid>
    </Grid>
  )
}

export default TypographyPage
