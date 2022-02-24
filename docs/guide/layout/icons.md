# Icons

## Overview

We have used Material Design Icons from the community in the whole template. You may visit the site and check all the icons [here](https://materialdesignicons.com/). Users are free to use any icon library of their choice.

We have created the `UserIcon` component in the `src/layouts/components/UserIcon.tsx` file, sole purpose of this component is to enable users to override icons used in the menu & search and use any icon library of their choice. It is used in the `src/@core` folder in the vertical menu, horizontal menu and search.

::: warning
Do not use this component in any of your pages. You should import icons from your icon library and use them directly. This component should only be used to override menu and search icons and their styling.
:::

::: danger Heads Up!
Do not remove the `mdi-material-ui` package from the `package.json` file and `src/layouts/components/UserIcon.tsx` file; otherwise, the whole app would break. There may be some instances where those icons will be used in the `src/@core` folder and will be impossible to remove that completely from the app.
:::

## Props

The props that are available to this component are as follows:

| Prop          | Type                                                 | Required | Description                                                                                             |
| ------------- | :--------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------ |
| icon          | `string`, `string[]` or `ReactNode`                  | Yes      | Name of the icon                                                                                        |
| iconProps     | SvgIconProps                                         | No       | All the props related to the icon goes in this prop as an object. For eg., fontSize, color, style, etc. |
| componentType | `'search'`, `'vertical-menu'` or `'horizontal-menu'` | Yes      | Mention which type of component this icon is used in                                                    |

## Override with MUI Material Icons

You may go through the [MUI Docs](https://mui.com/components/icons/) for installation and more details. You may check all the icons [here](https://mui.com/components/material-icons/).

### Static Navigation Menu

Suppose, you want to override the icons in the vertical menu with MUI Material Icons by Google, you need to import icons from the `@mui/icons-material` package and remove other icons' import statements in and from the `src/navigation/vertical/index.ts` file respectively.

```ts
// src/navigation/vertical/index.ts

import MailTwoTone from '@mui/icons-material/MailTwoTone'
import ChatBubbleTwoTone from '@mui/icons-material/ChatBubbleTwoTone'
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Email',
      icon: MailTwoTone,
      path: '/apps/email'
    },
    {
      title: 'Chat',
      icon: ChatBubbleTwoTone,
      path: '/apps/chat'
    },
    {
      title: 'User',
      icon: PersonOutlineTwoTone,
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        },
        {
          title: 'View',
          path: '/apps/user/view'
        }
      ]
    }
  ]
}
```

If you also want to change the icon for the submenu, you need to change it in the `themeConfig.ts` file.

```ts{7}
// src/configs/themeConfig.ts

import CircleTwoTone from '@mui/icons-material/CircleTwoTone'

const themeConfig: ThemeConfig = {
  ...,
  navSubItemIcon: CircleTwoTone
}
```

### Server Side Navigation Menu

::: tip Note
Use Icon component as **string** in your data.
:::

Do the same as shown for the static navigation menu and the only difference is that you need to change the icons as strings in your server / API. In addition to this, you need to change the import statement from `import * as Icons from 'mdi-material-ui'` to `import * as Icons from '@mui/icons-material'` in the `src/layouts/components/vertical/ServerSideNavItems.tsx` file.

Result:

<img alt='material icons google' class='medium-zoom' :src="$withBase('/images/icons/icons-material-google.png')" />

## Third Party Icons

::: tip
If you want to use any third party icon library, we suggest you use the `react-icons` package. It provides most of the famous icons such as Material Design Icons, FontAwesome Icons, Feather Icons, React Bootstrap Icons, Ant Design Icons, BoxIcons, etc.
:::

### React Icons

You may go through the [React Icons](https://www.npmjs.com/package/react-icons) for installation and more details.

### Static Navigation Menu

Suppose you want to override the icons in the vertical menu with FontAwesome Icons from the `react-icons` package, you need to import icons from the `react-icons/fa` package and remove other icons' import statements in and from the `src/navigation/vertical/index.ts` file respectively.

```ts
// src/navigation/vertical/index.ts

import { FaEnvelope } from 'react-icons/fa'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    ...,
    {
      title: 'Email',
      icon: FaEnvelope,
      path: '/apps/email'
    }
  ]
}
```

If you also want to change the icon for the submenu, you need to change it in the `themeConfig.ts` file.

```ts{7}
// src/configs/themeConfig.ts

import { FaArrowRight } from 'react-icons/fa'

const themeConfig: ThemeConfig = {
  ...,
  navSubItemIcon: FaArrowRight
}
```

### Server Side Navigation Menu

::: tip Note
Use Icon component as **string** in your data.
:::

Do the same as shown for the static navigation menu and the only difference is that you need to change the icons as strings in your server / API. In addition to this, you need to change the import statement from `import * as Icons from 'mdi-material-ui'` to `import * as Icons from 'react-icons/fa'` in the `src/layouts/components/vertical/ServerSideNavItems.tsx` file.

Result:

<img alt='react icons - font awesome' class='medium-zoom' :src="$withBase('/images/icons/icons-react-font-awesome.png')" />

### Font Awesome Icons

You may go through the [Font Awesome Docs](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) for installation and more details. You may check all the icons [here](https://fontawesome.com/v5.15/icons).

::: warning
If you decide to use Font Awesome Icon as a stand-alone library and not use React Icons, you need to make sure you change all the icons present in the menu and search due to difference in icon rendering process in the `UserIcon` component in `src/layouts/components/UserIcon.tsx` file.
:::

You can change the icons in the vertical menu, horizontal menu and search as shown above. The icon for the submenu will also be changed as shown above. In addition to this, you need to update the return statement in `src/layouts/components/UserIcon.tsx` file:

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserIcon = (props: UserIconProps) => {
  return <FontAwesomeIcon icon={icon} {...iconProps} style={{ ...styles }} />
}
```

Result:

<img alt='icons-font-awesome' class='medium-zoom' :src="$withBase('/images/icons/icons-font-awesome.png')" />
