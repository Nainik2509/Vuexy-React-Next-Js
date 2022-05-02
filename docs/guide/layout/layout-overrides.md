---
sidebarDepth: 2
---

# Layout Overrides

## Overview

The `layouts` folder in the root of the `src` folder is for users to override layouts built in the `@core` folder. It is highly recommended to override layouts in the `layouts` folder instead of directly working in the `@core` folder. This will ease your updates to newer versions without facing any hassle of backing up your current code, else it will override your changes in the `@core` folder each time you take an update.

Most of the layout components explained on this page are overridden in the `src/layouts/UserLayout.tsx` file.

## Vertical Layout

You can override the following layout components:

- [App Logo](#_1-app-logo)
- [Menu collapse icons](#_2-menu-collapse-icons)
- [Vertical menu items](#_3-vertical-menu-items)
- [Add content before menu items](#_4-add-content-before-menu-items)
- [Add content after menu items](#_5-add-content-after-menu-items)
- [Hide menu based on screen size](#_6-hide-menu-based-on-screen-size)
- [Navbar (or AppBar) Content](#_7-navbar-or-appbar-content)
- [Footer](#_8-footer)

### 1. App Logo

If you want to change the app logo, you need to use the `verticalNavMenuBranding` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
verticalNavMenuBranding?: (props?: any) => ReactNode
```

Here is the code to change the app logo:

<code-group>
<code-block title="TSX" active>
```tsx{25}
import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src='...' alt='logo' width='30' height='30' />
      <Typography variant='h6' sx={{ ml: 2 }}>
        React
      </Typography>
    </Box>
  )
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      verticalNavMenuBranding={() => <AppBrand />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```JSX{20}
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Layout from 'src/@core/layouts/Layout'

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src='...' alt='logo' width='30' height='30' />
      <Typography variant='h6' sx={{ ml: 2 }}>
        React
      </Typography>
    </Box>
  )
}

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      verticalNavMenuBranding={() => <AppBrand />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-app-brand' class='medium-zoom' :src="$withBase('/images/layouts/user-override-vertical-app-brand.png')" />

::: warning NOTE
When you override the app logo and when the menu is collapsed, `padding-left` of the menu header will reduce to 0. To center align your logo, you need to manually add `margin-left` to your overridden logo.
:::

### 2. Menu collapse icons

If you want to change the icons for collapsing the vertical menu, you need to use the `menuLockedIcon` prop (when the menu is not collapsed) and `menuUnlockedIcon` prop (when the menu is collapsed) with the `Layout` component.

The values accepted by these props are:

```tsx
menuLockedIcon?: ReactNode
menuUnlockedIcon?: ReactNode
```

Here is the code to change the icons for collapsing the vertical menu:

<code-group>
<code-block title="TSX" active>
```tsx{14-15}
import { ReactNode } from 'react'
import ArrowLeftBoldCircleOutline from 'mdi-material-ui/ArrowLeftBoldCircleOutline'
import ArrowRightBoldCircleOutline from 'mdi-material-ui/ArrowRightBoldCircleOutline'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      menuLockedIcon={<ArrowLeftBoldCircleOutline />}
      menuUnlockedIcon={<ArrowRightBoldCircleOutline />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{9-10}
import ArrowLeftBoldCircleOutline from 'mdi-material-ui/ArrowLeftBoldCircleOutline'
import ArrowRightBoldCircleOutline from 'mdi-material-ui/ArrowRightBoldCircleOutline'
import Layout from 'src/@core/layouts/Layout'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      menuLockedIcon={<ArrowLeftBoldCircleOutline />}
      menuUnlockedIcon={<ArrowRightBoldCircleOutline />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result of `menuLockedIcon`:

<img height='400' class='medium-zoom' alt='override-menu-locked' :src="$withBase('/images/layouts/user-override-menu-locked.png')" />

Result of `menuUnlockedIcon`:

<img height='400' class='medium-zoom' alt='override-menu-unlocked' :src="$withBase('/images/layouts/user-override-menu-unlocked.png')" />

### 3. Vertical menu items

If you want to change the menu, you need to use the `verticalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
verticalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to change the menu:

<code-group>
<code-block title="TSX" active>
```tsx{24}
import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const Menu = () => {
  return (
    <ul>
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
      <li>Menu Item 3</li>
      <li>Menu Item 4</li>
      <li>Menu Item 5</li>
    </ul>
  )
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      verticalNavMenuContent={() => <Menu />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{19}
import Layout from 'src/@core/layouts/Layout'

const Menu = () => {
  return (
    <ul>
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
      <li>Menu Item 3</li>
      <li>Menu Item 4</li>
      <li>Menu Item 5</li>
    </ul>
  )
}

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      verticalNavMenuContent={() => <Menu />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-menu' class='medium-zoom' :src="$withBase('/images/layouts/user-override-vertical-menu.png')" />

### 4. Add content before menu items

If you want to add something before the menu items, you need to use the `beforeVerticalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
beforeVerticalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to add user info before the menu items:

<code-group>
<code-block title="TSX" active>
```tsx{50}
import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const User = () => {
  const BadgeContentSpan = styled('span')(({ theme }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }))

  return (
    <Box sx={{ pt: 2, pb: 3, px: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge
          overlap='circular'
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Avatar src='...' alt='John Doe' sx={{ width: '2.5rem', height: '2.5rem' }} />
        </Badge>
        <Box sx={{ display: 'flex', ml: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
          <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
            Admin
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      beforeVerticalNavMenuContent={() => <User />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{45}
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Layout from 'src/@core/layouts/Layout'

const User = () => {
  const BadgeContentSpan = styled('span')(({ theme }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }))

  return (
    <Box sx={{ pt: 2, pb: 3, px: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge
          overlap='circular'
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Avatar src='...' alt='John Doe' sx={{ width: '2.5rem', height: '2.5rem' }} />
        </Badge>
        <Box sx={{ display: 'flex', ml: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
          <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
            Admin
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      beforeVerticalNavMenuContent={() => <User />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='add-content-before-menu-items' class='medium-zoom' :src="$withBase('/images/layouts/user-add-content-before-menu-items.png')" />

### 5. Add content after menu items

If you want to add something after the menu items, you need to use the `afterVerticalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
afterVerticalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to menu footer info after the menu items:

<code-group>
<code-block title="TSX" active>
```tsx{21}
import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const MenuFooter = () => {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <img src='...' width='230' height='144' alt='menu-footer' />
    </Box>
  )
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      afterVerticalNavMenuContent={() => <MenuFooter />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{16}
import Box from '@mui/material/Box'
import Layout from 'src/@core/layouts/Layout'

const MenuFooter = () => {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <img src='...' width='230' height='144' alt='menu-footer' />
    </Box>
  )
}

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      afterVerticalNavMenuContent={() => <MenuFooter />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='add-content-before-menu-items' class='medium-zoom' :src="$withBase('/images/layouts/user-add-content-after-menu-items.png')" />

### 6. Hide menu based on screen size

The `hidden` prop is used to hide the vertical menu at a given screen size. The menu will be accessible from the Hamburger menu icon only which is known as the Vertical Overlay Menu. You can change the screen size from which you want to hide the vertical menu.

In the example below, the vertical menu is visible above the `lg` breakpoint and on screen size below the `lg` breakpoint, it will change to the vertical overlay menu which can be accessed from the Hamburger menu icon.

```tsx
const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
```

You can also change its value using a specific screen size:

```tsx
const hidden = useMediaQuery('(max-width:1365px)')
```

### 7. Navbar (or AppBar) Content

The content in the appBar comes from the user side itself and thus, it would be very easy and convenient for you to change anything in the appBar. You just have to change the code in the `src/layouts/components/vertical/AppBarContent.tsx` file as per your requirements. The appBar component is then passed in the `verticalAppBarContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
verticalAppBarContent?: (props?: any) => ReactNode
```

Here is the code to change the appBar:

<code-group>
<code-block title="TSX" active>
```tsx
// src/layouts/components/vertical/AppBarContent.tsx

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from 'mdi-material-ui/Menu'
import { Settings } from 'src/@core/context/settingsContext'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
      <UserDropdown settings={settings} />
    </Box>
  )
}

export default AppBarContent
```
</code-block>

<code-block title="JSX">
```jsx
// src/layouts/components/vertical/AppBarContent.js

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from 'mdi-material-ui/Menu'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

const AppBarContent = props => {
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
      <UserDropdown settings={settings} />
    </Box>
  )
}

export default AppBarContent
```
</code-block>
</code-group>

<code-group>
<code-block title="TSX" active>
```tsx{8,21-28}
// src/layouts/UserLayout.tsx

import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import { useSettings } from 'src/@core/hooks/useSettings'
import VerticalAppBarContent from 'src/layouts/components/vertical/AppBarContent'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      {...} // other props
      verticalAppBarContent={props => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{6,15-22}
// src/layouts/UserLayout.js

import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import { useSettings } from 'src/@core/hooks/useSettings'
import VerticalAppBarContent from 'src/layouts/components/vertical/AppBarContent'

const UserLayout = ({ children }) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))

  return (
    <Layout
      {...} // other props
      verticalAppBarContent={props => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-appBar' class='medium-zoom' :src="$withBase('/images/layouts/user-override-vertical-appBar.png')" />

### 8. Footer

If you want to change the footer, you need to use the `footerContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
footerContent?: (props?: any) => ReactNode
```

Here is the code to change the footer:

<code-group>
<code-block title="TSX" active>
```tsx{12}
import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      footerContent={() => 'I am footer which is overridden by the user'}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{7}
import Layout from 'src/@core/layouts/Layout'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      footerContent={() => 'I am footer which is overridden by the user'}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-footer' class='medium-zoom' :src="$withBase('/images/layouts/user-override-vertical-footer.png')" />

## Horizontal Layout

You can override the following layout components:

- [App Logo](#_1-app-logo-2)
- [Horizontal menu items](#_2-horizontal-menu-items)
- [Hide menu based on screen size](#_3-hide-menu-based-on-screen-size)
- [AppBar Content](#_4-appbar-content)
- [Footer](#_5-footer)

### 1. App Logo

If you want to change the app logo, you need to use the `horizontalAppBarBranding` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
horizontalAppBarBranding?: (props?: any) => ReactNode
```

Here is the code to change the app logo:

<code-group>
<code-block title="TSX" active>
```tsx{25}
import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src='...' alt='logo' width='30' height='30' />
      <Typography variant='h6' sx={{ ml: 2 }}>
        React
      </Typography>
    </Box>
  )
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      horizontalAppBarBranding={() => <AppBrand />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{20}
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Layout from 'src/@core/layouts/Layout'

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src='...' alt='logo' width='30' height='30' />
      <Typography variant='h6' sx={{ ml: 2 }}>
        React
      </Typography>
    </Box>
  )
}

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      horizontalAppBarBranding={() => <AppBrand />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-app-brand' class='medium-zoom' :src="$withBase('/images/layouts/user-override-horizontal-app-brand.png')" />

### 2. Horizontal menu items

If you want to change the menu, you need to use the `horizontalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
horizontalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to change the menu:

<code-group>
<code-block title="TSX" active>
```tsx{12}
import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      horizontalNavMenuContent={() => 'I am menu which is overridden by the user'}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```tsx{7}
import Layout from 'src/@core/layouts/Layout'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      horizontalNavMenuContent={() => 'I am menu which is overridden by the user'}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-menu' class='medium-zoom' :src="$withBase('/images/layouts/user-override-horizontal-menu.png')" />

### 3. Hide menu based on screen size

The `hidden` prop is used to hide the horizontal menu at a given screen size. The menu will be accessible from the Hamburger menu icon only which is known as the Vertical Overlay Menu. You can change the screen size from which you want to hide the horizontal menu.

In the example below, the horizontal menu is visible above the `lg` breakpoint and on screen size below the `lg` breakpoint, it will change to the vertical overlay menu which can be accessed from the Hamburger menu icon.

```tsx
const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
```

You can also change its value using a specific screen size:

```tsx
const hidden = useMediaQuery('(max-width:1365px)')
```

### 4. AppBar Content

The content in the appBar which is on the right side comes from the user side itself and thus, it would be very easy and convenient for you to change anything in the appBar. You just have to change the code in the `src/layouts/components/horizontal/AppBarContent.tsx` file. The appBar component is then passed in the `horizontalAppBarContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
horizontalAppBarContent?: (props?: any) => ReactNode
```

Suppose you need the app logo, navigation menu as well as some actions in one line, then you need to follow the steps given below.

Firstly, you need to hide the navigation menu section which is below the appBar from the `src/configs/themeConfig.ts` file:

<code-group>
<code-block title="TS" active>
```ts{5}
// src/configs/themeConfig.ts

const themeConfig: ThemeConfig = {
  ...,
  navHidden: true,
  ...
}
```
</code-block>

<code-block title="JS">
```js{5}
// src/configs/themeConfig.js

const themeConfig = {
  ...,
  navHidden: true,
  ...
}
```
</code-block>
</code-group>

Then you need to change the appBar accordingly:

<code-group>
<code-block title="TSX" active>
```tsx
// src/layouts/components/horizontal/AppBarContent.tsx

import Box from '@mui/material/Box'
import { Settings } from 'src/@core/context/settingsContext'
import { HorizontalNavItemsType } from 'src/@core/layouts/types'
import Navigation from 'src/@core/layouts/components/horizontal/navigation'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  settings: Settings
  horizontalNavItems?: HorizontalNavItemsType
}

const AppBarContent = (props: Props) => {
  const { settings } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Navigation {...props} />
      <UserDropdown settings={settings} />
    </Box>
  )
}

export default AppBarContent
```
</code-block>

<code-block title="JSX">
```jsx
// src/layouts/components/horizontal/AppBarContent.js

import Box from '@mui/material/Box'
import Navigation from 'src/@core/layouts/components/horizontal/navigation'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

const AppBarContent = props => {
  const { settings } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Navigation {...props} />
      <UserDropdown settings={settings} />
    </Box>
  )
}

export default AppBarContent
```
</code-block>
</code-group>

Then you need to pass that component in the `horizontalAppBarContent` prop with the `Layout` component:

<code-group>
<code-block title="TSX" active>
```tsx{6-7,18-20}
// src/layouts/UserLayout.tsx

import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'
import HorizontalAppBarContent from 'src/layouts/components/horizontal/AppBarContent'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings } = useSettings()
  return (
    <Layout
      {...} // other props
      horizontalAppBarContent={() => (
        <HorizontalAppBarContent settings={settings} horizontalNavItems={HorizontalNavItems()} />
      )}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{5-6,13-15}
// src/layouts/UserLayout.js

import Layout from 'src/@core/layouts/Layout'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'
import HorizontalAppBarContent from 'src/layouts/components/horizontal/AppBarContent'

const UserLayout = ({ children }) => {
  const { settings } = useSettings()
  return (
    <Layout
      {...} // other props
      horizontalAppBarContent={() => (
        <HorizontalAppBarContent settings={settings} horizontalNavItems={HorizontalNavItems()} />
      )}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-appBar' class='medium-zoom' :src="$withBase('/images/layouts/user-override-horizontal-appBar.png')" />

### 5. Footer

If you want to change the footer, you need to use the `footerContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
footerContent?: (props?: any) => ReactNode
```

Here is the code to change the footer:

<code-group>
<code-block title="TSX" active>
```tsx{12}
import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      footerContent={() => 'I am footer which is overridden by the user'}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{7}
import Layout from 'src/@core/layouts/Layout'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      footerContent={() => 'I am footer which is overridden by the user'}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-footer' class='medium-zoom' :src="$withBase('/images/layouts/user-override-horizontal-footer.png')" />

## Blank Layout

If you want to change the Blank Layout, you need to follow these steps:

- Make a new file (let us say `UserBlankLayout.tsx` file name) in the `src/layouts` folder
- Copy the whole code from the `src/@core/layouts/BlankLayout.tsx` file and paste it into the `src/layouts/UserBlankLayout.tsx` file
- Edit the `src/layouts/UserBlankLayout.tsx` file as per your requirements
- Now, to use this layout in any of your pages, you need to do this:

<code-group>
<code-block title="TSX" active>
```tsx{2,10}
import { ReactNode } from 'react'
import UserBlankLayout from 'src/layouts/UserBlankLayout'

const Login = () => {
  return (
    // Your content
  )
}

Login.getLayout = (page: ReactNode) => <UserBlankLayout>{page}</UserBlankLayout>

export default Login
```
</code-block>

<code-block title="JSX">
```jsx{1,9}
import UserBlankLayout from 'src/layouts/UserBlankLayout'

const Login = () => {
  return (
    // Your content
  )
}

Login.getLayout = page => <UserBlankLayout>{page}</UserBlankLayout>

export default Login
```
</code-block>
</code-group>

## Blank Layout with AppBar

If you want to change the navbar, you need to follow these steps:

- Make a new file (let us say `UserBlankLayoutWithAppBar.tsx` file name) in the `src/layouts` folder
- Copy the whole code from the `src/@core/layouts/BlankLayoutWithAppBar.tsx` file and paste it into the `src/layouts/UserBlankLayoutWithAppBar.tsx` file
- Remove the `AppBar` component and its import statement from the `src/layouts/UserBlankLayoutWithAppBar.tsx` file and make your own `AppBar` component
- Now, to use this layout in any of your pages, you need to do this:

<code-group>
<code-block title="TSX" active>
```tsx{2,10}
import { ReactNode } from 'react'
import UserBlankLayoutWithAppBar from 'src/layouts/UserBlankLayoutWithAppBar'

const LoginWithAppBar = () => {
  return (
    // Your content
  )
}

LoginWithAppBar.getLayout = (page: ReactNode) => <UserBlankLayoutWithAppBar>{page}</UserBlankLayoutWithAppBar>

export default LoginWithAppBar
```
</code-block>

<code-block title="JSX">
```jsx{1,9}
import UserBlankLayoutWithAppBar from 'src/layouts/UserBlankLayoutWithAppBar'

const LoginWithAppBar = () => {
  return (
    // Your content
  )
}

LoginWithAppBar.getLayout = page => <UserBlankLayoutWithAppBar>{page}</UserBlankLayoutWithAppBar>

export default LoginWithAppBar
```
</code-block>
</code-group>

## Scroll to Top

If you want to change the scroll to top component, you need to use the `scrollToTop` prop with the `Layout` component in the `src/layouts/UserLayout.tsx` file.

The value accepted by this prop is:

```tsx
scrollToTop?: (props?: any) => ReactNode
```

Here is the code to change the scroll to top component:

<code-group>
<code-block title="TSX" active>
```tsx{24}
import { ReactNode } from 'react'
import Button from '@mui/material/Button'
import Layout from 'src/@core/layouts/Layout'
import ScrollToTop from 'src/@core/components/scroll-to-top'

interface Props {
  children: ReactNode
}

const UserScrollToTop = () => {
  return (
    <ScrollToTop>
      <Button color='success' variant='contained'>
        Scroll To Top
      </Button>
    </ScrollToTop>
  )
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      scrollToTop={() => <UserScrollToTop />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{19}
import Button from '@mui/material/Button'
import Layout from 'src/@core/layouts/Layout'
import ScrollToTop from 'src/@core/components/scroll-to-top'

const UserScrollToTop = () => {
  return (
    <ScrollToTop>
      <Button color='success' variant='contained'>
        Scroll To Top
      </Button>
    </ScrollToTop>
  )
}

const UserLayout = ({ children } => {
  return (
    <Layout
      {...} // other props
      scrollToTop={() => <UserScrollToTop />}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
```
</code-block>
</code-group>

Result:

<img alt='override-scroll-to-top' class='medium-zoom' :src="$withBase('/images/layouts/user-override-scroll-to-top.png')" />
