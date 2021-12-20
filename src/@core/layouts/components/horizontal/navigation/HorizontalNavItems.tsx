// ** React Imports
import { FC } from 'react'

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
  const RenderMenuItems = props.horizontalNavItems?.map((item: NavGroup | NavLink, index: number) => {
    const TagName: any = resolveComponent(item)

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default HorizontalNavItems
