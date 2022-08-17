// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Next Imports
import Anchor from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { KnowledgeBaseData, KnowledgeBaseCategoryData, KnowledgeBaseCategoryQuestion } from 'src/@fake-db/types'

// ** Demo Import
import KnowledgeBaseHeader from 'src/views/pages/knowledge-base/KnowledgeBaseHeader'

// Styled Link component
const StyledLink = styled('a')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(6)
  },
  '&:hover *': {
    color: theme.palette.primary.main
  }
}))

// Styled CardContent component
const StyledCardContent = styled(CardContent)<CardContentProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3.75, 5.5),
  backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`,
  '& svg': {
    marginRight: theme.spacing(3)
  }
}))

const KnowledgeBaseCategory = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** States
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [data, setData] = useState<KnowledgeBaseCategoryData | null>(null)

  const router = useRouter()
  const { category } = router.query

  useEffect(() => {
    if (searchTerm !== '') {
      axios.get('/pages/knowledge-base/categories', { params: { q: searchTerm } }).then(response => {
        if (response.data && response.data.length) {
          setData(response.data)
        } else {
          setData(null)
        }
      })
    } else {
      setData(apiData)
    }
  }, [searchTerm, apiData])

  const renderQuestions = (item: KnowledgeBaseCategoryData) => {
    return item.questions.map((obj: KnowledgeBaseCategoryQuestion, index: number) => {
      return (
        <Anchor passHref key={index} href={`/pages/knowledge-base/${category}/${obj.slug}`}>
          <StyledLink>
            <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2.25, color: 'text.secondary' } }}>
              <Icon icon='mdi:circle-outline' fontSize='0.875rem' />
              <Typography variant='body2'>{obj.question}</Typography>
            </Box>
          </StyledLink>
        </Anchor>
      )
    })
  }

  const renderGrid = () => {
    if (data !== null && Array.isArray(data)) {
      return data.map((item: KnowledgeBaseCategoryData, index: number) => {
        if (item) {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <StyledCardContent sx={{ '& svg': { ...(item.iconColor ? { color: `${item.iconColor}.main` } : {}) } }}>
                  <Icon icon={item.icon} />
                  <Typography variant='h6'>{`${item.title} (${item.questions.length})`}</Typography>
                </StyledCardContent>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    p: theme => `${theme.spacing(6.75, 5.5, 7.5)} !important`
                  }}
                >
                  {renderQuestions(item)}
                </CardContent>
              </Card>
            </Grid>
          )
        } else {
          return null
        }
      })
    } else {
      return (
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 2 } }}>
            <Icon icon='mdi:information-outline' />
            <Typography variant='h6'>Data is not an array!</Typography>
          </Box>
        </Grid>
      )
    }
  }

  const renderNoResult = (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 2 } }}>
      <Icon icon='mdi:alert-circle-outline' />
      <Typography variant='h6'>No Results Found!</Typography>
    </Box>
  )

  return (
    <Fragment>
      <KnowledgeBaseHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {data !== null ? (
        <Grid container spacing={6} className='match-height'>
          {renderGrid()}
        </Grid>
      ) : (
        renderNoResult
      )}
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/pages/knowledge-base')
  const data: KnowledgeBaseData[] = await res.data

  const paths = data.map((item: KnowledgeBaseData) => ({
    params: { category: `${item.category}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/knowledge-base/categories')
  const apiData: KnowledgeBaseCategoryData = await res.data

  return {
    props: {
      apiData
    }
  }
}

export default KnowledgeBaseCategory
