// ** Next Import
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import AccountSettings from 'src/views/pages/account-settings/AccountSettings'

// ** Types
import { PricingDataType } from 'src/@core/components/plan-details/types'

const AccountSettingsTab = ({ apiPricingData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AccountSettings tab='account' apiPricingData={apiPricingData} />
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/pages/pricing')
  const apiPricingData: PricingDataType = res.data

  return {
    props: {
      apiPricingData,
      tab: params?.tab
    }
  }
}

export default AccountSettingsTab
