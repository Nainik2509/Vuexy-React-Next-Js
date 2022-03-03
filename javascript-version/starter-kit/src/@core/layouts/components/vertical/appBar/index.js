// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MuiToolbar from '@mui/material/Toolbar'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight
}))

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(0, 6)} !important`,
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(0, 4)} !important`
  }
}))

const LayoutAppBar = props => {
  // ** Props
  const { settings, verticalAppBarContent: userVerticalAppBarContent } = props

  // ** Vars
  const { skin, appBar, contentWidth } = settings
  if (appBar === 'hidden') {
    return null
  }

  return (
    <AppBar
      color='default'
      className='layout-navbar'
      elevation={skin === 'bordered' ? 0 : 3}
      position={appBar === 'fixed' ? 'sticky' : 'static'}
      sx={{
        ...(appBar === 'static' && { boxShadow: 'none', backgroundColor: 'transparent' }),
        ...(appBar === 'fixed' && { backgroundColor: theme => theme.palette.background.paper }),
        ...(skin === 'bordered' && { borderBottom: theme => `1px solid ${theme.palette.divider}` })
      }}
    >
      <Toolbar
        className='navbar-content-container'
        sx={{
          ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
          minHeight: theme => `${theme.mixins.toolbar.minHeight - (skin === 'bordered' ? 1 : 0)}px !important`
        }}
      >
        {(userVerticalAppBarContent && userVerticalAppBarContent(props)) || null}
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
