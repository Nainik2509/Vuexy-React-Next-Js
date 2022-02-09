// ** React Imports
import { ReactNode, useContext } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/Can'

// ** Config Import
import { NotAuthPagePath } from 'src/configs/acl'

// ** Types
import type { ACLObj } from 'src/configs/acl'

interface AclGuardProps {
  children: ReactNode
  guestGuard: boolean
  aclAbilities: ACLObj | undefined
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { aclAbilities, children, guestGuard } = props

  // ** Hooks
  const router = useRouter()
  const ability = useContext(AbilityContext)

  if (ability) {
    if (aclAbilities) {
      if (ability && ability.can(aclAbilities.action, aclAbilities.subject)) {
        return <>{children}</>
      }
    } else {
      const hasManageAll = ability.rules.some(r => r.subject === 'all')
      if (!hasManageAll && router.asPath !== NotAuthPagePath && !guestGuard) {
        router.replace(NotAuthPagePath)
      }

      return <>{children}</>
    }
  } else {
    if (router.asPath !== NotAuthPagePath && !guestGuard) {
      router.replace(NotAuthPagePath)
    }

    return <>{children}</>
  }
}

export default AclGuard
