// ** React Imports
import { useContext } from 'react'

// ** Types Import
import { NavLink, NavGroup } from 'src/@core/layouts/types'

// ** Context
import { AbilityContext } from 'src/@core/context/Can'

const useCanViewNav = () => {
  const ability = useContext(AbilityContext)

  const canViewNavGroup = (item: NavGroup | NavLink) => {
    // ! This same logic is used in canViewHorizontalNavMenuGroup and canViewHorizontalNavMenuHeaderGroup. So make sure to update logic in them as well
    const hasAnyVisibleChild =
      (item as NavGroup).children && (item as NavGroup).children.some((i: NavLink) => ability.can(i.action, i.subject))

    // ** If subject and action is defined in item => Return based on children visibility (Hide group if no child is visible)
    // ** Else check for ability using provided subject and action along with checking if has any visible child
    if (!((item as NavLink).action && (item as NavLink).subject)) {
      return hasAnyVisibleChild
    }

    return ability.can((item as NavLink).action, (item as NavLink).subject) && hasAnyVisibleChild
  }

  const canViewNavItem = (item: NavLink) => {
    return ability.can(item.action, item.subject)
  }

  return { canViewNavGroup, canViewNavItem }
}
export default useCanViewNav
