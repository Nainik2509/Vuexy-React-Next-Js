// ** React Imports
import { FC } from 'react'

// ** Types Import
import { Settings } from 'src/@core/context/settingsContext'
import { NavLink, NavGroup, NavSectionTitle, VerticalNavItemsType } from 'src/@core/layouts/types'

// ** Hooks
import useCanViewNav from 'src/@core/hooks/useCanViewNav'

// ** Custom Menu Components
import VerticalNavLink from './VerticalNavLink'
import VerticalNavGroup from './VerticalNavGroup'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'

interface Props {
  parent?: NavGroup
  navHover?: boolean
  settings: Settings
  navVisible?: boolean
  groupActive: string[]
  isSubToSub?: NavGroup
  currentActiveGroup: string[]
  navigationBorderWidth: number
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: Settings) => void
  setGroupActive: (value: string[]) => void
  setCurrentActiveGroup: (item: string[]) => void
}

const resolveNavItemComponent = (item: NavGroup | NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle
  if ((item as NavGroup).children) return VerticalNavGroup

  return VerticalNavLink
}

const VerticalNavItems: FC<Props> = (props: Props) => {
  // ** Props
  const { verticalNavItems } = props

  // ** Hooks
  const { canViewNavGroup, canViewNavItem } = useCanViewNav()

  const RenderMenuItems = verticalNavItems?.map((item: NavGroup | NavLink | NavSectionTitle, index: number) => {
    const TagName: any = resolveNavItemComponent(item)
    if ((item as NavGroup).children) {
      return canViewNavGroup(item as NavGroup) && <TagName {...props} key={index} item={item} />
    }

    return canViewNavItem(item as NavLink) && <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
