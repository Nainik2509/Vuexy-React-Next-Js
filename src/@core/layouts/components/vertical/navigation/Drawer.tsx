// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

// ** Type Import
import { Settings } from '@core/context/settingsContext'

interface Props {
  hidden: boolean
  navWidth: number
  settings: Settings
  navVisible: boolean
  collapsedNavWidth: number
  setNavVisible: (value: boolean) => void
  saveSettings: (values: Settings) => void
}

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: 'hidden',
  transition: 'width .25s ease',
  '& ul': {
    listStyle: 'none'
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease, box-shadow .25s ease'
  }
})

const Drawer: FC<Props> = (props: Props) => {
  const { hidden, navWidth, settings, navVisible, saveSettings, setNavVisible, collapsedNavWidth } = props

  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }

  // Drawer Props for Desktop screens
  const DesktopDrawerProps = {
    open: true

    // onMouseEnter: () => {
    //   setNavHover(true)
    // },
    // onMouseLeave: () => {
    //   setNavHover(false)
    // }
  }

  return (
    <SwipeableDrawer
      onOpen={() => null}
      onClose={() => null}
      className='layout-vertical-nav'
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      sx={{ width: settings.navCollapsed ? collapsedNavWidth : navWidth }}
      PaperProps={{ sx: { width: settings.navCollapsed ? collapsedNavWidth : navWidth } }}
    >
      ABC
    </SwipeableDrawer>
  )
}

export default Drawer
