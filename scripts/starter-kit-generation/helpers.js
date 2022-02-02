const fs = require('fs')
const path = require('path')

const starterPath = '../../starter-kit'
const AppPathTSX = `${starterPath}/tsx/src/pages/_app.tsx`
const AppPathJSX = `${starterPath}/jsx/src/pages/_app.js`
const HomePathJSX = `${starterPath}/jsx/src/pages/index.js`
const HomePathTSX = `${starterPath}/tsx/src/pages/index.tsx`
const PackageJSONPathTSX = `${starterPath}/tsx/package.json`
const PackageJSONPathJSX = `${starterPath}/jsx/package.json`
const userLayoutPathJSX = `${starterPath}/jsx/src/layouts/UserLayout.js`
const userLayoutPathTSX = `${starterPath}/tsx/src/layouts/UserLayout.tsx`
const LoginPathTSX = `${starterPath}/tsx/src/pages/login/index.tsx`
const LoginPathJSX = `${starterPath}/jsx/src/pages/login/index.js`
const RegisterPathTSX = `${starterPath}/tsx/src/pages/register/index.tsx`
const RegisterPathJSX = `${starterPath}/jsx/src/pages/register/index.js`
const themeConfigPathTSX = `${starterPath}/tsx/src/configs/themeConfig.ts`
const themeConfigPathJSX = `${starterPath}/jsx/src/configs/themeConfig.js`
const navigationVerticalPathTSX = `${starterPath}/tsx/src/navigation/vertical/index.ts`
const navigationVerticalPathJSX = `${starterPath}/jsx/src/navigation/vertical/index.js`
const TranslationsPathJSX = `${starterPath}/jsx/src/layouts/components/Translations.js`
const TranslationsPathTSX = `${starterPath}/tsx/src/layouts/components/Translations.tsx`
const BuyNowComponentPathJSX = `${starterPath}/jsx/src/layouts/components/BuyNowButton.js`
const BuyNowComponentPathTSX = `${starterPath}/tsx/src/layouts/components/BuyNowButton.tsx`
const navigationHorizontalPathTSX = `${starterPath}/tsx/src/navigation/horizontal/index.ts`
const navigationHorizontalPathJSX = `${starterPath}/jsx/src/navigation/horizontal/index.js`
const appbarVerticalPathTSX = `${starterPath}/tsx/src/layouts/components/vertical/AppBarContent.tsx`
const appbarVerticalPathJSX = `${starterPath}/jsx/src/layouts/components/vertical/AppBarContent.js`
const appbarHorizontalPathTSX = `${starterPath}/tsx/src/layouts/components/horizontal/AppBarContent.tsx`
const appbarHorizontalPathJSX = `${starterPath}/jsx/src/layouts/components/horizontal/AppBarContent.js`
const UserDropdownPathTSX = `${starterPath}/tsx/src/@core/layouts/components/shared-components/UserDropdown.tsx`
const UserDropdownPathJSX = `${starterPath}/jsx/src/@core/layouts/components/shared-components/UserDropdown.js`

const filesToCopyTSX = [
  '../../public',
  '../../src',
  '../../styles',
  '../../.editorconfig',
  '../../.env',
  '../../.eslintrc.json',
  '../../.gitignore',
  '../../.prettierrc.js',
  '../../declaration.d.ts',
  '../../next-env.d.ts',
  '../../next.config.js',
  '../../next.d.ts',
  '../../package.json',
  '../../tsconfig.json'
]

const filesToCopyJSX = [
  '../../jsx-version/public',
  '../../jsx-version/src',
  '../../jsx-version/styles',
  '../../jsx-version/.editorconfig',
  '../../jsx-version/.env',
  '../../jsx-version/.eslintrc.js',
  '../../jsx-version/.gitignore',
  '../../jsx-version/.prettierrc.js',
  '../../jsx-version/next.config.js',
  '../../jsx-version/package.json',
  '../../jsx-version/jsconfig.json'
]

const foldersToRemoveTSX = [
  `${starterPath}/tsx/src/views`,
  `${starterPath}/tsx/src/store`,
  `${starterPath}/tsx/src/@fake-db`,
  `${starterPath}/tsx/src/types/apps`
]

const foldersToRemoveJSX = [
  `${starterPath}/jsx/src/views`,
  `${starterPath}/jsx/src/@fake-db`,
  `${starterPath}/jsx/src/store`,
  `${starterPath}/jsx/src/types/apps`
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
    !fs.existsSync(dest) ? fs.mkdirSync(dest, { recursive: true }) : null
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
    src: '../../src/pages/pages/auth/login-v2/index.tsx',
    dest: `${starterPath}/tsx/src/pages/login/index.tsx`
  },
  {
    src: '../../jsx-version/src/pages/pages/auth/login-v2/index.js',
    dest: `${starterPath}/jsx/src/pages/login/index.js`
  },
  {
    src: '../../src/pages/pages/auth/register-v2/index.tsx',
    dest: `${starterPath}/tsx/src/pages/register/index.tsx`
  },
  {
    src: '../../jsx-version/src/pages/pages/auth/login-v2/index.js',
    dest: `${starterPath}/jsx/src/pages/login/index.js`
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
  { from: guardComponentTSX, to: '' },
  { from: guardTypeTSX, to: '' },
  { from: new RegExp(/\/\/[\s\S]*? React Imports/), to: '' },
  { from: new RegExp(/\/\/[\s\S]*? Store Imports/), to: '' },
  { from: new RegExp(/\/\/[\s\S]*? Config Imports/), to: '' },
  { from: new RegExp(/\/\/[\s\S]*? Fake-DB Import/), to: '' },
  { from: new RegExp(/\/\/[\s\S]*? Spinner Import/), to: '' },
  { from: new RegExp(/\/\/[\s\S]*? Contexts/), to: '' },
  { from: 'const authGuard = Component.authGuard ?? true', to: '' },
  { from: 'const guestGuard = Component.guestGuard ?? false', to: '' }
]

module.exports = {
  AppPathTSX,
  removeAuth,
  AppPathJSX,
  starterPath,
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
