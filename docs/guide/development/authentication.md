# Authentication

## Overview

We only provide JWT authentication with the template for now. We might integrate other authentication services in future.

## Auth Context

We have created an Authentication context that returns all the necessary functions you might need to authenticate a user.

## AuthGuard

We have created a wrapper that checks for the authentication status and redirects user if not logged in.

You can find the AuthGuard in `_app.tsx` file.

## Usage

```jsx
import { useContext } from 'react'
import { Auth } from 'src/@core/context/AuthContext'

const Component = () => {
  const { login, register, logout } = useContext(Auth)

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

## Removing Authentication

Removing the authentication from the app is simple.
Follow these steps to remove the authentication from the app:

1. Remove the AuthContext from the file `_app.tsx`
2. Remove the AuthGuard Wrapper from the file `_app.tsx`
3. That's it now your app is auth free.

## Auth Context Values

| Property         | Type     | Description                                     |
| ---------------- | :------- | ----------------------------------------------- |
| user             | Object   | LoggedIn User Object                            |
| setUser          | Function | Function to update LoggedIn User                |
| isInitialized    | Boolean  | Returns if authentication is initialized or not |
| setIsInitialized | Function | Function to update isInitialized                |
| login            | Function | Function to login user.                         |
| register         | Function | Function to register user.                      |
| logout           | Function | Function to logout user.                        |
