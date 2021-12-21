// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  hidden: boolean
  navWidth: number
  navHover: boolean
  settings: Settings
  navVisible: boolean
  children: ReactNode
  collapsedNavWidth: number
  setNavHover: (values: boolean) => void
  setNavVisible: (value: boolean) => void
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

const Drawer = (props: Props) => {
  // ** Props
  const { hidden, children, navHover, navWidth, settings, navVisible, setNavHover, setNavVisible, collapsedNavWidth } =
    props

  // ** Var
  const { navCollapsed } = settings

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
    open: true,
    onOpen: () => null,
    onClose: () => null,
    onMouseEnter: () => {
      setNavHover(true)
    },
    onMouseLeave: () => {
      setNavHover(false)
    }
  }

  return (
    <SwipeableDrawer
      className='layout-vertical-nav'
      variant={hidden ? 'temporary' : 'permanent'}
      sx={{ width: navCollapsed ? collapsedNavWidth : navWidth }}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{ sx: { width: navCollapsed && !navHover ? collapsedNavWidth : navWidth } }}
    >
      {children}
    </SwipeableDrawer>
  )
}

export default Drawer
