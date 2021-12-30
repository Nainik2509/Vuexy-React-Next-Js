// ** React Imports
import { FC, ReactNode, useEffect, useState } from 'react'

// ** Prop Type Imports
import PropTypes from 'prop-types'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Config Import
import authConfig from 'src/configs/auth'

// ** Hooks Import
import { useAuth } from '../../hooks/useAuth'

interface AuthGuardProps {
  ability: any
  pageProps: any
  children: ReactNode
}

export const AuthGuard: FC<AuthGuardProps> = props => {
  const { ability, pageProps, children } = props
  const auth = useAuth()
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }

      const handleRouteChangeStart = () => {
        setAuthorized(false)
      }
      const handleRouteChangeEnd = () => {
        setAuthorized(true)
      }
      router.events.on('routeChangeStart', handleRouteChangeStart)
      router.events.on('routeChangeComplete', handleRouteChangeEnd)

      authCheck(pageProps)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady, router.asPath]
  )

  function authCheck(pageProps) {
    if (auth && !auth.user && !auth.loading && !pageProps.restrictedPage) {
      router.push({
        pathname: authConfig.redirectURL(null),
        query: { returnUrl: router.asPath }
      })
    } else if (auth && auth.user && pageProps.restrictedPage) {
      router.push(authConfig.redirectURL(auth.user.role))
    } else if (auth && auth.user && !ability.can(pageProps.action, pageProps.subject)) {
      router.replace('/not-authorized')
    } else {
      setAuthorized(true)
    }
  }

  if (!authorized || auth.loading) {
    return 'Loading...'
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return <>{children}</>
}

AuthGuard.propTypes = {
  children: PropTypes.node
}
