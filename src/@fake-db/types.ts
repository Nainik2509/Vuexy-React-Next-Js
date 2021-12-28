import { ThemeColor } from 'src/@core/layouts/types'

export type AppBarSearchPagesSection = {
  id: number
  url: string
  icon: string
  type: string
  title: string
}

export type AppBarSearchFilesSection = {
  id: number
  by: string
  img: string
  size: string
  type: string
  title: string
}

export type AppBarSearchContactsSection = {
  id: number
  img: string
  type: string
  time: string
  email: string
  title: string
}

export type AppBarSearchSortedData = {
  files: AppBarSearchFilesSection[]
  pages: AppBarSearchPagesSection[]
  contacts: AppBarSearchContactsSection[]
}

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
  id: string
  icon: string
  title: string
  subtitle: string
  qAndA: FaqQAndAType[]
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
  stats: string
  title: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}
export type CardStatsVerticalType = {
  icon: string
  stats: string
  title: string
  subtitle: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}
export type CardStatsCharacterType = {
  src: string
  stats: string
  title: string
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
