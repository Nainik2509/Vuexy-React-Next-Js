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

// Types for Faq Page
export type FaqQAndAType = {
  id: string
  answer: string
  question: string
}
export type FaqType = {
  id: string
  icon: string
  title: string
  subtitle: string
  qAndA: FaqQAndAType[]
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
  routeMeta?: {
    action: string
    resource: string
    canVisit: string[]
  }
  avatar?: string | null
  ability: UserAbilityType[]
}
