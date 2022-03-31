// ** React Imports
import { useEffect, useCallback, useRef, useState, ChangeEvent } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import MuiDialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiAutocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'
import SearchWeb from 'mdi-material-ui/SearchWeb'
import CardOutline from 'mdi-material-ui/CardOutline'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import ArrowLeftBottom from 'mdi-material-ui/ArrowLeftBottom'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import FileRemoveOutline from 'mdi-material-ui/FileRemoveOutline'

// ** Third Party Imports
import axios from 'axios'

// ** Configs Imports
import themeConfig from 'src/configs/themeConfig'

// ** Custom Components Imports
import UserIcon from 'src/layouts/components/UserIcon'

// ** API Icon Import with object
import { autocompleteIconObj } from './autocompleteIconObj'

// ** Types Imports
import { AppBarSearchType } from 'src/@fake-db/types'

interface DefaultSuggestionsProps {
  setOpenDialog: (val: boolean) => void
}

interface NoResultProps {
  value: string
  setOpenDialog: (val: boolean) => void
}

// ** Styled Autocomplete component
const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  height: '100%',
  '& .MuiFormControl-root': {
    height: '100%',
    '& .MuiInputBase-root': {
      height: '100%',
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
      '& fieldset': {
        border: 0
      }
    }
  },
  '& + .MuiAutocomplete-popper': {
    paddingTop: theme.spacing(4),
    '& .MuiAutocomplete-listbox': {
      padding: 0,
      paddingTop: 0,
      height: '100%',
      maxHeight: '100%'
    },
    '& .MuiPaper-root': {
      boxShadow: 'none'
    },
    '& .MuiListItem-root.suggestion': {
      '&:not(:hover)': {
        '& .MuiListItemSecondaryAction-root': {
          display: 'none'
        }
      },
      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  }
}))

// ** Styled Dialog component
const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(4px)'
  },
  '& .MuiDialog-paper, & .MuiDialog-paper:not(.MuiDialog-paperFullScreen)': {
    height: '100%',
    maxHeight: 550,
    [theme.breakpoints.down('sm')]: {
      maxHeight: '100%',
      margin: '0 !important',
      width: '100% !important',
      maxWidth: '100% !important'
    }
  }
}))

const NoResult = ({ value, setOpenDialog }: NoResultProps) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
      <FileRemoveOutline sx={{ fontSize: '4rem', mb: 4 }} />
      <Typography sx={{ mb: 8, wordWrap: 'break-word' }}>
        No results for{' '}
        <Typography component='span' sx={{ wordWrap: 'break-word' }}>
          "{value}"
        </Typography>
      </Typography>

      <Typography variant='body2'>Try searching for</Typography>
      <List>
        <ListItem disablePadding sx={{ py: 1, justifyContent: 'center' }} onClick={() => setOpenDialog(false)}>
          <Link href='/dashboards/ecommerce/' passHref>
            <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Typography color='primary'>Ecommerce Dashboard</Typography>
              <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
            </Box>
          </Link>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1, justifyContent: 'center' }} onClick={() => setOpenDialog(false)}>
          <Link href='/pages/account-settings/' passHref>
            <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Typography color='primary'>Account Settings</Typography>
              <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
            </Box>
          </Link>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1, justifyContent: 'center' }} onClick={() => setOpenDialog(false)}>
          <Link href='/ui/cards/statistics/' passHref>
            <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Typography color='primary'>Card Statistics</Typography>
              <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
            </Box>
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}

const DefaultSuggestions = ({ setOpenDialog }: DefaultSuggestionsProps) => {
  return (
    <Grid container spacing={6} sx={{ ml: 0 }}>
      <Grid item xs={6}>
        <Typography color='primary'>
          <SearchWeb sx={{ mr: 1, fontSize: '1rem', verticalAlign: 'middle' }} />
          Popular Searches
        </Typography>
        <List>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/dashboards/ecommerce/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Ecommerce Dashboard</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/pages/account-settings/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Account Settings</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/ui/cards/statistics/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Card Statistics</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
        <Typography color='primary'>
          <FileDocumentOutline sx={{ mr: 1, fontSize: '1rem', verticalAlign: 'middle' }} />
          Pages
        </Typography>
        <List>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/pages/pricing/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Pricing</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/pages/faq/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>FAQ</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/pages/dialog-examples/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Dialog Examples</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
        <Typography color='primary'>
          <CardOutline sx={{ mr: 1, fontSize: '1rem', verticalAlign: 'middle' }} />
          Components
        </Typography>
        <List>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/components/buttons/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Buttons</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/components/avatars/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Avatars</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/components/timeline/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Timeline</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={6}>
        <Typography color='primary'>
          <AlertCircleOutline sx={{ mr: 1, fontSize: '1rem', verticalAlign: 'middle' }} />
          Forms
        </Typography>
        <List>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/forms/form-elements/text-field/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Textfield</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/forms/form-layouts/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Form Layouts</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }} onClick={() => setOpenDialog(false)}>
            <Link href='/forms/form-validation/' passHref>
              <Box component='a' sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Typography color='primary'>Form Validation</Typography>
                <ChevronRight sx={{ ml: 1, color: 'primary.main', fontSize: '1rem' }} />
              </Box>
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

const AutocompleteComponent = () => {
  // ** States
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [options, setOptions] = useState<AppBarSearchType[]>([])

  // ** Hooks & Vars
  const router = useRouter()
  const wrapper = useRef<HTMLDivElement>(null)

  const codes: { [key: string]: boolean } = { Slash: false, ControlLeft: false, ControlRight: false } // eslint-disable-line

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

  // Handle click event on a list item in search result
  const handleOptionClick = (obj: AppBarSearchType) => {
    setSearchValue('')
    setOpenDialog(false)
    if (obj.url) {
      router.push(obj.url)
    }
  }

  // Handle ESC & shortcut keys keydown events
  const handleKeydown = useCallback(
    event => {
      // ** ESC key to close searchbox
      if (openDialog && event.keyCode === 27) {
        setOpenDialog(false)
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
      if (!openDialog && (codes.ControlLeft || codes.ControlRight) && codes.Slash) {
        setOpenDialog(true)
      }
    },
    [codes, openDialog]
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

  if (!isMounted) {
    return null
  } else {
    return (
      <Box ref={wrapper}>
        <IconButton color='inherit' onClick={() => setOpenDialog(true)}>
          <Magnify />
        </IconButton>
        <Dialog fullWidth onClose={() => setOpenDialog(false)} open={openDialog}>
          <Box sx={{ py: 2, width: '100%' }}>
            <Autocomplete
              autoHighlight
              disablePortal
              open
              options={options}
              id='appBar-search'
              noOptionsText={<NoResult value={searchValue} setOpenDialog={setOpenDialog} />}
              onInputChange={(event, value: string) => setSearchValue(value)}
              onChange={(event, obj) => handleOptionClick(obj as AppBarSearchType)}
              getOptionLabel={(option: AppBarSearchType | unknown) => (option as AppBarSearchType).title}
              renderOption={(props, option: AppBarSearchType | unknown) => {
                const IconTag =
                  autocompleteIconObj[(option as AppBarSearchType).icon as keyof typeof autocompleteIconObj] ||
                  themeConfig.navSubItemIcon

                return searchValue.length ? (
                  <ListItem
                    {...props}
                    className='suggestion'
                    key={(option as AppBarSearchType).title}
                    secondaryAction={<ArrowLeftBottom sx={{ height: 16, width: 16, color: 'secondary.main' }} />}
                    onClick={() => handleOptionClick(option as AppBarSearchType)}
                    sx={{
                      p: 0,
                      ...(options.length <= 2
                        ? { '&:last-child': { borderBottom: theme => `1px solid ${theme.palette.divider}` } }
                        : {})
                    }}
                  >
                    <ListItemButton sx={{ py: 4, px: 8 }}>
                      <UserIcon
                        icon={IconTag}
                        componentType='search'
                        iconProps={{ fontSize: 'small', sx: { mr: 2.5, color: 'text.primary' } }}
                      />
                      <Typography color='text.primary' sx={{ fontSize: '0.875rem' }}>
                        {(option as AppBarSearchType).title}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ) : null
              }}
              renderInput={(params: AutocompleteRenderInputParams) => {
                return (
                  <TextField
                    {...params}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                    inputRef={input => {
                      if (input) {
                        if (openDialog) {
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
                        <InputAdornment position='end' onClick={() => setOpenDialog(false)}>
                          <Close sx={{ cursor: 'pointer', color: 'action.disabled' }} />
                        </InputAdornment>
                      )
                    }}
                  />
                )
              }}
            />
          </Box>
          <Divider sx={{ mt: 0 }} />
          <Box
            sx={{
              p: 8,
              height: '100%',
              ...(searchValue.length >= 1 && options.length !== 0 && options.length <= 2
                ? { mt: 24 }
                : { display: 'flex', alignItems: 'center', justifyContent: 'center' })
            }}
          >
            {searchValue.length === 0 || (searchValue.length >= 1 && options.length !== 0 && options.length <= 2) ? (
              <DefaultSuggestions setOpenDialog={setOpenDialog} />
            ) : null}
          </Box>
        </Dialog>
      </Box>
    )
  }
}

export default AutocompleteComponent
