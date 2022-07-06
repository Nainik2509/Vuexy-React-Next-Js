// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserProfile from 'src/views/pages/user-profile/UserProfile'

// ** Types
// import { PricingDataType } from 'src/@core/components/plan-details/types'

const UserProfileTab = ({ tab, data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <UserProfile tab={tab} data={data} />
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/pages/profile', { params: { tab: params?.tab } })
  const data = res.data

  return {
    props: {
      data,
      tab: params?.tab
    }
  }
}

export default UserProfileTab
