// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const BadgesDot: FC = () => {
  return (
    <div className='demo-space-x'>
      <Badge variant='dot' color='primary'>
        <Avatar src='/assets/images/avatars/2.png' alt='User Avatar' />
      </Badge>
      <Badge variant='dot' color='secondary'>
        <Avatar src='/assets/images/avatars/2.png' alt='User Avatar' />
      </Badge>
      <Badge variant='dot' color='error'>
        <Typography>Typography</Typography>
      </Badge>
    </div>
  )
}

export default BadgesDot
