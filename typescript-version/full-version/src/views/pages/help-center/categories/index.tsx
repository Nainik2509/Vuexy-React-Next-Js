// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
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
  activeTab: string
  data: HelpCenterCategoriesType
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
    textAlign: 'center',
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

const HelpCenterCategories = (props: Props) => {
  // ** State
  const [value, setValue] = useState<string>(props.activeTab)

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const renderTabs = () => {
    return (
      props.data &&
      props.data.subCategories.map((tab: HelpCenterSubCategoriesType) => (
        <Tab key={tab.slug} value={tab.slug} label={tab.title} />
      ))
    )
  }

  const renderContent = () => {
    const dataToRender = props.data.subCategories.filter((i: HelpCenterSubCategoriesType) => i.slug === value)[0]

    return (
      <TabPanel value={value}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3 }}>
                <Icon icon={dataToRender.icon} />
              </CustomAvatar>
              <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.375rem !important' }}>
                {dataToRender.title}
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              {dataToRender.articles.map((article: HelpCenterSubCategoriesArticlesType) => {
                return (
                  <Box
                    key={article.title}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:not(:last-of-type)': { mb: 4 },
                      '& svg': { color: 'text.disabled' }
                    }}
                  >
                    <Icon icon='mdi:chevron-right' />
                    <Link href={`/pages/help-center/article/${article.slug}`} passHref>
                      <Box
                        component='a'
                        sx={{
                          ml: 3,
                          textDecoration: 'none',
                          '& .MuiTypography-root, & svg': { color: 'primary.main' }
                        }}
                      >
                        <Typography>{article.title}</Typography>
                      </Box>
                    </Link>
                  </Box>
                )
              })}
            </Box>

            <Link href='/pages/help-center/landing' passHref>
              <Button component='a' variant='outlined' startIcon={<Icon icon='mdi:chevron-left' />}>
                Back to help center
              </Button>
            </Link>
          </CardContent>
        </Card>
      </TabPanel>
    )
  }

  return (
    <TabContext value={value}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Typography variant='h6' sx={{ mb: 4, fontWeight: 600, fontSize: '1.125rem !important' }}>
            {props.data.title}
          </Typography>
          <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example'>
            {renderTabs()}
          </TabList>
        </Grid>
        <Grid item xs={12} md={8}>
          {renderContent()}
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default HelpCenterCategories
