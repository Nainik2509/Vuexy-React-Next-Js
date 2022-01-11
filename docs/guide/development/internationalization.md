# Internationalization (i18n)

## Overview

We're using [react-i18next](https://react.i18next.com/) for Internationalization. You can find its configurations in `src/configs/i18n.ts` file and the locales in `public/locales` folder.

## Usage

`react-i18next` provides `useTranslation` hook to translate and change languages.

```tsx
import { useTranslation } from 'react-i18next'

const Component = () => {
  // ** Hook
  const { t, i18n } = useTranslation()

  return (
    <div>
      <h1>{t('Hello World')}</h1>
      <button onClick={() => i18n.changeLanguage('fr')}>Translate</button>
    </div>
  )
}

export default Component
```

## Add i18n

:::warning
Only for those who are using the starter-kit
:::

If you are using the full version, then you don't need to add i18n as it is already available in that version. But if you are using the starter-kit (which is recommended) and want to add i18n, then follow these steps:

- You need to add these npm packages:
  - `i18next`
  - `react-i18next`
  - `i18next-http-backend`
  - `i18next-browser-languagedetector`

```bash
# For yarn (Highly Recommended)
yarn add i18next react-i18next i18next-http-backend i18next-browser-languagedetector

# OR

# For npm
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

- Copy `src/configs/i18n.ts` file from the full version and paste that file into the same directory in the starter-kit
- Add `import 'src/configs/i18n'` import statement in `src/pages/_app.tsx` file
- Add your locale files in `public/locales` folder
- If you want to translate the navigation menu, then copy the whole code from `src/assets/components/Translations.tsx` file from the full version and paste that copied code into the same file in the starter-kit
- If you want a language dropdown in the appBar to change the current language in the app, then:
  - Copy `public/images/flags` folder form the full version and paste that folder into the same directory in the starter-kit
  - Import `src/@core/layouts/components/shared-components/LanguageDropdown.tsx` file and pass it as the following prop in `src/layouts/UserLayout.tsx` file

```tsx
languageDropdown={() => <LanguageDropdown settings={settings} saveSettings={saveSettings} />}
```

## Remove i18n

:::warning
Only for those who are using the full version
:::

If you do not want to use i18n, we recommend you start your project with the starter-kit. But if you are using the full version and does not want to use i18n, then follow these steps:

- You may remove all the packages related to i18n from `package.json` file if you want to
- Remove `src/configs/i18n.ts` file
- Remove `import 'src/configs/i18n'` import statement from `src/pages/_app.tsx` file
- Replace the following code in `src/assets/components/Translations.tsx` file

```tsx
interface Props {
  text: string
}

const Translations = ({ text }: Props) => <>{text}</>

export default Translations
```

- Remove `LanguageDropdown` file import and the following prop in `src/layouts/UserLayout.tsx` file

```tsx
languageDropdown={() => <LanguageDropdown settings={settings} saveSettings={saveSettings} />}
```

## Add / Remove a language

Suppose you want to add `de` (German) language and remove `ar` (Arabic) language. For this, you need to follow these steps:

- Remove `public/locales/ar.json` file and add `public/locales/de.json` file. You need to keep the format of the file as it is in other locale files
- Remove `ar` related SVG images and add `de` related images in `public/images/flags` folder
- Make a new file anywhere in `src/assets` folder and place the following code in this file

```tsx
// src/assets/components/UserLanguageDropdown.tsx

import { Fragment, SyntheticEvent, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { useTranslation } from 'react-i18next'
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  settings: Settings
}

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

const UserLanguageDropdown = ({ settings }: Props) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<any>(null)

  // ** Hook
  const { i18n } = useTranslation()

  // ** Vars
  const { layout, direction } = settings

  const handleLangDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }
  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }
  const selectedLangCountryCode = () => {
    if (i18n.language === 'fr') {
      return 'fr'
    } else if (i18n.language === 'de') {
      return 'de'
    } else {
      return 'en'
    }
  }
  const handleLangItemClick = (lang: 'en' | 'fr' | 'de') => {
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
        <MenuItem sx={{ py: 2 }} selected={i18n.language === 'de'} onClick={() => handleLangItemClick('de')}>
          <CountryFlag alt='de-flag' src='/images/flags/de.svg' />
          German
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserLanguageDropdown
```

- Import the new file and pass it as a prop in `src/layouts/UserLayout.tsx` file

```tsx
// src/layouts/UserLayout.tsx

import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'
import UserLanguageDropdown from 'src/assets/components/UserLanguageDropdown'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  // ** Hook
  const { settings, saveSettings } = useSettings()

  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      languageDropdown={() => <UserLanguageDropdown settings={settings} />}
      {...(settings.layout === 'horizontal'
        ? { horizontalNavItems: HorizontalNavItems() }
        : { verticalNavItems: VerticalNavItems() })}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
