// ** React Import
import { FC, ReactNode, useState } from 'react'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Type Import
import { Settings } from '@core/context/settingsContext'
import { VerticalNavItemsType } from '@core/layouts/types'

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
}

const Navigation: FC<Props> = (props: Props) => {
  // ** States
  const [groupActive, setGroupActive] = useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([])

  return (
    <Drawer {...props}>
      <VerticalNavHeader {...props} />
      <PerfectScrollbar options={{ wheelPropagation: false }}>
        <VerticalNavItems
          groupActive={groupActive}
          setGroupActive={setGroupActive}
          currentActiveGroup={currentActiveGroup}
          setCurrentActiveGroup={setCurrentActiveGroup}
          {...props}
        />
      </PerfectScrollbar>
    </Drawer>
  )
}

export default Navigation
