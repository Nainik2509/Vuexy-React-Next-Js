// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import HelpCenterArticle from 'src/views/pages/help-center/article'

const HelpCenterArticles = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return data ? <HelpCenterArticle article={data.article} category={data.category} /> : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/pages/help-center/article', {
    params: { article: params?.article }
  })
  const data = res.data

  return {
    props: {
      data
    }
  }
}

export default HelpCenterArticles
