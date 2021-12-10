// ** React Imports
import { FC } from 'react'

// ** Types
import { NavGroup, NavLink, NavSectionTitle } from './types'

// ** Custom Menu Components
import VerticalNavLink from './VerticalNavLink'
import VerticalNavGroup from './VerticalNavGroup'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'

// const Components = {
//   VerticalNavLink,
//   VerticalNavGroup,
//   VerticalNavSectionTitle
// }

const resolveNavItemComponent = (item: NavLink | NavGroup | NavSectionTitle) => {
  if ('sectionTitle' in item) return VerticalNavSectionTitle
  if ('children' in item) return VerticalNavGroup

  return VerticalNavLink
}

const VerticalNavItems: FC<Props> = (props: Props) => {
  const RenderMenuItems = props.items.map(item, index => {
    const TagName = resolveNavItemComponent(item)

    return <TagName key={index} item={item} {...props} />
  })

  return RenderMenuItems
}

export default VerticalNavItems
