// ** Type Import
import { CustomCheckboxImgData } from 'src/@core/components/custom-checkbox/types'

// ** Demo Components Imports
import CustomCheckboxImg from 'src/@core/components/custom-checkbox/image'

const data: CustomCheckboxImgData[] = [
  {
    value: 'starter',
    gridProps: { sm: 4, xs: 12 },
    img: '/images/pages/background-3.jpg'
  },
  {
    value: 'standard',
    gridProps: { sm: 4, xs: 12 },
    img: '/images/pages/background-8.jpg'
  },
  {
    value: 'enterprise',
    gridProps: { sm: 4, xs: 12 },
    img: '/images/pages/background-5.jpg'
  }
]

const CustomCheckboxWithImages = () => {
  return <CustomCheckboxImg data={data} value={['starter']} name='custom-checkbox-img' />
}

export default CustomCheckboxWithImages
