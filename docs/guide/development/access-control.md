# Access Control (ACL)

In this page you will understand usage of ACL in our template and how you can use it.

## Overview

react-material-admin uses [CASL](https://casl.js.org/v4/en/guide/intro) package for providing access control. Which is future oriented and is more detailed on Access Control.

You can read the CASL docs from [here](https://casl.js.org/v4/en/guide/intro)

CASL may look complex at first so please make sure you first read their docs carefully and understand base logic of Access Control to proceed further.

## ACL Flow

You can find CASL configuration in `src/configs/acl` folder.

We've also created a `Can` context to verify user abilities. You can find the context in `src/utility/Can.js`

Let's explore ACL related files:

- **ability.ts**: This file exports ACL ability.
- **initialAbility.ts**: This file exports users initial ability.

## ability.ts

It imports `initialAbility` & exports current user's ability. If user is not logged in or user's ability isn't retrieved from localStorage then it uses `initialAbility` defined in `initialAbility`.js file.

Once user logs in ability is updated using ability.update(newAbility) from Can Context. Sample newAbility array:

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
We are getting user ability on refresh from `userData` which is stored in localStorage. We have stored ability in `userData.ability`. If you have different approach for storing and retrieving ability then please update `src/configs/acl/ability.js` file.
:::

## Route Protection

You can protect your route from being visited by other users through as well. We already configured function in `PrivateRoute` component to redirect user to not authorized page if user don't have ability for that route. All you have to do is use route meta to define user ability.

```js
{
  path: '/access-control',
  component: lazy(() => import('views/pages/access-control')),
  meta: {
    action: 'read',
    resource: 'ACL'
  }
}
```

Here, resource refers to subject in CASL [docs](https://casl.js.org/v4/en/guide/intro#basics)

Once you define ability for route using meta, if user don't have defined ability for visiting route then it will be redirected to not authorized page.

If user is not logged in and try to visit the route with ability which user don't have then user will get redirected to login page instead of not authorized page.

## Omitting Defining `resource` and `action` for route

If you do not define resource and action then only user with below ability will be able to visit the route:

```js
{
  action: 'manage',
  subject: 'all'
}
```

::: tip
`manage` and `all` are special keywords in CASL. `manage` represents any action and `all` represents any subject.
:::

So, in your project if you don't have any user with above mentioned ability and you don't define `action` and `resource` for route then no one will be able to visit that route ever.

::: tip
We have user (Admin user) with above mentioned ability in our demo. That's why we don't have to write `action` and `resource` on each route.
:::

## Show/Hide Navigation Items

Besides route protection you can also show/hide navigation items based on user ability.

Besides existing options provided by navigation items there's two more option you can specify if you use ACL.

- **resource**: This refers to subject in CASL docs
- **action**: This is action for ability.

Add these two options in your navigation item to show/hide navigation items based on user ability.

Omitting defining resource and action for groups

You can optionally define `resource` & `action` on navigation item type which have children:

- Vertical Navigation Menu Group
- Horizontal Navigation Menu Group
- Horizontal Navigation Menu Header Group

e.g. If you have vertical navigation menu group and your provided both options for every group child and you want to hide group if all it's child don't have ability then don't worry about adding both option in menu group options. We already handled hiding group if none of it's child is visible. Means, We will hide group if there's no child to render due to lack of ability.

```js
/** Both group child have `resource` and `action` defined
   * So, If I omit defining `resource` and `action` for group
   * => then group will be hidden if both child are hidden
   * Conclusion: You can omit defining `resource` and `action` for group if you want this kind of behavior
*/
{
    id: 'access-control',
    title: 'Access Control',
    icon: <Shield size={12} />,
    action: 'read',
    resource: 'ACL',
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
