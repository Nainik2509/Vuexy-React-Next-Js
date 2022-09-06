// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import HelpCenterCategories from 'src/views/pages/help-center/categories'

const HelpCenterCategoriesSlug = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return data ? <HelpCenterCategories data={data.data} activeTab={data.activeTab} /> : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/pages/help-center/categories', {
    params: { category: params?.category }
  })
  const data = res.data

  return {
    props: {
      data
    }
  }
}

export default HelpCenterCategoriesSlug
