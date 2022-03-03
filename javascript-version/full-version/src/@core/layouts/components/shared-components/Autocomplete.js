// ** React Imports
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ClickAway from '@mui/material/ClickAwayListener'
import InputAdornment from '@mui/material/InputAdornment'
import ListItemButton from '@mui/material/ListItemButton'
import MuiAutocomplete from '@mui/material/Autocomplete'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'

// ** Third Party Imports
import axios from 'axios'

// ** Configs Imports
import themeConfig from 'src/configs/themeConfig'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Custom Components Imports
import UserIcon from 'src/layouts/components/UserIcon'

// ** API Icon Import with object
import { autocompleteIconObj } from './autocompleteIconObj'

// ** Styled component for search in the appBar
const SearchBox = styled(Box)(({ theme }) => ({
  right: 0,
  top: '-100%',
  width: '100%',
  position: 'absolute',
  zIndex: theme.zIndex.appBar + 1,
  transition: 'top .25s ease-in-out',
  backgroundColor: theme.palette.background.paper
}))

// ** Styled Autocomplete component
const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  height: '100%',
  '& .MuiFormControl-root': {
    height: '100%',
    '& .MuiInputBase-root': {
      height: '100%',
      padding: theme.spacing(0, 5),
      '& fieldset': {
        border: 0
      }
    }
  },
  '& + .MuiAutocomplete-popper': {
    paddingTop: theme.spacing(2.5),
    '& .MuiAutocomplete-listbox': {
      paddingTop: 0,
      maxHeight: 'calc(100vh - 15rem)'
    },
    '& .MuiListSubheader-root': {
      fontWeight: 'normal',
      lineHeight: 'normal',
      textTransform: 'capitalize',
      padding: theme.spacing(5, 5, 2.5),
      color: theme.palette.text.secondary
    }
  }
}))

// ** Styled component for the images of files in search popup
const ImgFiles = styled('img')(({ theme }) => ({
  height: 24,
  marginRight: theme.spacing(2.5)
}))

const AutocompleteComponent = ({ hidden, setShowBackdrop }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [options, setOptions] = useState([])
  const [autocompleteKey, setAutocompleteKey] = useState(0)
  const [openSearchBox, setOpenSearchBox] = useState(false)
  const [openAutocompletePopup, setOpenAutocompletePopup] = useState(false)

  // ** Hooks & Vars
  const router = useRouter()
  const { settings } = useSettings()
  const { skin, layout, appBar } = settings
  const wrapper = useRef(null)
  const codes = { Slash: false, ControlLeft: false, ControlRight: false } // eslint-disable-line
  // Get all data using API
  useEffect(() => {
    axios
      .get('/app-bar/search', {
        params: { q: searchValue }
      })
      .then(response => {
        if (response.data && response.data.length) {
          setOptions(response.data)
        } else {
          setOptions([])
        }
      })
  }, [searchValue])
  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  // Handle ESC & shortcut keys keydown events
  const handleKeydown = useCallback(
    event => {
      // ** ESC key to close searchbox
      if (openSearchBox && event.keyCode === 27) {
        setOpenSearchBox(false)
      }

      // ** Shortcut keys to open searchbox (Ctrl + /)
      if (event.code === 'Slash') {
        codes.Slash = true
      }
      if (event.code === 'ControlLeft') {
        codes.ControlLeft = true
      }
      if (event.code === 'ControlRight') {
        codes.ControlRight = true
      }
      if (!openSearchBox && (codes.ControlLeft || codes.ControlRight) && codes.Slash) {
        setOpenSearchBox(true)
      }
    },
    [codes, openSearchBox]
  )

  // Handle shortcut keys keyup events
  const handleKeyUp = useCallback(
    event => {
      if (event.code === 'Slash') {
        codes.Slash = false
      }
      if (event.code === 'ControlLeft') {
        codes.ControlLeft = false
      }
      if (event.code === 'ControlRight') {
        codes.ControlRight = false
      }
    },
    [codes]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp, handleKeydown])

  // Handle all states
  const handleAllStates = value => {
    setSearchValue('')
    setShowBackdrop(value)
    setOpenSearchBox(value)
    setOpenAutocompletePopup(value)
  }

  // Handle input change on Autocomplete component
  const handleInputChange = value => {
    if (value.length) {
      setShowBackdrop(true)
      setOpenAutocompletePopup(true)
    } else {
      setShowBackdrop(false)
      setOpenAutocompletePopup(false)
    }
  }

  // Handle click event on a list item in search result
  const handleOptionClick = url => {
    setSearchValue('')
    handleAllStates(false)
    if (url) {
      router.push(url)
    }
  }

  // Handle option change on Autocomplete component
  const handleAutocompleteChange = (event, obj) => {
    setAutocompleteKey(autocompleteKey + 1)
    if (obj.url) {
      handleOptionClick(obj.url)
    }
  }

  // Render all options for the search
  const RenderOptions = option => {
    const { by, type, title, icon, img, size, email, time } = option
    if (type === 'pages') {
      const IconTag = autocompleteIconObj[icon] || themeConfig.navSubItemIcon

      return (
        <Fragment>
          <UserIcon icon={IconTag} componentType='search' iconProps={{ fontSize: 'small', sx: { mr: 2.5 } }} />
          <Typography sx={{ fontSize: '0.875rem' }}>{title}</Typography>
        </Fragment>
      )
    } else if (type === 'files') {
      return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ImgFiles src={img} alt={title} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '0.875rem' }}>{title}</Typography>
              <Typography variant='caption' sx={{ mt: 0.75, lineHeight: 1.5 }}>
                {by}
              </Typography>
            </Box>
          </Box>
          <Typography variant='caption'>{size}</Typography>
        </Box>
      )
    } else if (type === 'contacts') {
      return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={img} alt={title} sx={{ mr: 2.5, width: 35, height: 35 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '0.875rem' }}>{title}</Typography>
              <Typography variant='caption' sx={{ mt: 0.75, lineHeight: 1.5 }}>
                {email}
              </Typography>
            </Box>
          </Box>
          <Typography variant='caption'>{time}</Typography>
        </Box>
      )
    } else {
      return null
    }
  }
  if (!isMounted) {
    return null
  } else {
    return (
      <ClickAway onClickAway={() => handleAllStates(false)}>
        <Box ref={wrapper}>
          <IconButton
            color='inherit'
            onClick={() => setOpenSearchBox(true)}
            sx={!hidden && layout === 'vertical' ? { ml: -2.75 } : {}}
          >
            <Magnify />
          </IconButton>

          <SearchBox
            sx={{
              ...(openSearchBox ? { top: 0 } : {}),
              height: theme =>
                theme.mixins.toolbar.minHeight - (layout === 'horizontal' || skin === 'bordered' ? 1 : 0),
              ...(layout === 'vertical' && appBar === 'static'
                ? {
                    right: theme => theme.spacing(6),
                    width: theme => `calc(100% - ${theme.spacing(6 * 2)})`,
                    borderBottomLeftRadius: theme => theme.shape.borderRadius,
                    borderBottomRightRadius: theme => theme.shape.borderRadius
                  }
                : {})
            }}
          >
            <Autocomplete
              autoHighlight
              disablePortal
              options={options}
              id='appBar-search'
              key={autocompleteKey}
              open={openAutocompletePopup}
              noOptionsText='No results found!'
              onChange={handleAutocompleteChange}
              onClose={() => handleAllStates(false)}
              groupBy={option => option.type}
              getOptionLabel={option => option.title}
              onInputChange={(event, value) => handleInputChange(value)}
              sx={{
                ...(layout === 'horizontal'
                  ? { '& + .MuiAutocomplete-popper .MuiPaper-root': { boxShadow: theme => theme.shadows[5] } }
                  : {}),
                ...(layout === 'vertical' && appBar === 'static'
                  ? {}
                  : {
                      '& + .MuiAutocomplete-popper': {
                        width: theme => `calc(100% - ${theme.spacing(6 * 2)}) !important`
                      }
                    })
              }}
              renderOption={(props, option) => (
                <ListItem
                  {...props}
                  sx={{ p: '0 !important' }}
                  key={option.title}
                  onClick={() => (option.url ? handleOptionClick(option.url) : handleOptionClick())}
                >
                  <ListItemButton sx={{ padding: theme => theme.spacing(2.5, 5) }}>
                    {RenderOptions(option)}
                  </ListItemButton>
                </ListItem>
              )}
              renderInput={params => {
                const scrollPosition = document.documentElement.scrollTop

                return (
                  <TextField
                    {...params}
                    {...(appBar === 'fixed' ? { onFocus: () => window.scrollTo(0, scrollPosition) } : {})}
                    onChange={event => setSearchValue(event.target.value)}
                    inputRef={input => {
                      if (input) {
                        if (openSearchBox) {
                          input.focus()
                        } else {
                          input.blur()
                        }
                      }
                    }}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position='start' sx={{ color: 'text.primary' }}>
                          <Magnify />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position='end'
                          onClick={() => handleAllStates(false)}
                          sx={{ cursor: 'pointer', color: 'text.primary' }}
                        >
                          <Close fontSize='small' />
                        </InputAdornment>
                      )
                    }}
                  />
                )
              }}
            />
          </SearchBox>
        </Box>
      </ClickAway>
    )
  }
}

export default AutocompleteComponent
