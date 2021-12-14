// ** Types
import { Dispatch } from 'redux'

// ** Theme Type Import
import { ThemeColor } from '@core/layouts/types'

export type CalendarFiltersType = 'Personal' | 'Business' | 'Family' | 'Holiday' | 'ETC'

export type CalendarColors = {
  ETC: ThemeColor
  Family: ThemeColor
  Holiday: ThemeColor
  Personal: ThemeColor
  Business: ThemeColor
}

export type EventType = {
  id: number
  url: string
  title: string
  allDay: boolean
  end: Date | string
  start: Date | string
  extendedProps: {
    guests?: string[]
    description?: string
    location?: string
    calendar?: string
  }
}

export type AddEventType = {
  url: string
  title: string
  display: string
  allDay: boolean
  end: Date | string
  start: Date | string
  extendedProps: {
    calendar: string
    guests: string[] | undefined
    description: string | undefined
  }
}

export type EventStateType = {
  url: string
  title: string
  allDay: boolean
  guests: string[]
  description: string
  endDate: Date | string
  startDate: Date | string
  calendar: CalendarFiltersType | string
}

export type CalendarStoreType = {
  events: EventType[]
  selectedEvent: null | EventType
  selectedCalendars: CalendarFiltersType[]
}

export type CalendarType = {
  calendarApi: any
  dispatch: Dispatch<any>
  store: CalendarStoreType
  direction: 'ltr' | 'rtl'
  calendarsColor: CalendarColors
  setCalendarApi: (val: any) => void
  handleLeftSidebarToggle: () => void
  updateEvent: (event: EventType) => void
  handleAddEventSidebarToggle: () => void
  handleSelectEvent: (event: EventType) => void
}

export type SidebarLeftType = {
  mdAbove: boolean
  dispatch: Dispatch<any>
  leftSidebarWidth: number
  leftSidebarOpen: boolean
  store: CalendarStoreType
  calendarsColor: CalendarColors
  handleLeftSidebarToggle: () => void
  handleAddEventSidebarToggle: () => void
  handleAllCalendars: (val: boolean) => void
  handleSelectEvent: (event: null | EventType) => void
  handleCalendarsUpdate: (val: CalendarFiltersType) => void
}

export type AddEventSidebarType = {
  calendarApi: any
  drawerWidth: number
  dispatch: Dispatch<any>
  store: CalendarStoreType
  addEventSidebarOpen: boolean
  deleteEvent: (id: number) => void
  addEvent: (event: AddEventType) => void
  updateEvent: (event: EventType) => void
  handleAddEventSidebarToggle: () => void
  handleSelectEvent: (event: null | EventType) => void
}
