import { createContext } from 'react'
import { AppAbility } from 'src/configs/acl'
import { createContextualCan } from '@casl/react'

export const AbilityContext = createContext<AppAbility>(undefined!)

export default createContextualCan(AbilityContext.Consumer)
