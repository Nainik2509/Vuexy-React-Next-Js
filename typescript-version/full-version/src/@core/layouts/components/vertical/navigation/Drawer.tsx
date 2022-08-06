// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

interface Props {
  navWidth: number
  navHover: boolean
  navVisible: boolean
  collapsedNavWidth: number
  hidden: LayoutProps['hidden']
  settings: LayoutProps['settings']
  children: LayoutProps['children']
  setNavHover: (values: boolean) => void
  setNavVisible: (value: boolean) => void
  navMenuProps: LayoutProps['verticalLayoutProps']['navMenu']['componentProps']
}

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
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
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
  }
})

const Drawer = (props: Props) => {
  // ** Props
  const {
    hidden,
    children,
    navHover,
    navWidth,
    settings,
    navVisible,
    setNavHover,
    navMenuProps,
    setNavVisible,
    collapsedNavWidth
  } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { mode, navCollapsed } = settings

  const drawerColor = () => {
    if (mode === 'semi-dark') {
      return {
        '& .MuiTypography-root, & svg': {
          color: `rgba(${theme.palette.customColors.dark}, 0.87)`
        }
      }
    } else return {}
  }

  const drawerBgColor = () => {
    if (mode === 'semi-dark') {
      return {
        backgroundColor: theme.palette.customColors.darkBg
      }
    } else {
      return {
        backgroundColor: theme.palette.background.default
      }
    }
  }

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

  let userNavMenuStyle = {}
  let userNavMenuPaperStyle = {}
  if (navMenuProps && navMenuProps.sx) {
    userNavMenuStyle = navMenuProps.sx
  }
  if (navMenuProps && navMenuProps.PaperProps && navMenuProps.PaperProps.sx) {
    userNavMenuPaperStyle = navMenuProps.PaperProps.sx
  }
  const userNavMenuProps = Object.assign({}, navMenuProps)
  delete userNavMenuProps.sx
  delete userNavMenuProps.PaperProps

  return (
    <SwipeableDrawer
      className='layout-vertical-nav'
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{
        sx: {
          ...drawerColor(),
          ...drawerBgColor(),
          width: navCollapsed && !navHover ? collapsedNavWidth : navWidth,
          ...userNavMenuPaperStyle
        },
        ...navMenuProps?.PaperProps
      }}
      sx={{
        width: navCollapsed ? collapsedNavWidth : navWidth,
        ...userNavMenuStyle
      }}
      {...userNavMenuProps}
    >
      {children}
    </SwipeableDrawer>
  )
}

export default Drawer
