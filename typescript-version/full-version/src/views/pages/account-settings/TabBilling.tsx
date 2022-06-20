// ** Types
import { PricingDataType } from 'src/@core/components/plan-details/types'

// ** Demo Components
import CurrentPlanCard from 'src/views/pages/account-settings/billing/CurrentPlanCard'
import PaymentMethodCard from 'src/views/pages/account-settings/billing/PaymentMethodCard'
import BillingAddressCard from 'src/views/pages/account-settings/billing/BillingAddressCard'
import BillingHistoryTable from 'src/views/pages/account-settings/billing/BillingHistoryTable'

const TabBilling = ({ apiPricingData }: { apiPricingData: PricingDataType }) => {
  return (
    <>
      <CurrentPlanCard data={apiPricingData} />
      <PaymentMethodCard />
      <BillingAddressCard />
      <BillingHistoryTable />
    </>
  )
}

export default TabBilling
