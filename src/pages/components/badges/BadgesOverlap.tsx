// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

// Styled component for the wrapper
const Wrapper = styled('div')(({ theme }) => ({
  '& > *': {
    marginRight: `${theme.spacing(6)} !important`
  }
}))

const BadgesOverlap: FC = () => {
  return (
    <Wrapper className='demo-space-x'>
      <Badge color='primary' badgeContent=' '>
        <Avatar src='/assets/images/avatars/7.png' alt='User Avatar' variant='square' />
      </Badge>
      <Badge color='primary' variant='dot'>
        <Avatar src='/assets/images/avatars/7.png' alt='User Avatar' variant='square' />
      </Badge>
      <Badge color='primary' overlap='circular' badgeContent=' '>
        <Avatar src='/assets/images/avatars/7.png' alt='User Avatar' />
      </Badge>
      <Badge color='primary' overlap='circular' variant='dot'>
        <Avatar src='/assets/images/avatars/7.png' alt='User Avatar' />
      </Badge>
    </Wrapper>
  )
}

export default BadgesOverlap
