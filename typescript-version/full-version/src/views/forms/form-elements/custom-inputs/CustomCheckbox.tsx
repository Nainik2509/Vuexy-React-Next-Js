// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomCheckboxBasic from 'src/@core/components/mui/checkbox/CustomCheckboxBasic'

const data = [
  {
    meta: '20%',
    value: 'discount',
    title: 'Discount',
    gridProps: { sm: 6, xs: 12 },
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        wow Get 20% off on your next purchases!
      </Typography>
    )
  },
  {
    meta: 'Free',
    value: 'updates',
    title: 'Updates',
    gridProps: { sm: 6, xs: 12 },
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Get Updates regarding related products.
      </Typography>
    )
  }
]

const CustomCheckboxes = () => {
  return <CustomCheckboxBasic value={['discount']} name='custom-checkbox-basic' data={data} />
}

export default CustomCheckboxes
