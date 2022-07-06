// ** Next Import
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserProfile from 'src/views/pages/user-profile/UserProfile'

// ** Types
// import { PricingDataType } from 'src/@core/components/plan-details/types'

const UserProfileTab = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <UserProfile tab='profile' data={data} />
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/pages/profile', { params: { tab: 'profile' } })
  const data = res.data

  return {
    props: {
      data
    }
  }
}

export default UserProfileTab
