// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import AccountSettings from 'src/views/pages/account-settings/AccountSettings'

const AccountSettingsTab = ({ tab, apiPricingData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AccountSettings tab={tab} apiPricingData={apiPricingData} />
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/pages/pricing')

  if (params && params.tab) {
    return {
      props: {
        tab: params.tab,
        apiPricingData: res.data
      }
    }
  } else {
    return {
      props: {
        apiPricingData: {}
      }
    }
  }
}

export default AccountSettingsTab
