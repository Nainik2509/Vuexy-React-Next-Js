// ** React Imports
import { useState, useEffect } from 'react'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Configs Import
import themeConfig from 'src/configs/themeConfig'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Types
import { RootState } from 'src/store'
import { MailLayoutType, MailLabelColors } from 'src/types/apps/emailTypes'

// ** Email App Component Imports
import MailLog from 'src/views/apps/email/MailLog'
import SidebarLeft from 'src/views/apps/email/SidebarLeft'
import ComposePopup from 'src/views/apps/email/ComposePopup'

// ** Actions
import {
  fetchMails,
  updateMail,
  paginateMail,
  getCurrentMail,
  updateMailLabel,
  handleSelectMail,
  handleSelectAllMail
} from 'src/store/apps/email'

// ** Variables
const labelColors: MailLabelColors = {
  private: 'error',
  personal: 'success',
  company: 'primary',
  important: 'warning'
}

const EmailAppLayout = ({ folder, label }: MailLayoutType) => {
  // ** States
  const [query, setQuery] = useState<string>('')
  const [composeOpen, setComposeOpen] = useState<boolean>(false)
  const [mailDetailsOpen, setMailDetailsOpen] = useState<boolean>(false)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const dispatch = useDispatch()
  const { settings } = useSettings()
  const lgAbove = useMediaQuery(theme.breakpoints.up('lg'))
  const mdAbove = useMediaQuery(theme.breakpoints.up('md'))
  const smAbove = useMediaQuery(theme.breakpoints.up('sm'))
  const store = useSelector((state: RootState) => state.email)

  // ** Vars
  const { skin, direction } = settings

  // ** Vars
  const leftSidebarWidth = 260
  const composePopupWidth = mdAbove ? 754 : smAbove ? 520 : '100%'
  const routeParams = {
    label: label || '',
    folder: folder || 'inbox'
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMails({ q: query || '', folder: routeParams.folder, label: routeParams.label }))
  }, [dispatch, query, routeParams.folder, routeParams.label])

  const toggleComposeOpen = () => setComposeOpen(!composeOpen)
  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)

  const calculateAppHeight = () => {
    return `(${themeConfig.appBarHeight + 56}px + ${theme.spacing(6)} * 2)`
  }

  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: 1,
        minHeight: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: skin === 'bordered' ? 0 : 6,
        height: `calc(100vh - ${calculateAppHeight()})`,
        ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` })
      }}
    >
      <SidebarLeft
        store={store}
        lgAbove={lgAbove}
        dispatch={dispatch}
        mailDetailsOpen={mailDetailsOpen}
        leftSidebarOpen={leftSidebarOpen}
        leftSidebarWidth={leftSidebarWidth}
        toggleComposeOpen={toggleComposeOpen}
        setMailDetailsOpen={setMailDetailsOpen}
        handleSelectAllMail={handleSelectAllMail}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
      />
      <MailLog
        query={query}
        store={store}
        lgAbove={lgAbove}
        dispatch={dispatch}
        setQuery={setQuery}
        direction={direction}
        updateMail={updateMail}
        routeParams={routeParams}
        labelColors={labelColors}
        paginateMail={paginateMail}
        getCurrentMail={getCurrentMail}
        updateMailLabel={updateMailLabel}
        mailDetailsOpen={mailDetailsOpen}
        handleSelectMail={handleSelectMail}
        setMailDetailsOpen={setMailDetailsOpen}
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

export default EmailAppLayout
