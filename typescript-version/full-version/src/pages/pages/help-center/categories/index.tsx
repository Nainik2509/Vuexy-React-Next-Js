// ** Next Import
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import HelpCenterCategories from 'src/views/pages/help-center/categories'

const HelpCenterCategoriesSlug = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return data ? <HelpCenterCategories data={data.data} activeTab={data.activeTab} /> : null
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/help-center/categories', {
    params: { category: 'getting-started' }
  })
  const data = res.data

  return {
    props: {
      data
    }
  }
}

export default HelpCenterCategoriesSlug
