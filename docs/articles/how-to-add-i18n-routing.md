# How to add i18n routing

## Routing Synced With I18n

1. Open the `next.config.js` file and add the `i18` property with the languages you need

```js
i18n: {
  locales: ['en', 'fr', 'ar'],
  defaultLocale: 'en'
},
```

2. Import locale from the `useRouter` hook and add the `locale` prop to every NextJS link that is used in your app

```jsx
import Link from 'next/link'
import { useRouter } from 'next/router'

const Component = () => {
  const router = useRouter()
  const { locale } = router

  return <Link href='/' locale={locale}>text</Link>
}

export default Component
```

3. Create a `useEffect` in the file where you switch your language that watches changes of i18n language to preserve language in case the user reloads the page

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const Component = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const { locale } = router

  useEffect(() => {
    if (locale !== 'en') {
      i18n.changeLanguage(locale)
    }
  }, [])

  return <h1>Component</h1>
}

export default Component
```

4. To switch language, push the `locale` parameter with `router.push`

```jsx
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const Component = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const { locale } = router

  useEffect(() => {
    if (locale !== 'en') {
      i18n.changeLanguage(locale)
    }
  }, [locale])

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang)
    router.push(router.asPath, undefined, { locale: lang })
  }

  return (
    <div>
      <button onClick={() => handleLangChange('en')}>EN</button>
      <button onClick={() => handleLangChange('fr')}>FR</button>
      <button onClick={() => handleLangChange('ar')}>AR</button>
    </div>
  )
}

export default Component
```

5. If you have `getStaticPaths` & `getStaticProps` in your component then you'll have to do the following otherwise you'll be redirected to `404`

```jsx
export const getStaticProps = ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales,
    },
  }
}

export const getStaticPaths = ({ locales }) => {
  const paths = []

  for (const locale of locales) {
    paths.push({ params: { ... }, locale })
    paths.push({ params: { ... }, locale })
  }

  return {
    paths,
    fallback: true,
  }
}
```
