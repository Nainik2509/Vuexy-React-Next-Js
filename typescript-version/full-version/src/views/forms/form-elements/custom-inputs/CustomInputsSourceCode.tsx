export const CustomCheckboxIconsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomCheckboxIcons from 'src/@core/components/mui/checkbox/CustomCheckboxIcons'

// ** Icons Import
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

const dataIcons = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    icon: <RocketLaunchOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        A simple start for everyone.
      </Typography>
    )
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    icon: <AccountOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        For small to medium businesses.
      </Typography>
    )
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    icon: <CrownOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Solution for big organizations.
      </Typography>
    )
  }
]

const CustomCheckboxIconsExample = () => {
  return <CustomCheckboxIcons name='custom-checkbox-icons' data={dataIcons} />
}

export default CustomCheckboxIconsExample
`}</code>
  </pre>
)

export const CustomCheckboxJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
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
`}</code>
  </pre>
)

export const CustomCheckboxImgJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Demo Components Imports
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
`}</code>
  </pre>
)

export const CustomRadioImgJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Demo Components Imports
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
`}</code>
  </pre>
)

export const CustomRadiosJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
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
    meta: '5.00',
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
`}</code>
  </pre>
)

export const CustomRadioIconsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomRadioIcons from 'src/@core/components/mui/radio/CustomRadioIcons'

// ** Icons Import
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

const dataIcons = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    icon: <RocketLaunchOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        A simple start for everyone.
      </Typography>
    )
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    icon: <AccountOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        For small to medium businesses.
      </Typography>
    )
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    icon: <CrownOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Solution for big organizations.
      </Typography>
    )
  }
]

const CustomRadiosIcons = () => {
  return <CustomRadioIcons value='starter' name='custom-radios-icons' data={dataIcons} />
}

export default CustomRadiosIcons
`}</code>
  </pre>
)

export const CustomCheckboxTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
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
`}</code>
  </pre>
)

export const CustomRadioIconsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomRadioIcons from 'src/@core/components/mui/radio/CustomRadioIcons'

// ** Icons Import
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

const dataIcons = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    icon: <RocketLaunchOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        A simple start for everyone.
      </Typography>
    )
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    icon: <AccountOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        For small to medium businesses.
      </Typography>
    )
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    icon: <CrownOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Solution for big organizations.
      </Typography>
    )
  }
]

const CustomRadiosIcons = () => {
  return <CustomRadioIcons value='starter' name='custom-radios-icons' data={dataIcons} />
}

export default CustomRadiosIcons
`}</code>
  </pre>
)

export const CustomCheckboxIconsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomCheckboxIcons from 'src/@core/components/mui/checkbox/CustomCheckboxIcons'

// ** Icons Import
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

const dataIcons = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    icon: <RocketLaunchOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        A simple start for everyone.
      </Typography>
    )
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    icon: <AccountOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        For small to medium businesses.
      </Typography>
    )
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    icon: <CrownOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Solution for big organizations.
      </Typography>
    )
  }
]

const CustomCheckboxIconsExample = () => {
  return <CustomCheckboxIcons name='custom-checkbox-icons' data={dataIcons} />
}

export default CustomCheckboxIconsExample
`}</code>
  </pre>
)

export const CustomRadioImgTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Demo Components Imports
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
`}</code>
  </pre>
)

export const CustomCheckboxImgTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Demo Components Imports
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
`}</code>
  </pre>
)

export const CustomRadiosTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
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
    meta: '5.00',
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
`}</code>
  </pre>
)
