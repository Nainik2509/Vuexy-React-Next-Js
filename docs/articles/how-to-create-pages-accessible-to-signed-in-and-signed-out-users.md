# How to create pages accessible to signed-in and signed-out users

::: warning
This will only work for BlankLayout
:::

You might have some pages that you want to be accessible to signed-in or signed-out users. To create such pages follow these steps:

1. Open `_app.tsx` file and add the `noGuard` variable and update the `authGuard` variable
```jsx
const noGuard = Component.noGuard ?? false
const authGuard = Component.authGuard ?? noGuard ? false : true
```
2. In  `_app.tsx` file replace the `<AclGuard />` component with the following:
```jsx
<AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} noGuard={noGuard}>...</AclGuard>
```
3. If you're using Typescript version then open `next.d.ts` file and add `noGuard?: boolean` type.
4. Open `ACLGuard.tsx` file and extract the `noGuard` prop from the props.
```jsx
const { aclAbilities, children, guestGuard, noGuard } = props
```
5. In `ACLGuard.tsx` file replace the `if statement` with the following:
```jsx
if (guestGuard || router.route === '/404' || router.route === '/500' || router.route === '/' || noGuard) {
  return <>{children}</>
}
```
6. Finally, in your component add the `Component.noGuard = true` at the bottom. Like shown below:
```jsx
// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Component = () => {
  return <div>...</div>
}

Component.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Component.noGuard = true

export default Component
```