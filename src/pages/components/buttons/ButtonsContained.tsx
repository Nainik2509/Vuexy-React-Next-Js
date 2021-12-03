// ** React Imports
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
