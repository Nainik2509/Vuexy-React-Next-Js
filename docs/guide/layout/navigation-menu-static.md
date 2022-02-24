# Static Navigation Menu

## Overview

On this page, you will understand how to use a static navigation menu in Vertical layout as well as in Horizontal layout.

## Vertical layout

To use the static navigation menu in the Vertical layout, follow these steps:

- You need to write all of your navigation section titles, navigation groups and navigation links in [this](/guide/layout/navigation-menu-structure.html#vertical-navigation-structure) structure in the `src/navigation/vertical/index.ts` file
- And then import `src/navigation/vertical/index.ts` file in `src/layouts/UserLayout.tsx` file and pass it in `verticalNavItems` prop.

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
```

## Horizontal layout

To use the static navigation menu in the Horizontal layout, follow these steps:

- You need to write all of your navigation groups and navigation links in [this](/guide/layout/navigation-menu-structure.html#horizontal-navigation-structure) structure in the `src/navigation/horizontal/index.ts` file
- And then import `src/navigation/horizontal/index.ts` file in `src/layouts/UserLayout.tsx` file and pass it in `horizontalNavItems` prop.

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
```
