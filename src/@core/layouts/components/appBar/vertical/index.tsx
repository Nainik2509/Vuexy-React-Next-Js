// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

// ** Theme Config Import
import themeConfig from 'configs/themeConfig'

// ** Type Imports
import { AppBar, ContentWidth } from '@core/layouts/types'

interface Props {
  hidden: boolean
  position?: AppBar
  contentWidth: ContentWidth
  setShowBackdrop: (val: boolean) => void
}

const AppBar = styled(MuiAppBar)<AppBarProps>({
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: themeConfig.appBarHeight,
  transition: 'background-color .25s ease, box-shadow .25s ease'
})

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

const LayoutAppBar: FC<Props> = (props: Props) => {
  // ** Props
  const { hidden, position, contentWidth, setShowBackdrop } = props

  return (
    <AppBar
      elevation={3}
      color='default'
      position={position === 'fixed' ? 'sticky' : 'static'}
      sx={{
        ...(position === 'static' && { boxShadow: 'none', backgroundColor: 'transparent' }),
        ...(position === 'fixed' && { backgroundColor: theme => theme.palette.background.paper })
      }}
    >
      <Toolbar sx={{ ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }) }}>
        abc
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
