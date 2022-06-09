// ** Demo Components Imports
import CustomCheckboxImg from 'src/@core/components/mui/checkbox/CustomCheckboxImg'

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

const CustomCheckboxesImgExample = () => {
  return <CustomCheckboxImg name='custom-checkbox-img' data={dataIcons} />
}

export default CustomCheckboxesImgExample
