# How to add Auth0 in starter-kit

Follow these steps to integrate Auth0 in starter-kit:

1. Follow this [guide](http://localhost:8080/guide/development/authentication.html#how-to-remove-authentication) to remove the existing Authentication(JWT).
2. Follow this [guide](https://auth0.com/docs/get-started/auth0-overview/create-applications) to create the Auth0 application.
3. Open [settings](https://manage.auth0.com/dashboard/), navigate to applications click on your app to get your `clientId` & `domain`.
4. Open [settings](https://manage.auth0.com/dashboard/), navigate to settings > advanced.
5. Add your login and logout URLs.
6. Run `yarn add @auth0/auth0-react` in your project root.
7. Open `_app.tsx` file.
8. Add following Import: 
```jsx 
import { Auth0Provider } from '@auth0/auth0-react'
```
9. Wrap everything in `_app.tsx` with `Auth0Provider`.
```jsx
<Auth0Provider domain='YOUR_DOMAIN' clientId='YOUR_CLIENT_ID' redirectUri='http://localhost:3000'>
...
</Auth0Provider>
```
10. Usage:
```jsx
import { useAuth0 } from '@auth0/auth0-react'

const Component = () => {
  const { logout, loginWithRedirect } = useAuth0()

  return (
    <Form>
      ...
      <Button onClick={loginWithRedirect}>Login</Button>
      <Button onClick={() => logout({ returnTo: window.location.origin })}>logout</Button>
    </Form>
  )
}

export default Component
```
1.  You also refer this [guide](https://auth0.github.io/auth0-react/) for more info on `useAuth0` hook.