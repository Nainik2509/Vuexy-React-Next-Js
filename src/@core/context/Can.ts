// ** Imports createContext function
import { createContext } from 'react'

// ** Imports createContextualCan function
import { createContextualCan } from '@casl/react'

// ** Import Ability
import { AppAbility } from 'src/configs/acl/ability'

// ** Create Context
export const AbilityContext = createContext<AppAbility>(undefined!)

// ** Init Can Context
const Can = createContextualCan(AbilityContext.Consumer)

export default Can
