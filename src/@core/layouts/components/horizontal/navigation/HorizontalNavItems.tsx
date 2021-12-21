// ** React Imports
import { FC } from 'react'

// ** Hooks
import useCanViewNav from '@core/hooks/useCanViewNav'

// ** Types
import { HorizontalNavItemsType, NavGroup, NavLink } from 'src/@core/layouts/types'

// ** Custom Navigation Components
import HorizontalNavLink from './HorizontalNavLink'
import HorizontalNavGroup from './HorizontalNavGroup'

interface Props {
  parentId?: string
  openNav?: string[]
  hasParent?: boolean
  setOpenNav?: (value: string[]) => void
  horizontalNavItems?: HorizontalNavItemsType
  handleGroupMouseLeave?: (value: string) => void
  handleGroupMouseEnter?: (value: string) => void
}
const resolveComponent = (item: NavGroup | NavLink) => {
  if ((item as NavGroup).children) return HorizontalNavGroup

  return HorizontalNavLink
}

const HorizontalNavItems: FC<Props> = props => {
  // ** Hooks
  const { canViewNavGroup, canViewNavItem } = useCanViewNav()

  const RenderMenuItems = props.horizontalNavItems?.map((item: NavGroup | NavLink, index: number) => {
    const TagName: any = resolveComponent(item)
    if ((item as NavGroup).children) {
      return canViewNavGroup(item as NavGroup) && <TagName {...props} key={index} item={item} />
    }

    return canViewNavItem(item as NavLink) && <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default HorizontalNavItems
