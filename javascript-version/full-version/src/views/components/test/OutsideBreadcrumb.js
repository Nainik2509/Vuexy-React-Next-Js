// ** MUI Imports
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const OutsideBreadcrumb = () => {
  const handleClick = event => {
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
