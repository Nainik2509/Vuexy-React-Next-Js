export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
}

export type RegisterParams = LoginParams & {
  email: string
  username: string
  password: string
}

export type AuthValuesType = {
  user: any
  logout: () => void
  isInitialized: boolean
  isAuthenticated: boolean
  setUser: (value: any) => void
  setIsInitialized: (value: boolean) => void
  setIsAuthenticated: (value: boolean) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}
