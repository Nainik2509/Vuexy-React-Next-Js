// Type Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { OptionsMenuType } from 'src/@core/components/option-menu/types'

export type AppBarSearchType = {
  id: number
  url: string
  icon: string
  title: string
  category: string
}

export type AutocompleteType = {
  year: number
  title: string
}

// Types for Faq Page
export type FaqQAndAType = {
  id: string
  answer: string
  question: string
}
export type FaqType = {
  [key: string]: {
    id: string
    icon: string
    title: string
    subtitle: string
    qandA: FaqQAndAType[]
  }
}

// Types for Knowledge Base
export type KnowledgeBaseData = {
  desc: string
  title: string
  imgSrc: string
  imgWidth: number
  category: string
  imgHeight: number
}
export type KnowledgeBaseCategoryQuestion = {
  slug: string
  question: string
}
export type KnowledgeBaseCategoryData = {
  icon: string
  title: string
  iconColor?: ThemeColor
  questions: KnowledgeBaseCategoryQuestion[]
}
export type KnowledgeBaseType = {
  knowledgeBase: KnowledgeBaseData[]
  knowledgeBaseCategory: KnowledgeBaseCategoryData[]
}

// Types for Card Statistics Page
export type CardStatsHorizontalType = {
  icon: string
  title: string
  stats: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}
export type CardStatsVerticalType = {
  icon: string
  title: string
  stats: string
  subtitle: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
  optionsMenuProps?: OptionsMenuType
}
export type CardStatsCharacterType = {
  src: string
  title: string
  stats: string
  chipText: string
  trendNumber: string
  chipColor?: ThemeColor
  trend?: 'positive' | 'negative'
}
export type CardStatsType = {
  statsVertical: CardStatsVerticalType[]
  statsCharacter: CardStatsCharacterType[]
  statsHorizontal: CardStatsHorizontalType[]
}

export type DataGridRowType = {
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

export type ProjectTableRowType = {
  id: number
  name: string
  date: string
  status: number
  avatar: string
  leader: string
  avatarGroup: string[]
  avatarColor?: ThemeColor
}

export type ProfileHeaderType = {
  fullName: string
  location: string
  coverImg: string
  joiningDate: string
  designation: string
  profileImg: string
}
export type ProfileAvatarGroupType = {
  name: string
  avatar: string
}

export type ProfileChipType = {
  title: string
  color: ThemeColor
}

export type ProfileTabCommonType = {
  icon: string
  value: string
  property: string
}

export type ProfileTeamsType = ProfileTabCommonType & { color: ThemeColor }

export type ProfileConnectionsType = {
  name: string
  avatar: string
  isFriend: boolean
  connections: string
}

export type ProfileTeamsTechType = {
  title: string
  avatar: string
  members: number
  chipText: string
  ChipColor: ThemeColor
}

export type TeamsTabType = {
  extraMembers: number
  title: string
  avatar: string
  description: string
  chips: ProfileChipType[]
  avatarGroup: ProfileAvatarGroupType[]
}

export type ProjectsTabType = {
  hours: string
  tasks: string
  budget: string
  title: string
  client: string
  avatar: string
  members: string
  daysLeft: number
  comments: number
  deadline: string
  completed: string
  startDate: string
  budgetSpent: string
  description: string
  chipColor: ThemeColor
  avatarGroup: ProfileAvatarGroupType[]
}

export type ConnectionsTabType = {
  name: string
  tasks: string
  avatar: string
  projects: string
  connections: string
  designation: string
  isConnected: boolean
  chips: ProfileChipType[]
}

export type ProfileTabType = {
  about: ProfileTabCommonType[]
  contacts: ProfileTabCommonType[]
  teams: ProfileTeamsType[]
  overview: ProfileTabCommonType[]
  teamsTech: ProfileTeamsTechType[]
  connections: ProfileConnectionsType[]
}
