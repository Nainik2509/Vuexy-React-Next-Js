# Internationalization

In this page you will find how to add/update Internationalization.

## Overview

We're using [react-i18next](https://react.i18next.com/) for Internationalization.
You can find it's configurations in `src/configs/i18n/` & you can find the locales in `public/assets/locales`

## Adding new translations

As translations are static assets you can find them in `public/assets/locales` you are to modify the language files here.
All you have to do is add your the text in language files.

## Adding new Languages

Adding a new language is simple all you have to do is create a language's json file with it's acronym in `public/assets/locales`.
Make sure it's an **acronym** for example if your new language is `german` then the file name would be `de.json`.

## Using the i18n in components

react-i18next provides the `useTranslation` hook to translate & change languages.

**Usage**

```jsx
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Component: FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <h1>t(Hello World)</h1>
      <button onClick={() => i18n.changeLanguage('fr')}>Translate</button>
    </div>
  )
}

export default Component
```
