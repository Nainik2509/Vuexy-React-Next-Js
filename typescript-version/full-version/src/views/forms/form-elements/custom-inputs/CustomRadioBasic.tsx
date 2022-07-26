// ** Type Import
import { CustomRadioBasicData } from 'src/@core/components/custom-radio/types'

// ** Demo Components Imports
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'

const data: CustomRadioBasicData[] = [
  {
    meta: 'Free',
    title: 'Basic',
    value: 'basic',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get 1 project with 1 team member.'
  },
  {
    meta: '$5.00',
    title: 'Premium',
    value: 'premium',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get 5 projects with 5 team members.'
  }
]

const BasicCustomRadio = () => {
  return <CustomRadioBasic data={data} value='basic' name='custom-radios-basic' />
}

export default BasicCustomRadio
