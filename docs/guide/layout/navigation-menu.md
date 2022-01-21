---
sidebarDepth: 2
---

# Navigation Menu

## Overview

While creating the navigation menu, you need to know the structure of it. On this page, you will understand how to create a navigation section title (only in the vertical navigation menu), navigation group and navigation link.

## Vertical Navigation Structure

You can write your vertical navigation in `src/navigation/vertical/index.ts` file. Following are the items that you can create for your vertical navigation:

- [Navigation Section Header](#_1-navigation-section-header)
- [Navigation Group](#_2-navigation-group)
- [Navigation Link](#_3-navigation-link)

### 1. Navigation Section Header

It is used to group some navigation groups and/or navigation links in some sections. This is only used in vertical navigation menu. To create a navigation section, you need to add an object with following structure:

```ts
type NavSectionTitle = {
  sectionTitle: string
}
```

Here is the example code:

```ts
{
  sectionTitle: 'Apps & Pages'
}
```

Result:

<img height='200' class='medium-zoom' alt='navigation-section-header' :src="$withBase('/images/layouts/navigation-section-header.png')" />

### 2. Navigation Group

It is used to group some navigation groups and/or navigation links that can be treated as an accordion or a collapse. To create a navigation group, you need to add an object with following structure:

```ts
type NavGroup = {
  title: string
  icon?: ReactNode
  badgeContent?: string
  children?: (NavGroup | NavLink)[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}
```

Here is the example code:

```ts
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      badgeContent: '3',
      title: 'Components',
      icon: ArchiveOutline,
      badgeColor: 'success',
      children: [
        {
          title: 'Accordion',
          path: '/components/accordion'
        },
        {
          title: 'Cards',
          children: [
            {
              title: 'Basic',
              path: '/components/cards/basic'
            },
            {
              title: 'Advanced',
              path: '/components/cards/advanced'
            }
          ]
        },
        {
          title: 'Chips',
          path: '/components/chips'
        }
      ]
    }
  ]
}

export default navigation
```

Result:

<img alt='navigation-group' class='medium-zoom' :src="$withBase('/images/layouts/navigation-vertical-group.png')" />

### 3. Navigation Link

To create a navigation link, you need to add an object with following structure:

```ts
type NavLink = {
  title: string
  path?: string
  action?: string // for ACL
  icon?: ReactNode
  subject?: string // for ACL
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}
```

Here is the example code:

```ts
import MaterialUi from 'mdi-material-ui/MaterialUi'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      badgeColor: 'error',
      badgeContent: 'New',
      title: 'Form Validation',
      path: '/forms/form-validation',
      icon: CheckboxMarkedCircleOutline
    },
    {
      disabled: true,
      icon: EyeOffOutline,
      title: 'Disabled Menu'
    },
    {
      icon: MaterialUi,
      title: 'MUI Docs',
      externalLink: true,
      openInNewTab: true,
      path: 'https://mui.com/getting-started/usage/'
    }
  ]
}

export default navigation
```

Result:

<img alt='navigation-links' class='medium-zoom' :src="$withBase('/images/layouts/navigation-vertical-links.png')" />

## Horizontal Navigation Structure

You can write your horizontal navigation in `src/navigation/horizontal/index.ts` file. Following are the items that you can create for your horizontal navigation:

- [Navigation Group](#_1-navigation-group)
- [Navigation Link](#_2-navigation-link)

### 1. Navigation Group

It is used to group some navigation groups and/or navigation links that is opened in a tooltip. To create a navigation group, you need to add an object with following structure:

```ts
type NavGroup = {
  title: string
  icon?: ReactNode
  badgeContent?: string
  children?: (NavGroup | NavLink)[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}
```

Here is the example code:

```ts
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import PaletteSwatchOutline from 'mdi-material-ui/PaletteSwatchOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: 'UI',
      badgeContent: '3',
      badgeColor: 'warning',
      icon: PaletteSwatchOutline,
      children: [
        {
          title: 'Typography',
          icon: FormatLetterCase,
          path: '/ui/typography'
        },
        {
          title: 'Components',
          icon: ArchiveOutline,
          children: [
            {
              title: 'Accordion',
              path: '/components/accordion'
            },
            {
              title: 'Alerts',
              path: '/components/alerts'
            }
          ]
        },
        {
          title: 'Icons',
          path: '/ui/icons',
          icon: GoogleCirclesExtended
        }
      ]
    }
  ]
}

export default navigation
```

Result:

<img alt='navigation-group' class='medium-zoom' :src="$withBase('/images/layouts/navigation-horizontal-group.png')" />

### 2. Navigation Link

To create a navigation link, you need to add an object with following structure:

```ts
type NavLink = {
  title: string
  path?: string
  action?: string // for ACL
  icon?: ReactNode
  subject?: string // for ACL
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}
```

Here is the example code:

```ts
import MaterialUi from 'mdi-material-ui/MaterialUi'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      badgeColor: 'error',
      badgeContent: 'New',
      title: 'Form Validation',
      path: '/forms/form-validation',
      icon: CheckboxMarkedCircleOutline
    },
    {
      disabled: true,
      icon: EyeOffOutline,
      title: 'Disabled Menu'
    },
    {
      icon: MaterialUi,
      title: 'MUI Docs',
      externalLink: true,
      openInNewTab: true,
      path: 'https://mui.com/getting-started/usage/'
    }
  ]
}

export default navigation
```

Result:

<img alt='navigation-links' class='medium-zoom' :src="$withBase('/images/layouts/navigation-horizontal-links.png')" />
