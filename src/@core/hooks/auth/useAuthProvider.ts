// ** React Imports
import { useContext } from 'react'

// ** Types & Provider
import { Auth } from '@core/context/AuthContext'
import { AuthProvider } from '@core/context/types'

/**
 * Get the authProvider stored in the context
 */
const useAuthProvider = (): AuthProvider => useContext(Auth)

export default useAuthProvider
