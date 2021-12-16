/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param activeItem
 */
export const hasActiveChild = (item: any, currentUrl: string): boolean => {
  const { children } = item

  if (!children) {
    return false
  }

  for (const child of children) {
    if (child.children) {
      if (hasActiveChild(child, currentUrl)) {
        return true
      }
    }

    // Check if the child has a link and is active
    if (child && child.path && currentUrl && (child.path === currentUrl || currentUrl.includes(child.path))) {
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
export const removeChildren = (children: any, openGroup: string[], currentActiveGroup: string[]) => {
  children.forEach((child: any) => {
    if (!currentActiveGroup.includes(child.title)) {
      const index = openGroup.indexOf(child.title)
      if (index > -1) openGroup.splice(index, 1)
      if (child.children) removeChildren(child.children, openGroup, currentActiveGroup)
    }
  })
}
