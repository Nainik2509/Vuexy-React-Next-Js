// ** Type Import
import { CustomRadioImgData } from 'src/@core/components/custom-radio/types'

// ** Demo Components Imports
import CustomRadioImg from 'src/@core/components/custom-radio/image'

const data: CustomRadioImgData[] = [
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

const CustomRadioWithImages = () => {
  return <CustomRadioImg data={data} value='starter' name='custom-radios-img' />
}

export default CustomRadioWithImages
