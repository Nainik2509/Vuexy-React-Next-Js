// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Configs Import
import themeConfig from 'configs/themeConfig'

// ** Hooks
import { useSettings } from '@core/hooks/useSettings'

// ** Types
import { RootState } from 'redux/store'
import { MailLabelColors } from './types'

// ** Email App Component Imports
import MailLog from './MailLog'
import SidebarLeft from './SidebarLeft'
import ComposePopup from './ComposePopup'

// ** Actions
import {
  fetchMails,
  updateMail,
  paginateMail,
  getCurrentMail,
  updateMailLabel,
  handleSelectMail,
  handleSelectAllMail
} from './store'

// ** Variables
const labelColors: MailLabelColors = {
  private: 'error',
  personal: 'success',
  company: 'primary',
  important: 'warning'
}

const EmailApp = () => {
  // ** States
  const [query, setQuery] = useState<string>('')
  const [composeOpen, setComposeOpen] = useState<boolean>(false)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const router = useRouter()
  const dispatch = useDispatch()
  const { settings } = useSettings()
  const lgAbove = useMediaQuery(theme.breakpoints.up('lg'))
  const mdAbove = useMediaQuery(theme.breakpoints.up('md'))
  const smAbove = useMediaQuery(theme.breakpoints.up('sm'))
  const store = useSelector((state: RootState) => state.email)

  // ** Vars
  const params = router.query
  const direction = settings.direction

  // ** Vars
  const leftSidebarWidth = 260
  const composePopupWidth = mdAbove ? 754 : smAbove ? 520 : '100%' //eslint-disable-line

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMails({ q: query || '', folder: params.folder || 'inbox', label: params.label || '' }))
  }, []) //eslint-disable-line

  const toggleComposeOpen = () => setComposeOpen(!composeOpen)
  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)

  const calculateAppHeight = () => {
    return `(${themeConfig.appBarHeight + 56}px + ${theme.spacing(6)} * 2)`
  }

  return (
    <Box
      sx={{
        boxShadow: 6,
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        height: `calc(100vh - ${calculateAppHeight()})`
      }}
    >
      <SidebarLeft
        store={store}
        lgAbove={lgAbove}
        dispatch={dispatch}
        leftSidebarOpen={leftSidebarOpen}
        leftSidebarWidth={leftSidebarWidth}
        toggleComposeOpen={toggleComposeOpen}
        handleSelectAllMail={handleSelectAllMail}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
      />
      <MailLog
        query={query}
        store={store}
        lgAbove={lgAbove}
        dispatch={dispatch}
        setQuery={setQuery}
        routeParams={params}
        direction={direction}
        updateMail={updateMail}
        labelColors={labelColors}
        paginateMail={paginateMail}
        getCurrentMail={getCurrentMail}
        updateMailLabel={updateMailLabel}
        handleSelectMail={handleSelectMail}
        handleSelectAllMail={handleSelectAllMail}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
      />
      <ComposePopup
        mdAbove={mdAbove}
        composeOpen={composeOpen}
        composePopupWidth={composePopupWidth}
        toggleComposeOpen={toggleComposeOpen}
      />
    </Box>
  )
}

export default EmailApp
