





const CanViewNavGroup = props => {
  // ** Props
  const { children } = props

  
  

  

  return navGroup && canViewMenuGroup(navGroup) ? <>{children}</> : null
}

export default CanViewNavGroup
