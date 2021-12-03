// ** React Imports
import { FC, MouseEvent } from 'react'

// ** MUI Imports
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const OutsideBreadcrumb: FC = () => {
  const handleClick = (event: MouseEvent<any>) => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link color='inherit' href='/' onClick={handleClick}>
        MUI
      </Link>
      <Link color='inherit' href='/' onClick={handleClick}>
        Core
      </Link>
      <Typography color='textPrimary'>Breadcrumb</Typography>
    </Breadcrumbs>
  )
}

export default OutsideBreadcrumb
