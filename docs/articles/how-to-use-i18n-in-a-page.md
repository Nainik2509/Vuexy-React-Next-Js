# How to use i18n in a page

Master admin provides i18n for the navigation only.
There might be a time when you might want to translate a text in page.
Here's how you can achieve that:

1. Make sure your have `react-i18next` `i18next-http-backend` `i18next-browser-languagedetector` installed.
2. Copy `src/configs/i18n.ts` file from the full version and paste it under the same directory in your project
3. Add import 'src/configs/i18n' import statement in src/pages/_app.tsx file
4. Create a `locales` folder in public folder.
5. Create json files with language as their file-names in `locales` depending on the languages you need. For the example we're using three languages english, french & arabic.

```json
// en.json
{
  "Hello World": "Hello World"
}
```
```json
// fr.json
{
  "Hello World": "Bonjour le monde"
}
```
```json
// ar.json
{
  "Hello World": "مرحبا بالعالم"
}
```

6. Import `useTranslation` in the page where you want to translate the content.

```tsx
import { useTranslation } from 'react-i18next'
```

7. You can now initialize the `useTranslation` and use the `changeLanguage` function to change the language.

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