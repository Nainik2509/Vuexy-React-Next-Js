# Access Control

## Overview

react-material-admin uses the [CASL](https://casl.js.org/v5/en/) package to provide access control. CASL is future-oriented and is more detailed on Access Control.

We suggest you read the [CASL](https://casl.js.org/v5/en/) documentation to learn how it works.

CASL may look complex at first so please make sure you first read their docs carefully and understand the base logic of Access Control to proceed further.

## Config

You can find CASL configuration in `src/configs/acl.ts`.

We have defined two roles `admin` & `client` and their actions in the configuration file.

You'll have to update these roles & actions according to your application requirement.

```js
const defineRulesFor = (role, subject) => {
  const { can, rules } = new AbilityBuilder(AppAbility)

  if (role === 'admin') {
    can('manage', 'all')
  } else if (role === 'client') {
    can(['read'], 'acl-page')
  } else {
    can(['read', 'create', 'update', 'delete'], subject)
  }

  return rules
}
```

## Component

To define a accessible component use `acl` method with `action` & `subject` properties like shown below.

You can also refer `full-version/src/pages/acl/index.tsx` file.

```jsx
const Component = () => <h1>Component</h1>

Component.acl = {
  action: 'read',
  subject: 'component'
}

export default Component
```

## Navigation

Define the `action` & `subject` properties in navigation file to show/hide the navigation links/groups based on user role.

Refer to the example below:

```js
{
  path: '/acl',
  action: 'read',
  subject: 'acl-page',
  icon: ShieldOutline,
  title: 'Access Control'
}
```

## Redirection
Users are redirected on the basis of their role. You can the redirection URL in `sec/pages/index.tsx`

```jsx
export const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/dashboards/analytics'
}
```

## How to remove ACL
It is quite easy to remove access control from the template.

1. Remove the ACLGuard wrapper & ACL related imports from `_app.tsx` file.
2. Remove `action` & `subject` properties if defined in any component or navigation files.
3. Remove the `ability` & `ability.can` function in CanView files in `src/layouts/components/acl` folder.
4. Remove acl config file in `src/configs` folder

