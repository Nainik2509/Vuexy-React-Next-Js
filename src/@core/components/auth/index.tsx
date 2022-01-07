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
    if (auth.user === null && !pageProps.restrictedPage && !window.localStorage.getItem('userData')) {
      router.replace({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      })
    }

    if (auth.user !== null && pageProps.restrictedPage) {
      router.replace(router.asPath)
    }
  }, [router.route])

  return <>{children}</>
}

AuthGuard.propTypes = {
  children: PropTypes.node
}
