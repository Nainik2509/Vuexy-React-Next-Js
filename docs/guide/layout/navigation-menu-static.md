# Static Navigation Menu

## Overview

On this page, you will understand how to use a static navigation menu in Vertical layout as well as in Horizontal layout.

## Vertical layout

To use the static navigation menu in the Vertical layout, follow these steps:

- You need to write all of your navigation section titles, navigation groups and navigation links in [this](/guide/layout/navigation-menu-structure.html#vertical-navigation-structure) structure in the `src/navigation/vertical/index.ts` file
- And then import `src/navigation/vertical/index.ts` file in `src/layouts/UserLayout.tsx` file and pass it in `verticalNavItems` prop.

<code-group>
<code-block title="TSX" active>
```tsx{5,15}
// src/layouts/UserLayout.tsx

import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'
import VerticalNavItems from 'src/navigation/vertical'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      verticalNavItems={VerticalNavItems()}
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
import VerticalNavItems from 'src/navigation/vertical'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      verticalNavItems={VerticalNavItems()}
    >
      {children}
    </Layout>
}

export default UserLayout
```
</code-block>
</code-group>

## Horizontal layout

To use the static navigation menu in the Horizontal layout, follow these steps:

- You need to write all of your navigation groups and navigation links in [this](/guide/layout/navigation-menu-structure.html#horizontal-navigation-structure) structure in the `src/navigation/horizontal/index.ts` file
- And then import `src/navigation/horizontal/index.ts` file in `src/layouts/UserLayout.tsx` file and pass it in `horizontalNavItems` prop.

<code-group>
<code-block title="TSX" active>
```tsx{5,15}
// src/layouts/UserLayout.tsx

import { ReactNode } from 'react'
import Layout from 'src/@core/layouts/Layout'
import HorizontalNavItems from 'src/navigation/horizontal'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Layout
      {...} // other props
      horizontalNavItems={HorizontalNavItems()}
    >
      {children}
    </Layout>
}

export default UserLayout
```
</code-block>

<code-block title="JSX">
```jsx{4,10}
// src/layouts/UserLayout.tsx

import Layout from 'src/@core/layouts/Layout'
import HorizontalNavItems from 'src/navigation/horizontal'

const UserLayout = ({ children }) => {
  return (
    <Layout
      {...} // other props
      horizontalNavItems={HorizontalNavItems()}
    >
      {children}
    </Layout>
}

export default UserLayout
```
</code-block>
</code-group>
