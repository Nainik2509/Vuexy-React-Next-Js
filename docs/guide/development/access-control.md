# Access Control (ACL)

## Overview

react-material-admin uses [CASL](https://casl.js.org/v4/en/guide/intro) package for providing access control. Which is future oriented and is more detailed on Access Control.

You can read the CASL docs from [here](https://casl.js.org/v4/en/guide/intro)

CASL may look complex at first so please make sure you first read their docs carefully and understand base logic of Access Control to proceed further.

## ACL Flow

You can find CASL configuration in `src/configs/acl` folder.

We've also created a `Can` context to verify user abilities. You can find the context in `src/@core/context/Can.tsx`

Let's explore ACL related fileFwars:

- **ability.ts**: This file check exports ACL ability.
- **initialAbility.ts**: This file exports users initial ability.

## ability.ts

This file imports `initialAbility` & exports current user's ability. If user is not logged in or user's ability isn't available from localStorage then it uses `initialAbility` defined in `initialAbility.ts` file.

Once user logs in ability is updated using ability.update(newAbility) using Can Context. Sample newAbility array:

```js
newAbility: [
  {
    action: 'read',
    subject: 'User'
  }
]
```

Also, this same ability is stored in user's object userData in localStorage under ability property.

```js
// User data stored in localStorage

{
  id: 1,
  fullName: "John Doe",
  username: "johndoe",
  avatar: "/img/13-small.d796bffd.png",
  email: "admin@demo.com",
  ability: [
    {
      action: "manage",
      subject: "all"
    }
  ],
  // more...
}
```

::: tip
We are getting user ability on refresh from `userData` which is stored in localStorage. We have stored ability in `userData.ability`. If you have different approach for storing and retrieving ability then please update `src/configs/acl/ability.ts` file.
:::

## Route Protection

You can protect your route from being visited by other users as well.
We already configured `handleRedirection` function in the `_app.tsx` file to redirect the user to not authorized page
if the user doesn't have the ability to `read` that route. All you have to do is use `getInitialProps` in your component to define the `action` & `subject`.

```jsx
const AnalyticsDashboard = () => <h1>Analytics Dashboard</h1>

AnalyticsDashboard.getInitialProps = () => {
  return {
    action: 'read',
    subject: 'analytics'
  }
}
export default AnalyticsDashboard
```

## Show/Hide Navigation Items

Besides route protection you can also show/hide navigation items based on user ability.

Besides existing options provided by navigation items there's two more option you can specify if you use ACL.

- **subject**: This refers to subject in CASL docs
- **action**: This is action for ability.

Add these two options in your navigation item to show/hide navigation items based on user ability.

Omitting defining resource and action for groups

You can optionally define `subject` & `action` on navigation item type which have children:

- Vertical Navigation Menu Group
- Horizontal Navigation Menu Group
- Horizontal Navigation Menu Header Group

e.g. If you have vertical navigation menu group and your provided both options for every group child and you want to hide group if all it's child don't have ability then don't worry about adding both option in menu group options. We already handled hiding group if none of it's child is visible. Means, We will hide group if there's no child to render due to lack of ability.

```js
/** Both group child have `subject` and `action` defined
   * So, If I omit defining `subject` and `action` for group
   * => then group will be hidden if both child are hidden
   * Conclusion: You can omit defining `subject` and `action` for group if you want this kind of behavior
*/
{
    id: 'access-control',
    title: 'Access Control',
    icon: <Shield size={12} />,
    action: 'read',
    subject: 'ACL',
    navLink: '/access-control'
}
```

## Group & ACL scenarios

::: tip Note
"can be viewed" means ACL ability is resolved to true and user can view it. "hidden" means ACL ability is resolved to false and user can't view it.
:::

Please note this scenarios apply to all three group types of navigation item:

- Vertical Navigation Menu Group
- Horizontal Navigation Menu Group
- Horizontal Navigation Menu Header Group

## canViewMenuGroup & canViewMenuItem

If you're using starter-kit you'll have to wrap your `VerticalNavItems.tsx` or `HorizontalNavItems.tsx` with `canViewMenuGroup` & `canViewMenuItem` functions to show/hide the menu items according to user role.

You can refer to the `VerticalNavItems.tsx` or `HorizontalNavItems.tsx` file from the full-version as an example.
