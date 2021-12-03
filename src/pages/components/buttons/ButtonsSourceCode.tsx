export const ButtonsFabCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'

// ** Icons Import
import Plus from 'mdi-material-ui/Plus'
import Heart from 'mdi-material-ui/Heart'
import Pencil from 'mdi-material-ui/Pencil'
import NavigationOutline from 'mdi-material-ui/NavigationOutline'

const ButtonsFab: FC = () => {
  return (
    <div className='demo-space-x'>
      <Fab aria-label='add'>
        <Plus />
      </Fab>
      <Fab color='primary' aria-label='edit'>
        <Pencil />
      </Fab>
      <Fab color='secondary' variant='extended'>
        <NavigationOutline sx={{ marginRight: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label='like'>
        <Heart />
      </Fab>
    </div>
  )
}

export default ButtonsFab
`}</code>
  </pre>
)
export const ButtonsColorsCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC, Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsColors: FC = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button color='success'>Success</Button>
        <Button color='error'>Error</Button>
        <Button color='warning'>Warning</Button>
        <Button color='info'>Info</Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='outlined' color='success'>
          Success
        </Button>
        <Button variant='outlined' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          Info
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
      </div>
    </Fragment>
  )
}

export default ButtonsColors
`}</code>
  </pre>
)
export const ButtonsContainedCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsContained: FC = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='contained'>Primary</Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsContained
`}</code>
  </pre>
)
export const ButtonsCustomizedCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import { brown } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

// Styled component for a custom button
const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: brown[500],
  color: theme.palette.getContrastText(brown[500]),
  '&:hover': {
    backgroundColor: brown[700]
  }
}))

// Styled component for a Bootstrap button
const BootstrapButton = styled(Button)({
  fontSize: 16,
  lineHeight: 1.5,
  boxShadow: 'none',
  border: '1px solid',
  padding: '6px 12px',
  textTransform: 'none',
  borderColor: '#0063cc',
  backgroundColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    boxShadow: 'none',
    borderColor: '#0062cc',
    backgroundColor: '#0069d9'
  },
  '&:active': {
    boxShadow: 'none',
    borderColor: '#005cbf',
    backgroundColor: '#0062cc'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
  }
})

const ButtonsCustomized: FC = () => {
  return (
    <div className='demo-space-x'>
      <CustomButton variant='contained'>Custom Color</CustomButton>
      <BootstrapButton variant='contained' disableRipple>
        Bootstrap
      </BootstrapButton>
    </div>
  )
}

export default ButtonsCustomized
`}</code>
  </pre>
)
export const ButtonsIconsCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import CameraIris from 'mdi-material-ui/CameraIris'

const ButtonsIcons: FC = () => {
  return (
    <div className='demo-space-x'>
      <IconButton aria-label='capture screenshot'>
        <CameraIris />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='primary'>
        <CameraIris />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='secondary'>
        <CameraIris />
      </IconButton>
      <IconButton aria-label='capture screenshot' disabled>
        <CameraIris />
      </IconButton>
    </div>
  )
}

export default ButtonsIcons
`}</code>
  </pre>
)
export const ButtonsSizesCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC, Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import CameraIris from 'mdi-material-ui/CameraIris'

const ButtonsSizes: FC = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='text' size='small'>
          Small
        </Button>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <IconButton aria-label='capture screenshot' color='secondary' size='small'>
          <CameraIris fontSize='inherit' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <CameraIris fontSize='small' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <CameraIris />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <CameraIris fontSize='large' />
        </IconButton>
      </div>
    </Fragment>
  )
}

export default ButtonsSizes
`}</code>
  </pre>
)
export const ButtonsTextCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsText: FC = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='text'>Primary</Button>
      <Button variant='text' color='secondary'>
        Secondary
      </Button>
      <Button variant='text' disabled>
        Disabled
      </Button>
      <Button variant='text' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsText
`}</code>
  </pre>
)
export const ButtonsWithIconAndLabelCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'

// ** Icons Imports
import Send from 'mdi-material-ui/Send'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'

const ButtonsWithIconAndLabel: FC = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='contained' endIcon={<Send />}>
        Send
      </Button>
      <Button variant='contained' color='secondary' startIcon={<DeleteOutline />}>
        Delete
      </Button>
    </div>
  )
}

export default ButtonsWithIconAndLabel
`}</code>
  </pre>
)
export const ButtonsFabSizesCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC, Fragment } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'

// ** Icons Import
import Plus from 'mdi-material-ui/Plus'
import NavigationOutline from 'mdi-material-ui/NavigationOutline'

const ButtonsFabSizes: FC = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Fab color='primary' aria-label='add' size='small'>
          <Plus />
        </Fab>
        <Fab color='primary' aria-label='add' size='medium'>
          <Plus />
        </Fab>
        <Fab color='primary' aria-label='add' size='large'>
          <Plus />
        </Fab>
      </div>
      <div className='demo-space-x'>
        <Fab variant='extended' size='small'>
          <NavigationOutline sx={{ marginRight: 1 }} />
          Navigate
        </Fab>
        <Fab variant='extended' size='medium'>
          <NavigationOutline sx={{ marginRight: 1 }} />
          Navigate
        </Fab>
        <Fab variant='extended' size='large'>
          <NavigationOutline sx={{ marginRight: 1 }} />
          Navigate
        </Fab>
      </div>
    </Fragment>
  )
}

export default ButtonsFabSizes
`}</code>
  </pre>
)
export const ButtonsOutlinedCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsOutlined: FC = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='outlined'>Primary</Button>
      <Button variant='outlined' color='secondary'>
        Secondary
      </Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='outlined' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsOutlined
`}</code>
  </pre>
)
