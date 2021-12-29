// ** React Import
import { ReactNode, useState } from 'react'

// ** MUI Import
import List from '@mui/material/List'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// ** Component Imports
import Drawer from './Drawer'
import VerticalNavItems from './VerticalNavItems'
import VerticalNavHeader from './VerticalNavHeader'

interface Props {
  hidden: boolean
  navWidth: number
  navHover: boolean
  settings: Settings
  children: ReactNode
  navVisible: boolean
  collapsedNavWidth: number
  navigationBorderWidth: number
  toggleNavVisibility: () => void
  setNavHover: (values: boolean) => void
  setNavVisible: (value: boolean) => void
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: Settings) => void
  verticalNavMenuContent?: (props?: any) => ReactNode
  afterVerticalNavMenuContent?: (props?: any) => ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

const Navigation = (props: Props) => {
  // ** Props
  const {
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent
  } = props

  // ** States
  const [groupActive, setGroupActive] = useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([])

  return (
    <Drawer {...props}>
      <VerticalNavHeader {...props} />
      <PerfectScrollbar options={{ wheelPropagation: false }}>
        {beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null}
        {userVerticalNavMenuContent ? (
          userVerticalNavMenuContent(props)
        ) : (
          <List sx={{ pt: 0 }} className='nav-items'>
            <VerticalNavItems
              groupActive={groupActive}
              setGroupActive={setGroupActive}
              currentActiveGroup={currentActiveGroup}
              setCurrentActiveGroup={setCurrentActiveGroup}
              {...props}
            />
          </List>
        )}
        {afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null}
      </PerfectScrollbar>
    </Drawer>
  )
}

export default Navigation
