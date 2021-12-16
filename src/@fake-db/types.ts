export type AppBarSearchType = {
  id: number
  url?: string
  type: string
  img?: string
  icon?: string
  title: string
  by?: string
  size?: string
  email?: string
  time?: string
}

export type DataTableRowType = {
  id: number
  age: string
  post: string
  city: string
  email: string
  salary: number
  status: number
  avatar: string
  full_name: string
  start_date: string
  experience: string
}

export type UserAbilityType = {
  action: string
  subject: string
}

export type JwtDataType = {
  id: number
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
  ability: UserAbilityType[]
}
