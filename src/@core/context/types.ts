export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
}

export type RegisterParams = {
  email: string
  username: string
  password: string
}

export type UserAbilityType = {
  action: string
  subject: string
}

export type UserDataType = {
  id: number
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
  role: 'admin' | 'client'
  ability: UserAbilityType[]
}

export type AuthValuesType = {
  logout: () => void
  isInitialized: boolean
  user: UserDataType | null
  setUser: (value: UserDataType | null) => void
  setIsInitialized: (value: boolean) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}
