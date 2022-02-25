# Access Control (ACL)

## Overview

Master uses the [CASL](https://casl.js.org/v5/en/) package to provide access control. CASL is future-oriented and is more detailed on Access Control.

We suggest you read the [CASL](https://casl.js.org/v5/en/) documentation to learn how it works.

CASL may look complex at first so please make sure you first read their docs carefully and understand the base logic of Access Control to proceed further.

## Config

You can find CASL configuration in `src/configs/acl.ts`.

We have defined two roles `admin` & `client` and their actions in the configuration file.

You'll have to update these roles & actions according to your application requirement.

```ts
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

```tsx{3-6}
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

```ts{3-4}
{
  path: '/acl',
  action: 'read',
  subject: 'acl-page',
  icon: ShieldOutline,
  title: 'Access Control'
}
```

## Home URL

Please update home URL based on yser role in `src/pages/index.tsx` file. Currently, we have set default URL for client and admin like following:

<code-group>
<code-block title="TSX" active>
```tsx
// Set Home URL based on User Roles
export const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/dashboards/analytics'
}
```
</code-block>

<code-block title="JSX">
```jsx
// Set Home URL based on User Roles
export const getHomeRoute = role => {
  if (role === 'client') return '/acl'
  else return '/dashboards/analytics'
}
```
</code-block>
</code-group>

## How to remove ACL

It is quite easy to remove access control from the template.

1. Remove `src/configs/acl.ts` file
2. Remove the `import type { ACLObj } from 'src/configs/acl'` import statement & `acl?: ACLObj` from `next.d.ts` file.

3. Remove the AclGuard wrapper & ACL related imports from `src/pages/_app.tsx` file.

    Change following code ***from***:

    ```tsx
    // Code before removing ACL Guard
    import { defaultACLObj } from 'src/configs/acl'
    import AclGuard from 'src/@core/components/auth/AclGuard'

    const aclAbilities = Component.acl ?? defaultACLObj

   <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
     {getLayout(<Component {...pageProps} />)}
   </AclGuard>
    ```

    ***to***

    ``` tsx
    // Code after removing ACL Guard
   {getLayout(<Component {...pageProps} />)}
    ```

4. Remove `acl?: ACLObj` from `next.d.ts` file

5. Remove `acl` method from all the components.

    Component ***from***:

    ```tsx
    const Component = () => <h1>Component</h1>

    Component.acl = {
      action: 'read',
      subject: 'component'
    }

    export default Component
    ```

    ***to***

    ```tsx
    const Component = () => <h1>Component</h1>

    export default Component
    ```

6. Remove `action` & `subject` properties if defined in your navigation files.

    Navigation object ***from***:

    ```ts
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      icon: ShieldOutline,
      title: 'Access Control'
    }
    ```

    ***to***

    ```ts
    {
      path: '/acl',
      icon: ShieldOutline,
      title: 'Access Control'
    }
    ```

7. Update Home URL like following:

    ```tsx
    // Set Home URL based on User Roles
    export const getHomeRoute = () => {
      return '/dashboards/analytics'
    }
    ```

    OR

    Empty `src/pages/index.tsx` file and render your Home component like following:

    ```tsx
    const Component = () => <h1>Component</h1>

    export default Component
    ```

8. Remove the `ability` & `ability.can` function in all the CanView files in `src/layouts/components/acl` folder.

    Replace the following codes in respective files in order to remove ACL functionality.

    <code-group>
    <code-block title="TSX" active>
    ```tsx{11}
    // src/layouts/components/acl/CanViewNavNavGroup.tsx
    import { ReactNode } from 'react'

    interface Props {
      children: ReactNode
    }

    const CanViewNavNavGroup = (props: Props) => {
      const { children } = props

      return <>{children}</>
    }

    export default CanViewNavNavGroup
    ```
    </code-block>

    <code-block title="JSX">
    ```jsx{6}
    // src/layouts/components/acl/CanViewNavNavGroup.jsx

    const CanViewNavNavGroup = props => {
      const { children } = props

      return <>{children}</>
    }

    export default CanViewNavNavGroup
    ```
    </code-block>
    </code-group>

    <code-group>
    <code-block title="TSX" active>
    ```tsx{11}
    // src/layouts/components/acl/CanViewNavNavLink.tsx
    import { ReactNode } from 'react'

    interface Props {
      children: ReactNode
    }

    const CanViewNavNavLink = (props: Props) => {
      const { children } = props

      return <>{children}</>
    }

    export default CanViewNavNavLink
    ```
    </code-block>

    <code-block title="JSX">
    ```tsx{6}
    // src/layouts/components/acl/CanViewNavNavLink.jsx

    const CanViewNavNavLink = props => {
      const { children } = props

      return <>{children}</>
    }

    export default CanViewNavNavLink
    ```
    </code-block>
    </code-group>

    <code-group>
    <code-block title="TSX" active>
    ```tsx{11}
    // src/layouts/components/acl/CanViewNavSectionTitle.tsx
    import { ReactNode } from 'react'

    interface Props {
      children: ReactNode
    }

    const CanViewNavSectionTitle = (props: Props) => {
      const { children } = props

      return <>{children}</>
    }

    export default CanViewNavSectionTitle
    ```
    </code-block>

    <code-block title="JSX">
    ```jsx{6}
    // src/layouts/components/acl/CanViewNavSectionTitle.jsx

    const CanViewNavSectionTitle = props => {
      const { children } = props

      return <>{children}</>
    }

    export default CanViewNavSectionTitle
    ```
    </code-block>
    </code-group>
