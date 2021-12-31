---
sidebarDepth: 2
---

# Layout Overrides

## Overview

The `layouts` folder in the root of the `src` folder is for users to override layouts built in the `@core` folder. It is highly recommended to override layouts in the `layouts` folder instead of directly working in the `@core` folder. This will ease your updates to newer versions without facing any hassle of backing up your current code, else it will override your changes in the `@core` folder each time you take an update.

All the layout components explained on this page are overridden in `src/layouts/UserLayout.tsx` and `src/layouts/UserBlankLayoutWithAppBar.tsx` files.

## Vertical Layout

You can override the following layout components:

- [App Logo](#_1-app-logo)
- [Menu collapse icons](#_2-menu-collapse-icons)
- [Vertical menu items](#_3-vertical-menu-items)
- [Add content before menu items](#_4-add-content-before-menu-items)
- [Add content after menu items](#_5-add-content-after-menu-items)
- [Hide menu based on screen size](#_6-hide-menu-based-on-screen-size)
- [Navbar (or AppBar)](#_7-navbar-or-appbar)
- [Footer](#_8-footer)

### 1. App Logo

If you want to change the app logo, you need to use `verticalNavMenuBranding` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
verticalNavMenuBranding?: (props?: any) => ReactNode
```

Here is the code to change the app logo:

```tsx
import { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Image src='...' alt='logo' width={30} height={30} />
      <Typography variant='h6' sx={{ ml: 2 }}>
        React
      </Typography>
    </Box>
  )
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavMenuBranding={() => <AppBrand />}
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

Result:

![override-app-brand](/images/layouts/user-override-vertical-app-brand.png)

:::warning NOTE
When you override the app logo and when the menu is collapsed, `padding-left` of the menu header will reduce to 0. To center align your logo, you need to manually add `margin-left` to your overridden logo.
:::

### 2. Menu collapse icons

If you want to change the icons for collapsing the vertical menu, you need to use `menuLockedIcon` prop (when the menu is not collapsed) and `menuUnlockedIcon` prop (when the menu is collapsed) with the `Layout` component.

The values accepted by these prop are:

```tsx
menuLockedIcon?: ReactNode
menuUnlockedIcon?: ReactNode
```

Here is the code to change the icons for collapsing the vertical menu:

```tsx
import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowLeftBoldCircleOutline from 'mdi-material-ui/ArrowLeftBoldCircleOutline'
import ArrowRightBoldCircleOutline from 'mdi-material-ui/ArrowRightBoldCircleOutline'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      menuLockedIcon={<ArrowLeftBoldCircleOutline />}
      menuUnlockedIcon={<ArrowRightBoldCircleOutline />}
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

Result of `menuLockedIcon`:

<img height='400' alt='override-menu-locked' src='/images/layouts/user-override-menu-locked.png'>

Result of `menuUnlockedIcon`:

<img height='400' alt='override-menu-unlocked' src='/images/layouts/user-override-menu-unlocked.png'>

### 3. Vertical menu items

If you want to change the menu, you need to use `verticalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
verticalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to change the menu:

```tsx
import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

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
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavMenuContent={() => <Menu />}
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

Result:

![override-menu](/images/layouts/user-override-vertical-menu.png)

### 4. Add content before menu items

If you want to add something before the menu items, you need to use `beforeVerticalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
beforeVerticalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to add user info before the menu items:

```tsx
import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Theme, styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

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
        <Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
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
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      beforeVerticalNavMenuContent={() => <User />}
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

Result:

![add-content-before-menu-items](/images/layouts/user-add-content-before-menu-items.png)

### 5. Add content after menu items

If you want to add something after the menu items, you need to use `afterVerticalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
afterVerticalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to menu footer info after the menu items:

```tsx
import { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const MenuFooter = () => {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Image src='...' width={230} height={144} alt='menu-footer' />
    </Box>
  )
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      afterVerticalNavMenuContent={() => <MenuFooter />}
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

Result:

![add-content-before-menu-items](/images/layouts/user-add-content-after-menu-items.png)

### 6. Hide menu based on screen size

`hidden` prop is used to hide the vertical menu at given screen size. The menu will be accessible from the Hamburger menu icon only which is known as the Vertical Overlay Menu. You can change the screen size from which you want to hide the vertical menu.

In the example below, the vertical menu is visible above the `lg` breakpoint and on screen size below the `lg` breakpoint, it will change to a vertical overlay menu which can be accessed from the Hamburger menu icon.

```tsx
const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
```

You can also change its value using a specific screen size:

```tsx
const hidden = useMediaQuery('(max-width:1365px)')
```

### 7. Navbar (or AppBar)

If you want to change the navbar, you need to use `verticalAppBarContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
verticalAppBarContent?: (props?: any) => ReactNode
```

Here is the code to change the appBar:

```tsx
import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const AppBar = () => {
    return (
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <UserDropdown settings={settings} />
      </Box>
    )
  }

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalAppBarContent={() => <AppBar />}
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

Result:

![override-appBar](/images/layouts/user-override-vertical-appBar.png)

### 8. Footer

If you want to change the footer, you need to use `footerContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
footerContent?: (props?: any) => ReactNode
```

Here is the code to change the footer:

```tsx
import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      footerContent={() => 'I am footer which is overridden by the user'}
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

Result:

![override-footer](/images/layouts/user-override-vertical-footer.png)

## Horizontal Layout

You can override the following layout components:

- [App Logo](#_1-app-logo)
- [Horizontal menu items](#_2-horizontal-menu-items)
- [Hide menu based on screen size](#_3-hide-menu-based-on-screen-size)
- [AppBar Content](#_5-appbar-content)
- [Footer](#_5-footer)

### 1. App Logo

If you want to change the app logo, you need to use `horizontalAppBarBranding` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
horizontalAppBarBranding?: (props?: any) => ReactNode
```

Here is the code to change the app logo:

```tsx
import { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const AppBrand = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Image src='/images/icons/project-icons/react.png' alt='logo' width={30} height={30} />
      <Typography variant='h6' sx={{ ml: 2 }}>
        React
      </Typography>
    </Box>
  )
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      horizontalAppBarBranding={() => <AppBrand />}
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

Result:

![override-app-brand](/images/layouts/user-override-horizontal-app-brand.png)

### 2. Horizontal menu items

If you want to change the menu, you need to use `horizontalNavMenuContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
horizontalNavMenuContent?: (props?: any) => ReactNode
```

Here is the code to change the menu:

```tsx
import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      horizontalNavMenuContent={() => 'I am menu which is overridden by the user'}
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

Result:

![override-menu](/images/layouts/user-override-horizontal-menu.png)

### 3. Hide menu based on screen size

`hidden` prop is used to hide the horizontal menu at given screen size. The menu will be accessible from the Hamburger menu icon only which is known as the Vertical Overlay Menu. You can change the screen size from which you want to hide the horizontal menu.

In the example below, the horizontal menu is visible above the `lg` breakpoint and on screen size below the `lg` breakpoint, it will change to a vertical overlay menu which can be accessed from the Hamburger menu icon.

```tsx
const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
```

You can also change its value using a specific screen size:

```tsx
const hidden = useMediaQuery('(max-width:1365px)')
```

### 4. AppBar Content

If you want to change the content in the navbar which is on the right side, you need to use `horizontalAppBarContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
horizontalAppBarContent?: (props?: any) => ReactNode
```

Suppose you need the app logo, navigation menu as well as some actions in one line, then you need to follow the steps given below.

Firstly, you need to hide the navigation menu section which is below the appBar from `src/configs/themeConfig.ts` file:

```tsx
const themeConfig: ThemeConfig = {
  ...,
  navHidden: true,
  ...
}
```

Then you need to add the navigation menu and some actions in the appBar using `horizontalAppBarContent` prop with the `Layout` component:

```tsx
import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'
import Navigation from 'src/@core/layouts/components/horizontal/navigation'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const AppBarContent = (props: any) => {
    return (
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Navigation {...props} />
        <UserDropdown settings={settings} />
      </Box>
    )
  }

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      horizontalAppBarContent={(props: any) => <AppBarContent {...props} />}
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

Result:

![override-appBar](/images/layouts/user-override-horizontal-appBar.png)

### 5. Footer

If you want to change the footer, you need to use `footerContent` prop with the `Layout` component.

The value accepted by this prop is:

```tsx
footerContent?: (props?: any) => ReactNode
```

Here is the code to change the footer:

```tsx
import { ReactNode } from 'react'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      footerContent={() => 'I am footer which is overridden by the user'}
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

Result:

![override-footer](/images/layouts/user-override-horizontal-footer.png)

## Blank Layout with AppBar

If you want to change the navbar, you need to use `appBarContent` prop with the `BlankLayoutWithAppBar` component in `src/layouts/UserBlankLayoutWithAppBar.tsx` file.

The value accepted by this prop is:

```tsx
appBarContent?: (props?: any) => ReactNode
```

Here is the code to change the appBar:

```tsx
import { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'

interface Props {
  children: ReactNode
}

const AppBarContent = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Image src='...' alt='logo' width={30} height={30} />
      <Typography variant='h6' sx={{ ml: 2 }}>
        React
      </Typography>
      <Typography sx={{ ml: 6 }}>I am appBar which is overridden by the user</Typography>
    </Box>
  )
}

const UserBlankLayoutWithAppBar = ({ children }: Props) => {
  return <BlankLayoutWithAppBar appBarContent={() => <AppBarContent />}>{children}</BlankLayoutWithAppBar>
}

export default UserBlankLayoutWithAppBar
```

Result:

![override-blank-layout-appBar](/images/layouts/user-override-blank-layout-appBar.png)

## Scroll to Top

If you want to change the scroll to top component, you need to use `scrollToTop` prop with the Layout component in `src/layouts/UserLayout.tsx` file.

The value accepted by this prop is:

```tsx
scrollToTop?: (props?: any) => ReactNode
```

Here is the code to change the scroll to top component:

```tsx
import { ReactNode } from 'react'
import Button from '@mui/material/Button'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'
import { useSettings } from 'src/@core/hooks/useSettings'
import HorizontalNavItems from 'src/navigation/horizontal'
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
  const { settings, saveSettings } = useSettings()

  return (
    <Layout
      settings={settings}
      saveSettings={saveSettings}
      scrollToTop={() => <UserScrollToTop />}
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

Result:

![override-scroll-to-top](/images/layouts/user-override-scroll-to-top.png)
