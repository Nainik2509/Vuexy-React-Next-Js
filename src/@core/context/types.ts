export type LoginParams = {
  email: string
  password: string
}

export type RegisterParams = LoginParams & {
  email: string
  username: string
  password: string
}

export type AuthProvider = {
  login: (params: LoginParams) => Promise<void>
  register: (params: RegisterParams) => Promise<void>
  logout: () => Promise<void>
}

export type ErrCallbackType = (err: { [key: string]: string }) => void
