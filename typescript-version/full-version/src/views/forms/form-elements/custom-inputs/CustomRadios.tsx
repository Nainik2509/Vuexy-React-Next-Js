// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomRadioBasic from 'src/@core/components/mui/radio/CustomRadioBasic'

const data = [
  {
    meta: 'Free',
    value: 'basic',
    title: 'Basic',
    gridProps: { sm: 6, xs: 12 },
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Get 1 project with 1 teams members.
      </Typography>
    )
  },
  {
    meta: '$5.00',
    value: 'premium',
    title: 'Premium',
    gridProps: { sm: 6, xs: 12 },
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Get 5 projects with 5 team members.
      </Typography>
    )
  }
]

const CustomRadios = () => {
  return <CustomRadioBasic value='basic' name='custom-radios-basic' data={data} />
}

export default CustomRadios
