





const CanViewNavSectionTitle = props => {
  // ** Props
  const { children } = props

  
  

  return ability && ability.can(navTitle?.action, navTitle?.subject) ? <>{children}</> : null
}

export default CanViewNavSectionTitle
