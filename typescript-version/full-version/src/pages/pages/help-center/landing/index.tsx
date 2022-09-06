// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { HelpCenterCategoriesType, HelpCenterPopularArticlesType } from 'src/@fake-db/types'

// ** Demo Imports
import HelpCenterKB from 'src/views/pages/help-center/landing/HelpCenterKB'
import HelpCenterHeader from 'src/views/pages/help-center/landing/HelpCenterHeader'
import HelpCenterFooter from 'src/views/pages/help-center/landing/HelpCenterFooter'
import HelpCenterPopularArticles from 'src/views/pages/help-center/landing/HelpCenterPopularArticles'

type ApiDataType = {
  categories: HelpCenterCategoriesType[]
  keepLearning: HelpCenterPopularArticlesType[]
  popularArticles: HelpCenterPopularArticlesType[]
}

const KnowledgeBase = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Card>
      {apiData !== null ? (
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <HelpCenterHeader />
          </Grid>
          <Grid item xs={12}>
            <CardContent sx={{ px: [6, 20] }}>
              <Typography
                variant='h5'
                sx={{ mb: 6, fontWeight: 600, fontSize: '1.5rem !important', textAlign: 'center' }}
              >
                Popular Articles
              </Typography>
              <HelpCenterPopularArticles articles={apiData.popularArticles} />
            </CardContent>
          </Grid>
          <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(15)} !important` }}>
            <CardContent
              sx={{
                px: [6, 20],
                py: theme => `${theme.spacing(20)} !important`,
                backgroundColor: 'background.default'
              }}
            >
              <Typography
                variant='h5'
                sx={{ mb: 6, fontWeight: 600, fontSize: '1.5rem !important', textAlign: 'center' }}
              >
                Knowledge Base
              </Typography>
              <HelpCenterKB categories={apiData.categories} />
            </CardContent>
          </Grid>
          <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(15)} !important` }}>
            <CardContent sx={{ px: [6, 20], pb: theme => `${theme.spacing(12)} !important` }}>
              <Typography
                variant='h5'
                sx={{ mb: 6, fontWeight: 600, fontSize: '1.5rem !important', textAlign: 'center' }}
              >
                Keep Learning
              </Typography>
              <HelpCenterPopularArticles articles={apiData.keepLearning} />
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardContent sx={{ py: theme => `${theme.spacing(20)} !important`, backgroundColor: 'background.default' }}>
              <HelpCenterFooter />
            </CardContent>
          </Grid>
        </Grid>
      ) : null}
    </Card>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/help-center/landing')
  const apiData: ApiDataType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default KnowledgeBase
