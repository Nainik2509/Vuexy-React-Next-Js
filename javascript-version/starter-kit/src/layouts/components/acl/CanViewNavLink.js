





const CanViewNavLink = props => {
  // ** Props
  const { children } = props

  
  

  return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
}

export default CanViewNavLink
