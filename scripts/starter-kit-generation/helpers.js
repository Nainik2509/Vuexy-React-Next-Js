const fs = require('fs')
const path = require('path')
const pathConfig = require('../configs/paths.json')

const AppPathTSX = `${pathConfig.starterKitTSXPath}/src/pages/_app.tsx`
const AppPathJSX = `${pathConfig.starterKitJSXPath}/src/pages/_app.js`
const HomePathJSX = `${pathConfig.starterKitJSXPath}/src/pages/index.js`
const HomePathTSX = `${pathConfig.starterKitTSXPath}/src/pages/index.tsx`
const PackageJSONPathTSX = `${pathConfig.starterKitTSXPath}/package.json`
const PackageJSONPathJSX = `${pathConfig.starterKitJSXPath}/package.json`
const userLayoutPathJSX = `${pathConfig.starterKitJSXPath}/src/layouts/UserLayout.js`
const userLayoutPathTSX = `${pathConfig.starterKitTSXPath}/src/layouts/UserLayout.tsx`
const LoginPathTSX = `${pathConfig.starterKitTSXPath}/src/pages/login/index.tsx`
const LoginPathJSX = `${pathConfig.starterKitJSXPath}/src/pages/login/index.js`
const RegisterPathTSX = `${pathConfig.starterKitTSXPath}/src/pages/register/index.tsx`
const RegisterPathJSX = `${pathConfig.starterKitJSXPath}/src/pages/register/index.js`
const themeConfigPathTSX = `${pathConfig.starterKitTSXPath}/src/configs/themeConfig.ts`
const themeConfigPathJSX = `${pathConfig.starterKitJSXPath}/src/configs/themeConfig.js`
const navigationVerticalPathTSX = `${pathConfig.starterKitTSXPath}/src/navigation/vertical/index.ts`
const navigationVerticalPathJSX = `${pathConfig.starterKitJSXPath}/src/navigation/vertical/index.js`
const TranslationsPathJSX = `${pathConfig.starterKitJSXPath}/src/layouts/components/Translations.js`
const TranslationsPathTSX = `${pathConfig.starterKitTSXPath}/src/layouts/components/Translations.tsx`
const BuyNowComponentPathJSX = `${pathConfig.starterKitJSXPath}/src/layouts/components/BuyNowButton.js`
const BuyNowComponentPathTSX = `${pathConfig.starterKitTSXPath}/src/layouts/components/BuyNowButton.tsx`
const navigationHorizontalPathTSX = `${pathConfig.starterKitTSXPath}/src/navigation/horizontal/index.ts`
const navigationHorizontalPathJSX = `${pathConfig.starterKitJSXPath}/src/navigation/horizontal/index.js`
const appbarVerticalPathTSX = `${pathConfig.starterKitTSXPath}/src/layouts/components/vertical/AppBarContent.tsx`
const appbarVerticalPathJSX = `${pathConfig.starterKitJSXPath}/src/layouts/components/vertical/AppBarContent.js`
const appbarHorizontalPathTSX = `${pathConfig.starterKitTSXPath}/src/layouts/components/horizontal/AppBarContent.tsx`
const appbarHorizontalPathJSX = `${pathConfig.starterKitJSXPath}/src/layouts/components/horizontal/AppBarContent.js`
const UserDropdownPathTSX = `${pathConfig.starterKitTSXPath}/src/@core/layouts/components/shared-components/UserDropdown.tsx`
const UserDropdownPathJSX = `${pathConfig.starterKitJSXPath}/src/@core/layouts/components/shared-components/UserDropdown.js`

const filesToCopyTSX = [
  `${pathConfig.fullVersionTSXPath}/public`,
  `${pathConfig.fullVersionTSXPath}/src`,
  `${pathConfig.fullVersionTSXPath}/styles`,
  `${pathConfig.fullVersionTSXPath}/.editorconfig`,
  `${pathConfig.fullVersionTSXPath}/.env`,
  `${pathConfig.fullVersionTSXPath}/.eslintrc.json`,
  `${pathConfig.fullVersionTSXPath}/.gitignore`,
  `${pathConfig.fullVersionTSXPath}/.prettierrc.js`,
  `${pathConfig.fullVersionTSXPath}/declaration.d.ts`,
  `${pathConfig.fullVersionTSXPath}/next-env.d.ts`,
  `${pathConfig.fullVersionTSXPath}/next.config.js`,
  `${pathConfig.fullVersionTSXPath}/next.d.ts`,
  `${pathConfig.fullVersionTSXPath}/package.json`,
  `${pathConfig.fullVersionTSXPath}/tsconfig.json`
]

const filesToCopyJSX = [
  `${pathConfig.fullVersionJSXPath}/public`,
  `${pathConfig.fullVersionJSXPath}/src`,
  `${pathConfig.fullVersionJSXPath}/styles`,
  `${pathConfig.fullVersionJSXPath}/.editorconfig`,
  `${pathConfig.fullVersionJSXPath}/.env`,
  `${pathConfig.fullVersionJSXPath}/.eslintrc.js`,
  `${pathConfig.fullVersionJSXPath}/.gitignore`,
  `${pathConfig.fullVersionJSXPath}/.prettierrc.js`,
  `${pathConfig.fullVersionJSXPath}/next.config.js`,
  `${pathConfig.fullVersionJSXPath}/package.json`,
  `${pathConfig.fullVersionJSXPath}/jsconfig.json`
]

const foldersToRemoveTSX = [
  `${pathConfig.starterKitTSXPath}/src/views`,
  `${pathConfig.starterKitTSXPath}/src/store`,
  `${pathConfig.starterKitTSXPath}/src/@fake-db`,
  `${pathConfig.starterKitTSXPath}/src/types/apps`
]

const foldersToRemoveJSX = [
  `${pathConfig.starterKitJSXPath}/src/views`,
  `${pathConfig.starterKitJSXPath}/src/@fake-db`,
  `${pathConfig.starterKitJSXPath}/src/store`,
  `${pathConfig.starterKitJSXPath}/src/types/apps`
]

const foldersToKeepTSX = [
  'views/pages/auth',
  'views/pages/misc',
  'pages/forgot-password',
  'pages/login',
  'pages/register',
  'pages/_app.tsx',
  'pages/_document.tsx',
  'pages/401.tsx',
  'pages/404.tsx',
  'pages/500.tsx',
  'pages/index.tsx'
]
const foldersToKeepJSX = [
  'views/pages/auth',
  'views/pages/misc',
  'pages/forgot-password',
  'pages/login',
  'pages/register',
  'pages/_app.js',
  'pages/_document.js',
  'pages/401.js',
  'pages/404.js',
  'pages/500.js',
  'pages/index.js'
]

const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()
  if (isDirectory) {
    !fs.existsSync(dest) ? fs.mkdirSync(dest, { recursive: true, force: true }) : null
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName))
    })
  } else {
      fs.copyFileSync(src, dest)
  }
}

const filesToReplace = [
  {
    src: './components/tsx/AppBarContentVertical.tsx',
    dest: appbarVerticalPathTSX
  },
  {
    src: './components/jsx/AppBarContentVertical.js',
    dest: appbarVerticalPathJSX
  },
  {
    src: './components/tsx/AppBarContentHorizontal.tsx',
    dest: appbarHorizontalPathTSX
  },
  {
    src: './components/jsx/AppBarContentHorizontal.js',
    dest: appbarHorizontalPathJSX
  },
  {
    src: './components/tsx/navigationVertical.ts',
    dest: navigationVerticalPathTSX
  },
  {
    src: './components/jsx/navigationVertical.js',
    dest: navigationVerticalPathJSX
  },
  {
    src: './components/tsx/navigationHorizontal.ts',
    dest: navigationHorizontalPathTSX
  },
  {
    src: './components/jsx/navigationHorizontal.js',
    dest: navigationHorizontalPathJSX
  },
  {
    src: './components/tsx/index.tsx',
    dest: HomePathTSX
  },
  {
    src: './components/jsx/index.js',
    dest: HomePathJSX
  },
  {
    src: `${pathConfig.fullVersionTSXPath}/src/pages/pages/auth/login-v2/index.tsx`,
    dest: `${pathConfig.starterKitTSXPath}/src/pages/login/index.tsx`
  },
  {
    src: `${pathConfig.fullVersionJSXPath}/src/pages/pages/auth/login-v2/index.js`,
    dest: `${pathConfig.starterKitJSXPath}/src/pages/login/index.js`
  },
  {
    src: `${pathConfig.fullVersionTSXPath}/src/pages/pages/auth/register-v2/index.tsx`,
    dest: `${pathConfig.starterKitTSXPath}/src/pages/register/index.tsx`
  },
  {
    src: `${pathConfig.fullVersionJSXPath}/src/pages/pages/auth/login-v2/index.js`,
    dest: `${pathConfig.starterKitJSXPath}/src/pages/login/index.js`
  }
]

const removeAuth = (src, dest) => {
  fs.readFile(src, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)

      return
    } else {
      fs.writeFile(dest, data, err => {
        if (err) {
          console.log(err)
        }
      })
    }
  })
}

const guardComponentTSX = `const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}`

const guardTypeTSX = `type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}`

const appDataToReplace = [
  { from: "import { ReactNode } from 'react'", to: '' },
  { from: "import 'src/@fake-db'", to: '' },
  { from: "import 'src/configs/i18n'", to: '' },
  { from: "import { AuthProvider } from 'src/@core/context/AuthContext'", to: '' },
  { from: "import AuthGuard from 'src/@core/components/auth/AuthGuard'", to: '' },
  { from: "import GuestGuard from 'src/@core/components/auth/GuestGuard'", to: '' },
  { from: "import Spinner from 'src/@core/components/spinner'", to: '' },
  { from: "import { store } from 'src/store'", to: '' },
  { from: "import { Provider } from 'react-redux'", to: '' },
  { from: '<Provider store={store}>', to: '' },
  { from: ' </Provider>', to: '' },
  { from: '<AuthProvider>', to: '' },
  { from: '</AuthProvider>', to: '' },
  { from: '<Guard authGuard={authGuard} guestGuard={guestGuard}>', to: '' },
  { from: '</Guard>', to: '' },
   { from: new RegExp(/const Guard[\s\S]*?<\/AuthGuard>[\s\S]*?}[\s\S]*?}/), to: '' },
  { from: new RegExp(/type GuardProps[\s\S]*?ReactNode[\s\S]*?}/), to: '' },
  { from: new RegExp(/\/\/ \*\* React Imports/), to: '' },
  { from: new RegExp(/\/\/ \*\* Store Imports/), to: '' },
  { from: new RegExp(/\/\/ \*\* Config Imports/), to: '' },
  { from: new RegExp(/\/\/ \*\* Fake-DB Import/), to: '' },
  { from: new RegExp(/\/\/ \*\* Spinner Import/), to: '' },
  { from: new RegExp(/\/\/ \*\* Contexts/), to: '' },
  { from: 'const authGuard = Component.authGuard ?? true', to: '' },
  { from: 'const guestGuard = Component.guestGuard ?? false', to: '' }
]

module.exports = {
  AppPathTSX,
  removeAuth,
  AppPathJSX,
  guardTypeTSX,
  LoginPathTSX,
  LoginPathJSX,
  filesToCopyTSX,
  filesToCopyJSX,
  filesToReplace,
  RegisterPathTSX,
  RegisterPathJSX,
  foldersToKeepTSX,
  appDataToReplace,
  foldersToKeepJSX,
  copyRecursiveSync,
  guardComponentTSX,
  userLayoutPathTSX,
  userLayoutPathJSX,
  themeConfigPathTSX,
  themeConfigPathJSX,
  PackageJSONPathTSX,
  PackageJSONPathJSX,
  foldersToRemoveTSX,
  foldersToRemoveJSX,
  TranslationsPathTSX,
  TranslationsPathJSX,
  UserDropdownPathTSX,
  UserDropdownPathJSX,
  appbarVerticalPathTSX,
  appbarVerticalPathJSX,
  BuyNowComponentPathTSX,
  BuyNowComponentPathJSX,
  appbarHorizontalPathTSX,
  appbarHorizontalPathJSX
}
