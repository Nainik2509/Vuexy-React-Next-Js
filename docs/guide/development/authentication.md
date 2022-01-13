# Authentication

## Overview

We only provide JWT authentication with the template for now. We might integrate other authentication services in future.

## Auth Context

We have created an Authentication context that returns all the necessary functions you might need to authenticate a user like login, logout, register etc., Please make sure to override context and make necessary changes according to your app requirements. We have created this context for demo purpose only.

## Usage Example

```jsx
import { useAuth } from 'src/@core/hooks/useAuth'

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

We are using `localStorage` & `fake-db` to store tokens & authenticate the user.
In a real application, you might store the token & user data in a `session` or `cookies`.

Follow these steps to override the auth context:

1. Copy the content of AuthContext from `@core/context/AuthContext.tsx`
2. Paste the copied code from core AuthContext to a new file.
3. Now update the authentication code according to your authentication logic in newly created file.
4. Then replace the core AuthContext Wrapper with your in file `_app.tsx`
5. That's it now you can use your modified context.

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

Now, Let's consider error pages or coming soon, under maintenance or common pages which you want accessible by both guest and logged in users. User just need to set AuthGuard to false.

Setting AuthGuard to false, in ComingSoon page component

```tsx
ComingSoon.authGuard = false
```

Setting AuthGuard to false will allow all the users to visit that page whether logged in or not.

## Removing Guards

Removing the authentication from the app is simple.
Follow these steps to remove the authentication from the app:

1. Remove the `authGuard` & `guestGuard` variables from the file `_app.tsx`
2. Remove `AuthGuard` & `GuestGuard` imports from the file `_app.tsx`
3. Remove the `Guard` Component and Wrapper from the file `_app.tsx`
4. Search & Remove `Component.guestGuard` & `Component.authGuard` from all the files. (where Component is the name of the component)

**That's it. Now your app is auth free.**
