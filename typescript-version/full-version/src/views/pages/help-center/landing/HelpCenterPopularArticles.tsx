// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Types
import { HelpCenterPopularArticlesType } from 'src/@fake-db/types'

type Props = { articles: HelpCenterPopularArticlesType[] }

const HelpCenterPopularArticles = (props: Props) => {
  const { articles } = props

  const renderArticles = () => {
    if (articles && articles.length) {
      return articles.map(article => {
        return (
          <Grid key={article.slug} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
                border: theme => `1px solid ${theme.palette.divider}`
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ minHeight: 58 }}>
                  <img width='58' src={article.img} alt={article.title} />
                </Box>

                <Typography variant='h6' sx={{ mb: 1.5, fontWeight: 600 }}>
                  {article.title}
                </Typography>
                <Typography sx={{ mb: 4, color: 'text.secondary' }}>{article.subtitle}</Typography>
                <Button variant='outlined'>Read More</Button>
              </CardContent>
            </Card>
          </Grid>
        )
      })
    } else {
      return null
    }
  }

  return (
    <Grid container spacing={6} className='match-height'>
      {renderArticles()}
    </Grid>
  )
}

export default HelpCenterPopularArticles
