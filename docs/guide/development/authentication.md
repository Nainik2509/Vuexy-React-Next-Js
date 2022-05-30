# Authentication

## Overview

We only provide JWT authentication with the template for now. We might integrate other authentication services in future.

## Auth Context

We have created an Authentication context that returns all the necessary functions you might need to authenticate a user like login, logout, register etc. Please make sure to override context and make necessary changes according to your app requirements. We have created this context for demo purpose only.

## Usage Example

```tsx
import { useAuth } from 'src/hooks/useAuth'

const Component = () => {
  const auth = useAuth()
  const { login, register, logout } = auth

  const handleErrCallback = err => {
    console.log(err)
  }

  const handleLogin = () => {
    login({ email, password }, err => handleErrCallback(err))
  }

  const handleRegister = () => {
    register({ { email, username, password } }, err => handleErrCallback(err))
  }

  return (
    <Form>
      ...
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleRegister}>Register</Button>
      <Button onClick={logout}>logout</Button>
    </Form>
  )
}

export default Component
```

## Overriding Auth

We are using `localStorage` & `fake-db` to store tokens and authenticate the user.
In a real application, you might store the token & user data in a `session` or `cookies`.

Follow these steps to override the auth context:

1. Open `src/context/AuthContext.tsx` file
2. Now update the authentication code according to your authentication logic
3. That's it now you can use your modified context.

## Auth Context Values

| Property         | Type     | Description                                     |
| ---------------- | :------- | ----------------------------------------------- |
| user             | Object   | LoggedIn User Object                            |
| setUser          | Function | Function to update LoggedIn User                |
| isInitialized    | Boolean  | Returns if authentication is initialized or not |
| setIsInitialized | Function | Function to update isInitialized state          |
| loading          | Boolean  | Returns if app is loading                       |
| setLoading       | Function | Function to update loading state                |
| login            | Function | Function to login user.                         |
| register         | Function | Function to register user.                      |
| logout           | Function | Function to logout user.                        |

## Securing Pages

We have created a wrapper that checks for the authentication status and redirects user if not logged in.

There are two types of guards:

- **AuthGuard**
- **GuestGuard**

Default value for both guards are as follows:

- **AuthGuard: true**
- **GuestGuard: false**

User don't have to define `AuthGuard` or `GuestGuard` on all the pages as we have already defined default values as above.

Now let's consider scenarios where we need to override `AuthGuard` & `GuestGuard`.

### Guest Guard

For public pages like Login, Registration, Forgot Password, etc., we need to set GuestGuard value to true, as we don't want already logged in user to visit those pages and only guest should be able to visit those pages.

Setting GuestGuard to true in LoginPage component. Visit `src/pages/login/index.tsx` to see it in the action and find out where and how to configure / override `guestGuard`.

```tsx
LoginPage.guestGuard = true
```

Setting GuestGuard to true will redirect already logged in user to home page whenever they try to visit the public pages like Login. So make sure to only change / override guestGuard when you do not want logged in users to visit that page.

### Auth Guard

Now, Let's consider error pages or coming soon, under maintenance or common pages which is accessible by both guest and logged in users. User just need to set AuthGuard to false.

Setting AuthGuard to false, in ComingSoon page component

```tsx
ComingSoon.authGuard = false
```

Setting AuthGuard to false will allow all the users to visit that page whether logged in or not.

## onTokenExpiration

We provide `onTokenExpiration` property in `src/configs/auth`. It decides what action should take place when issued token is expired.

| Value             |Description                                          |
| ----------------  | -----------------------------------------------     |
| logout            | will logout and redirect the user to `/login` page. |
| refreshToken      | will generate new token for the current user.       |

::: warning Note
Because we're storing data in localStorage when you change the `onTokenExpiration` you'll have to clear the localStorage and login again.
:::

## How to remove Authentication

Removing the authentication from the app is simple.

**Changes in `scr/pages/_app.tsx` file**

1. Remove all Auth related import statements

    ```tsx
    import { ReactNode } from 'react'
    import AuthGuard from 'src/@core/components/auth/AuthGuard'
    import GuestGuard from 'src/@core/components/auth/GuestGuard'
    import Spinner from 'src/@core/components/spinner'
    import { AuthProvider } from 'src/context/AuthContext'
    ```

2. Remove the `Guard` Component and its wrapper
3. Remove the wrapper of the `AuthProvider` component
4. Remove the `authGuard` & `guestGuard` variables
5. Remove the `GuardProps` type

---

**Changes in other files**

1. Remove `src/@core/components/auth` folder
2. Search and remove `Component.guestGuard` & `Component.authGuard` methods from all the files (where Component is the name of the component)
3. Remove `authGuard?: boolean` and `guestGuard?: boolean` from the `next.d.ts` file
4. Remove the `src/@fake-db/auth` folder and the `import './auth/jwt'` import statement from the file `src/@fake-db/index.ts`
5. Remove `src/context/AuthContext.tsx` & all types related to the Auth from the `src/context/types.ts` file and their import statements & their usage inside `src` folder
6. Remove `src/hooks/useAuth.tsx` file and its import statements & their usage inside `src` folder
7. If you want the user dropdown in the appBar, you need to override that component in `src/@core/layouts/components/shared-components/UserDropdown.tsx` file. If you do not require the user dropdown, then remove `src/@core/layouts/components/shared-components/UserDropdown.tsx` file, its import statements and its usage in `src/layouts/components/vertical/AppBarContent.tsx`  and `src/layouts/components/horizontal/AppBarContent.tsx` files
8. You also need to remove Access Control (ACL) as it won't be of any use without authentication. Please read [how to remove ACL](/guide/development/access-control.html#how-to-remove-acl) guide.

**That's it. Now your app is auth free.**
