// ** React Imports
import { ReactNode, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/@core/hooks/useAuth'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

interface GuestGuardProps {
  children: ReactNode
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (window.localStorage.getItem('userData')) {
      router.replace('/')
    }
  }, [router.route])

  if (auth.loading || (!auth.loading && auth.user !== null)) {
    return <Spinner />
  }

  return <>{children}</>
}

export default GuestGuard
