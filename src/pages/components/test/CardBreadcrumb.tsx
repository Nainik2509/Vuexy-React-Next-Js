// ** React Imports
import { MouseEvent } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const CardBreadcrumb = () => {
  const handleClick = (event: MouseEvent<any>) => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  return (
    <Card>
      <CardContent>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/' onClick={handleClick}>
            MUI
          </Link>
          <Link color='inherit' href='/' onClick={handleClick}>
            Core
          </Link>
          <Typography color='textPrimary'>Breadcrumb</Typography>
        </Breadcrumbs>
      </CardContent>
    </Card>
  )
}

export default CardBreadcrumb
