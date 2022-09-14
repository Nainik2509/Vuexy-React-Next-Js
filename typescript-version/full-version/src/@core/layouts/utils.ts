// ** Types
import { NavGroup, NavLink } from 'src/@core/layouts/types'
import { NextRouter } from 'next/router'

/**
 * Remove queries from URL and then check with the item path
 *
 * @param item
 * @param router
 */
export const pathWithoutParams = (router: NextRouter, item: NavLink) => {
  if (item.meta && item.meta.activeLink) {
    if (router.asPath.includes(Object.keys(router.query)[0])) {
      return router.asPath.split('/' + Object.keys(router.query)[0])[0] === item.meta.activeLink
    } else {
      return router.asPath.split('/' + router.query[Object.keys(router.query)[0]])[0] === item.meta.activeLink
    }
  }

  return false
}

/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentURL
 */
export const hasActiveChild = (item: NavGroup, currentURL: string): boolean => {
  const { children } = item

  if (!children) {
    return false
  }

  for (const child of children) {
    if ((child as NavGroup).children) {
      if (hasActiveChild(child, currentURL)) {
        return true
      }
    }
    const childPath = (child as NavLink).path

    // Check if the child has a link and is active
    if (
      child &&
      childPath &&
      currentURL &&
      (childPath === currentURL || (currentURL.includes(childPath) && childPath !== '/'))
    ) {
      return true
    }
  }

  return false
}

/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */
export const removeChildren = (children: NavLink[], openGroup: string[], currentActiveGroup: string[]) => {
  children.forEach((child: NavLink) => {
    if (!currentActiveGroup.includes(child.title)) {
      const index = openGroup.indexOf(child.title)
      if (index > -1) openGroup.splice(index, 1)

      // @ts-ignore
      if (child.children) removeChildren(child.children, openGroup, currentActiveGroup)
    }
  })
}
