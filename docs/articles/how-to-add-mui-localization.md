# How to add MUI localization

::: warning
To use MUI localization you'll have to make changes in `ThemeComponent.tsx` file.

You'll have to make a copy of `ThemeComponent.tsx` file to keep it as backup while updating the template.
:::

## Localization Synced With I18n

1. open `src/@core/theme/ThemeComponent.tsx`.
2. import the locales you need from `'@mui/material/locale'`.
```js
import { frFR, arSD, enUS } from '@mui/material/locale'
```
3. import `useTranslation` hook from `react-i18next`.
```js
import { useTranslation } from 'react-i18next'
```
4. Create a `langObj` variable.
```js
const langObj = {
  fr: frFR,
  ar: arSD,
  en: enUS
}
```
5. Initialize `useTranslation` hook.
```js
// ** Hook
const { i18n } = useTranslation()
```
6. Add the language as second parameter to createTheme function.
```js
theme = createTheme(
    theme,
    {
        components: { ...mergeComponentOverrides(theme, settings) },
        typography: { ...mergeTypography(theme) }
    },
    langObj[i18n.language]
)
```
