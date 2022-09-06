// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Import
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import { HelpCenterCategoriesType } from 'src/@fake-db/types'

type Props = { categories: HelpCenterCategoriesType[] }

const HelpCenterPopularArticles = (props: Props) => {
  const { categories } = props

  const renderCategories = () => {
    if (categories && categories.length) {
      return categories.map(category => {
        return (
          <Grid key={category.slug} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar
                    skin='light'
                    variant='rounded'
                    color={category.avatarColor}
                    sx={{ mr: 3, height: 34, width: 34 }}
                  >
                    <Icon icon={category.icon} />
                  </CustomAvatar>
                  <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.125rem !important' }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ mb: 5, minHeight: 100 }}>
                  {category.subCategories.map(sub => (
                    <Box key={sub.title} sx={{ '&:not(:last-of-type)': { mb: 2 } }}>
                      <Link href={`/pages/help-center/categories/${category.slug}/${sub.slug}`} passHref>
                        <Box
                          component='a'
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            '& .MuiTypography-root, & svg': { color: 'primary.main' }
                          }}
                        >
                          <Icon icon='mdi:circle-small' />
                          <Typography>{sub.title}</Typography>
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Box>
                <Link href={`/pages/help-center/categories/${category.slug}`} passHref>
                  <Typography component='a' sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                    {category.totalArticles} Articles
                  </Typography>
                </Link>
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
      {renderCategories()}
    </Grid>
  )
}

export default HelpCenterPopularArticles
