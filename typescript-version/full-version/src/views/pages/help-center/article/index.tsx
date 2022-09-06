// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Import
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import {
  HelpCenterCategoriesType,
  HelpCenterSubCategoriesType,
  HelpCenterSubCategoriesArticlesType
} from 'src/@fake-db/types'

interface Props {
  article: string
  category: HelpCenterCategoriesType
}

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  border: 0,
  overflow: 'visible',
  '& .MuiTabs-flexContainer': {
    flexDirection: 'column'
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 40,
    minWidth: 280,
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: theme.shape.borderRadius,
    '& svg': {
      marginBottom: 0,
      marginRight: theme.spacing(1)
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%'
    }
  }
}))

const HelpCenterArticle = (props: Props) => {
  // ** Props
  const { article, category } = props

  // ** Hooks
  const router = useRouter()

  // ** State
  const [value, setValue] = useState<string>(String(router.query.article))

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    router
      .push({
        pathname: router.pathname,
        query: { article: newValue }
      })
      .then(() => {
        setValue(newValue)
      })
  }

  const renderTabs = () => {
    return (
      category &&
      category.subCategories.map((sub: HelpCenterSubCategoriesType) =>
        sub.articles.map((tab: HelpCenterSubCategoriesArticlesType) => (
          <Tab key={tab.slug} value={tab.slug} label={tab.title} />
        ))
      )
    )
  }

  const renderContent = () => {
    const articleData = category.subCategories
      .map((sub: HelpCenterSubCategoriesType) =>
        sub.articles.filter((ar: HelpCenterSubCategoriesArticlesType) => ar.slug === value)
      )
      .filter((o: HelpCenterSubCategoriesArticlesType[]) => o.length)[0][0]

    return (
      <Card>
        <CardContent>
          <Link href='/pages/help-center/landing' passHref>
            <Button component='a' variant='outlined' startIcon={<Icon icon='mdi:chevron-left' />}>
              Back to help center
            </Button>
          </Link>

          <Box sx={{ mt: 6, mb: 6.5, display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' variant='rounded' color='secondary' sx={{ mr: 3 }}>
              <Icon icon={category.icon} />
            </CustomAvatar>
            <Typography variant='h6'>{articleData.title}</Typography>
          </Box>

          <Box sx={{ 'p, .MuiTypography-root': { color: 'text.secondary' } }}>
            <div dangerouslySetInnerHTML={{ __html: article }} />
            <Typography sx={{ mb: 4 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod explicabo quia delectus autem maxime
              dignissimos omnis nihil perspiciatis! Vel rem sequi minima sed qui reprehenderit culpa autem sunt nam.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod explicabo quia delectus autem maxime
              dignissimos omnis nihil perspiciatis! Vel rem sequi minima sed qui reprehenderit culpa autem sunt nam.
            </Typography>
          </Box>
        </CardContent>
        <Divider sx={{ my: theme => `${theme.spacing(1)} !important` }} />
        <CardContent>
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.125rem !important' }}>
                {category.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>55 People found this helpful</Typography>
              <Box sx={{ mt: 4 }}>
                <Button variant='outlined' sx={{ mr: 2.5, px: 2, minWidth: 30 }}>
                  <Icon fontSize={12} icon='mdi:thumbs-up-outline' />
                </Button>
                <Button variant='outlined' sx={{ px: 2, minWidth: 30 }}>
                  <Icon fontSize={12} icon='mdi:thumbs-down-outline' />
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', '& .MuiTypography-root': { fontWeight: 600 } }}>
              <Typography>Still need help?</Typography>
              <Link href='/' passHref>
                <Typography
                  component='a'
                  onClick={(e: SyntheticEvent) => e.preventDefault()}
                  sx={{ ml: 1, color: 'primary.main', textDecoration: 'none' }}
                >
                  Contact us?
                </Typography>
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    )
  }

  return (
    <TabContext value={value}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant='h6' sx={{ mb: 4, fontWeight: 600, fontSize: '1.375rem !important' }}>
            {category.title}
          </Typography>
          <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>
            {renderTabs()}
          </TabList>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <TabPanel value={value}>{renderContent()}</TabPanel>
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default HelpCenterArticle
