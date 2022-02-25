# Sever Side Navigation Menu

## Overview

On this page, you will understand how to use a server side navigation menu in Vertical layout as well as in Horizontal layout.

## Vertical layout

To use the server side navigation menu in the Vertical layout, follow these steps:

- You need to write all of your navigation section titles, navigation groups and navigation links in [this](/guide/layout/navigation-menu-structure.html#vertical-navigation-structure) structure either on your sever / API or in the `src/@fake-db/server-side-menu/vertical.ts` file
- Make an API call from your server in `src/layouts/components/vertical/ServerSideNavItems.tsx` file
- And then import `src/layouts/components/vertical/ServerSideNavItems.tsx` file in `src/layouts/UserLayout.tsx` file and pass it in `verticalNavItems` prop.

<code-group>
<code-block title="TSX" active>
```tsx{5,15}
// src/layouts/UserLayout.tsx

import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'
import ServerSideVerticalNavItems from 'src/layouts/components/vertical/ServerSideNavItems.tsx'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      verticalNavItems={ServerSideVerticalNavItems()}
    >
      {children}
    </Layout>
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{4,10}
// src/layouts/UserLayout.jsx

import Layout from 'src/@core/layouts/Layout'
import ServerSideVerticalNavItems from 'src/layouts/components/vertical/ServerSideNavItems.tsx'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      verticalNavItems={ServerSideVerticalNavItems()}
    >
      {children}
    </Layout>
}

export default UserLayout
```
</code-block>
</code-group>

## Horizontal layout

To use the server side navigation menu in the Horizontal layout, follow these steps:

- You need to write all of your navigation groups and navigation links in [this](/guide/layout/navigation-menu-structure.html#horizontal-navigation-structure) structure either on your sever / API or in the `src/@fake-db/server-side-menu/horizontal.ts` file
- Make an API call from your server in `src/layouts/components/horizontal/ServerSideNavItems.tsx` file
- And then import `src/layouts/components/horizontal/ServerSideNavItems.tsx` file in `src/layouts/UserLayout.tsx` file and pass it in `horizontalNavItems` prop.

<code-group>
<code-block title="TSX" active>
```tsx{5,15}
// src/layouts/UserLayout.tsx

import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'
import ServerSideHorizontalNavItems from 'src/layouts/components/horizontal/ServerSideNavItems.tsx'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      horizontalNavItems={ServerSideHorizontalNavItems()}
    >
      {children}
    </Layout>
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{4,10}
// src/layouts/UserLayout.jsx

import Layout from 'src/@core/layouts/Layout'
import ServerSideHorizontalNavItems from 'src/layouts/components/horizontal/ServerSideNavItems.tsx'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      horizontalNavItems={ServerSideHorizontalNavItems()}
    >
      {children}
    </Layout>
}

export default UserLayout
```
</code-block>
</code-group>
