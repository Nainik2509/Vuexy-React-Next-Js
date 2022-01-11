// ** React Imports
import { Fragment, SyntheticEvent, useEffect, useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

// ** Third Party Import
import { useTranslation } from 'react-i18next'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

// Styled component for flag images
const CountryFlag = styled('img')({
  marginRight: '0.5rem',
  width: '22px !important',
  height: '16.5px !important',
  '&.selected-lang': {
    marginRight: 0,
    width: '24px !important',
    height: '24px !important',
    borderRadius: '50% !important'
  }
})

const LanguageDropdown = ({ settings, saveSettings }: Props) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<any>(null)

  // ** Hook
  const { i18n } = useTranslation()

  // ** Vars
  const { layout, direction } = settings

  useEffect(() => {
    if (i18n.language === 'ar' && direction === 'ltr') {
      saveSettings({ ...settings, direction: 'ltr' })
    } else if (i18n.language === 'ar' || direction === 'rtl') {
      saveSettings({ ...settings, direction: 'rtl' })
    } else {
      saveSettings({ ...settings, direction: 'ltr' })
    }
  }, [i18n.language, direction]) // eslint-disable-line

  const handleLangDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }

  const selectedLangCountryCode = () => {
    if (i18n.language === 'fr') {
      return 'fr'
    } else if (i18n.language === 'ar') {
      return 'ar'
    } else {
      return 'en'
    }
  }

  const handleLangItemClick = (lang: 'en' | 'fr' | 'ar') => {
    i18n.changeLanguage(lang)
    handleLangDropdownClose()
  }

  return (
    <Fragment>
      <IconButton
        color='inherit'
        aria-haspopup='true'
        aria-controls='customized-menu'
        onClick={handleLangDropdownOpen}
        sx={layout === 'vertical' ? { mr: 0.75 } : { mx: 0.75 }}
      >
        <CountryFlag
          className='selected-lang'
          alt={`${selectedLangCountryCode()}-flag`}
          src={`/images/flags/${selectedLangCountryCode()}-round.svg`}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 160 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem sx={{ py: 2 }} selected={i18n.language === 'en'} onClick={() => handleLangItemClick('en')}>
          <CountryFlag alt='en-flag' src='/images/flags/en.svg' />
          English
        </MenuItem>
        <MenuItem sx={{ py: 2 }} selected={i18n.language === 'fr'} onClick={() => handleLangItemClick('fr')}>
          <CountryFlag alt='fr-flag' src='/images/flags/fr.svg' />
          French
        </MenuItem>
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'ar'}
          onClick={() => {
            handleLangItemClick('ar')
            saveSettings({ ...settings, direction: 'rtl' })
          }}
        >
          <CountryFlag alt='ar-flag' src='/images/flags/ar.svg' />
          Arabic
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default LanguageDropdown
