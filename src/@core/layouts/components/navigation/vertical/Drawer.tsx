// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

interface Props {
  hidden: boolean
  navWidth: number
  collapsedNavWidth: number
}

const Drawer: FC<Props> = (props: Props) => {
  const { hidden, navWidth, collapsedNavWidth } = props

  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps: any = {
    variant: 'temporary',

    // onOpen: () => setNavVisible(true),
    // onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }

  // Drawer Props for Desktop screens
  const DesktopDrawerProps = {
    variant: 'permanent'

    // onMouseEnter: () => {
    //   setNavHover(true)
    // },
    // onMouseLeave: () => {
    //   setNavHover(false)
    // }
  }

  return (
    <SwipeableDrawer
      open={true}
      onOpen={() => null}
      onClose={() => null}
      className='layout-vertical-nav'
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      sx={{
        width: navWidth,
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
          width: navWidth,
          overflowX: 'hidden',
          transition: 'width .25s ease, box-shadow .25s ease'
        }
      }}
    >
      ABC
    </SwipeableDrawer>
  )
}

export default Drawer
