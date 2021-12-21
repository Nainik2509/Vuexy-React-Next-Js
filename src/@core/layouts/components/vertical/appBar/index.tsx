// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Component Import
import AppBarContent from './AppBarContent'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  setShowBackdrop: (val: boolean) => void
  saveSettings: (values: Settings) => void
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
  minHeight: `${themeConfig.appBarHeight}px !important`,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const LayoutAppBar = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, setShowBackdrop, toggleNavVisibility } = props

  if (settings.appBar === 'hidden') {
    return null
  }

  return (
    <AppBar
      elevation={3}
      color='default'
      className='layout-navbar'
      position={settings.appBar === 'fixed' ? 'sticky' : 'static'}
      sx={{
        ...(settings.appBar === 'static' && { boxShadow: 'none', backgroundColor: 'transparent' }),
        ...(settings.appBar === 'fixed' && { backgroundColor: theme => theme.palette.background.paper })
      }}
    >
      <Toolbar sx={{ ...(settings.contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }) }}>
        <AppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          setShowBackdrop={setShowBackdrop}
          toggleNavVisibility={toggleNavVisibility}
        />
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
