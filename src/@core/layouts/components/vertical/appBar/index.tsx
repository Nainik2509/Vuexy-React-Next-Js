// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  setShowBackdrop: (val: boolean) => void
  saveSettings: (values: Settings) => void
  verticalAppBarContent?: (props?: any) => ReactNode
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  minHeight: themeConfig.appBarHeight
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(0, 6)} !important`,
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(0, 4)} !important`
  }
}))

const LayoutAppBar = (props: Props) => {
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
          minHeight: `${themeConfig.appBarHeight - (skin === 'bordered' ? 1 : 0)}px !important`
        }}
      >
        {(userVerticalAppBarContent && userVerticalAppBarContent(props)) || null}
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
