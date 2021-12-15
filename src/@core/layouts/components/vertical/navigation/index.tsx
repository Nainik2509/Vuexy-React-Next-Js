// ** React Import
import { FC, ReactNode, useState } from 'react'

// ** Type Import
import { Settings } from '@core/context/settingsContext'
import { NavLink, NavGroup, NavSectionTitle } from './types'

// ** Navigation Drawer Import
import Drawer from './Drawer'
import VerticalNavItems from './VerticalNavItems'

interface Props {
  hidden: boolean
  navWidth: number
  navHover: boolean
  settings: Settings
  children: ReactNode
  navVisible: boolean
  collapsedNavWidth: number
  navigationBorderWidth: number
  setNavHover: (values: boolean) => void
  setNavVisible: (value: boolean) => void
  saveSettings: (values: Settings) => void
  toggleNavVisibility: (values: boolean) => void
  navItems: (NavGroup | NavLink | NavSectionTitle)[]
}

const Navigation: FC<Props> = (props: Props) => {
  // ** States
  const [groupActive, setGroupActive] = useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([])

  return (
    <Drawer {...props}>
      <VerticalNavItems
        groupActive={groupActive}
        setGroupActive={setGroupActive}
        currentActiveGroup={currentActiveGroup}
        setCurrentActiveGroup={setCurrentActiveGroup}
        {...props}
      />
    </Drawer>
  )
}

export default Navigation
