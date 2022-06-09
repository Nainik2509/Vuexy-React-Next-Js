// ** Demo Components Imports
import CustomRadioImg from 'src/@core/components/mui/radio/CustomRadioImg'

const dataIcons = [
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

const CustomRadiosImgExample = () => {
  return <CustomRadioImg value='starter' name='custom-radios-img' data={dataIcons} />
}

export default CustomRadiosImgExample
