// ** MUI Imports
import Card from '@mui/material/Card'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CardAppBar = () => {
  return (
    <Card>
      <CardContent>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' sx={{ mr: 2.5 }} color='inherit' aria-label='menu'>
              <Icon icon='tabler:menu-2' />
            </IconButton>
            <Typography variant='h6' sx={{ flexGrow: 1, color: 'common.white' }}>
              News
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </CardContent>
    </Card>
  )
}

export default CardAppBar
