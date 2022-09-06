// ** Next Import
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import HelpCenterArticle from 'src/views/pages/help-center/article'

const HelpCenterArticles = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return data ? <HelpCenterArticle article={data.article} category={data.category} /> : null
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/help-center/article', {
    params: { article: 'changing-your-username' }
  })
  const data = res.data

  return {
    props: {
      data
    }
  }
}

export default HelpCenterArticles
