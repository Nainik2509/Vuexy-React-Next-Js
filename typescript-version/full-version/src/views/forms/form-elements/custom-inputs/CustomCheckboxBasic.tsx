// ** Type Import
import { CustomCheckboxBasicData } from 'src/@core/components/custom-checkbox/types'

// ** Demo Components Imports
import CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic'

const data: CustomCheckboxBasicData[] = [
  {
    meta: '20%',
    value: 'discount',
    title: 'Discount',
    gridProps: { sm: 6, xs: 12 },
    content: 'Wow! Get 20% off on your next purchase!'
  },
  {
    meta: 'Free',
    value: 'updates',
    title: 'Updates',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get Updates regarding related products.'
  }
]

const BasicCustomCheckbox = () => {
  return <CustomCheckboxBasic data={data} value={['discount']} name='custom-checkbox-basic' />
}

export default BasicCustomCheckbox
