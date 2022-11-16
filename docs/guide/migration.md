---
sidebarDepth: 0
---

# Migration Guide

## 1.4.0 to 2.0.0

You might have already guessed it from the version change that it contains breaking changes.

There are mainly two breaking changes, **Next.js v13** update and changing **Icon library**.

- We suggest you to compare your `package.json` file with the template’s `package.json` file first and update all the dependencies according to the template.
- Replace your `src/@core` folder with the template’s `src/@core` folder.
- Due to Next.js v13 update, most of your links may break. Please refer Next.js v13 [guide](https://nextjs.org/docs/advanced-features/codemods#new-link) to fix this breaking change. We have already fixed this in the template but you must manually fix all the links in your project. If you have used Next.js Image component, then you need to manually update your Image components according to [this guide](https://nextjs.org/blog/next-13#nextimage). We have not used Next.js Image component in the template and thus we didn't need to fix them. Please refer to the official Next.js [blog](https://nextjs.org/blog/next-13) for detailed explanation on what has been updated in the Next.js v13.
- If you want to add the new pages into your project, then you need to manually add them from the `src/pages` and `src/views` folders.
- Next major change is Icon library which is explained in detail below.

### Icons

We have removed the Material Design Icons (by Community) and replaced all the icons with the [Iconify](https://iconify.design/) icons.

We apologize for changing the icon library but it will ease everyone's life to use any icon from any library and we are really excited about this change.

Please refer to [this](/guide/layout/icons.html) doc to know the Iconify icons' usage, generating bundle and using icons from the generated icon bundle. Unfortunately, you must update your icons manually.

Please refer to the following example code to migrate from MDI to Iconify icons:

***from*:**

```tsx
import Menu from 'mdi-material-ui/Menu'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import AccountBoxOutline from 'mdi-material-ui/AccountBoxOutline'

const Component = () => {
  return (
    <>
      <Menu fontSize='small' />
      <AccountBoxOutline sx={{ mb: 0.5 }} />
      <AccountOutline sx={{ color: theme => theme.palette.text.secondary }} />
    </>
  )
}
```

***to*:**

```tsx
import Box from '@mui/material/Box'
import Icon from 'src/@core/components/icon'

const Component = () => {
  return (
    <>
      <Icon icon='mdi:menu' fontSize={20} />
      <Icon icon='mdi:menu' fontSize='1.25rem' />
      <Box sx={{ '& svg': { mb: 0.5 } }}>
        <Icon icon='mdi:account-box-outline' />
      </Box>
      <Box sx={{ color: theme => theme.palette.text.secondary }}>
        <Icon icon='mdi:account-outline' />
      </Box>
    </>
  )
}

export default Component
```

::: warning
We have removed support and examples of **MUI's Date-picker**. We suggest you to use `react-datepicker` instead.

In case, you want to continue using MUI's Date-picker, then you need to update the styling as per your requirements.
:::
