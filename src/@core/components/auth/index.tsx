// ** React Imports
import { ReactNode, useEffect } from 'react'

// ** Prop Type Imports
import PropTypes from 'prop-types'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from '../../hooks/useAuth'

interface AuthGuardProps {
  pageProps: any
  children: ReactNode
}

export const AuthGuard = (props: AuthGuardProps) => {
  const { pageProps, children } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.user && !auth.loading && !pageProps.restrictedPage) {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      })
    }
  }, [])

  return <>{children}</>
}

AuthGuard.propTypes = {
  children: PropTypes.node
}
