// ** React Imports
import { FC, useEffect, useState, ChangeEvent } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import MuiCardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { PricingDataType } from 'src/@core/components/plan-details/types'

// ** Demo Imports
import PricingCTA from './PricingCTA'
import PricingPlans from './PricingPlans'
import PricingHeader from './PricingHeader'
import PricingFooter from './PricingFooter'

// ** Styled Components
const CardContent = styled(MuiCardContent)<CardContentProps>(({ theme }) => ({
  padding: theme.spacing(17.5, 36, 28.25),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(12.5, 20, 20)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(10, 5)
  }
}))

const Pricing: FC = () => {
  // ** States
  const [data, setData] = useState<PricingDataType | null>(null)
  const [plan, setPlan] = useState<'monthly' | 'annually'>('monthly')

  useEffect(() => {
    axios.get('/pages/pricing').then(response => {
      if (response.data) {
        setData(response.data)
      } else {
        setData(null)
      }
    })
  }, [])

  const handleChange = (e: ChangeEvent<{ checked: boolean }>) => {
    if (e.target.checked) {
      setPlan('annually')
    } else {
      setPlan('monthly')
    }
  }

  return (
    <Card>
      <CardContent>
        <PricingHeader plan={plan} handleChange={handleChange} />
        <PricingPlans plan={plan} data={data} />
      </CardContent>
      <PricingCTA />
      <PricingFooter data={data} />
    </Card>
  )
}

export default Pricing
