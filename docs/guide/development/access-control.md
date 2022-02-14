# Access Control

## Overview

Master uses the [CASL](https://casl.js.org/v5/en/) package to provide access control. CASL is future-oriented and is more detailed on Access Control.

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

To define an accessible component use `acl` method with `action` & `subject` properties like shown below.

You can also refer `full-version/src/pages/acl/index.tsx` file for implementation.

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

## Home URL

Please update Home URL based on User role in `src/pages/index.tsx` file. Currently we have set default URL for client and Admin like following:

```tsx
/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/dashboards/analytics'
}
```

## How to remove ACL

It is quite easy to remove access control from the template.

1. Remove the ACLGuard wrapper & ACL related imports from `_app.tsx` file.

    Change Following code from:

    ```tsx
    // Code before removing ACL Guard
    <Guard authGuard={authGuard} guestGuard={guestGuard}>
      <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
        {getLayout(<Component {...pageProps} />)}
      </AclGuard>
    </Guard>
    ```

    to

    ``` tsx
    // Code after removing ACL Guard
    <Guard authGuard={authGuard} guestGuard={guestGuard}>
      {getLayout(<Component {...pageProps} />)}
    </Guard>
    ```

2. Remove `acl` object from components, `action` & `subject` properties if defined in any navigation files.

    Component from:

    ```tsx
    const Component = () => <h1>Component</h1>

    Component.acl = {
      action: 'read',
      subject: 'component'
    }

    export default Component
    ```

    to

    ```tsx
    const Component = () => <h1>Component</h1>

    export default Component
    ```

    Navigation object from:

    ```ts
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      icon: ShieldOutline,
      title: 'Access Control'
    }
    ```

    to

    ```ts
    {
      path: '/acl',
      icon: ShieldOutline,
      title: 'Access Control'
    }
    ```

3. Update Home URL like following:

    ```jsx
    /**
    *  Set Home URL based on User Roles
    */
    export const getHomeRoute = (role: string) => {
      return '/dashboards/analytics'
    }
    ```

    OR

    Empty `src/pages/index.tsx` file and render your Home component like following:

    ```tsx
    const Component = () => <h1>Component</h1>
    
    export default Component
    ```

4. Remove the `ability` & `ability.can` function in all the CanView files in `src/layouts/components/acl` folder.
5. Remove `acl.ts` config file from `src/configs` folder.
