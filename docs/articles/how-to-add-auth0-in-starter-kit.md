# How to add Auth0 in starter-kit

Follow these steps to integrate Auth0 into the starter-kit:

1. Follow this [guide](/guide/development/authentication.html#how-to-remove-authentication) to remove the existing Authentication(JWT)
2. Follow this [guide](https://auth0.com/docs/get-started/auth0-overview/create-applications) to create the Auth0 application
3. Open [your Auth0 dashboard](https://manage.auth0.com/dashboard/), navigate to Settings, open the Advanced tab and add your login & logout URLs
4. Open the `src/pages/_app.tsx` file and add the following import statement:

```jsx
import { Auth0Provider } from '@auth0/auth0-react'
```

5. Open [your Auth0 dashboard](https://manage.auth0.com/dashboard/), navigate to Applications, open your app and go to Settings tab to get your `clientId` & `domain`. In `src/pages/_app.tsx` file, wrap `SettingsProvider` component with `Auth0Provider` wrapper as shown below:

```jsx
<Auth0Provider domain='YOUR_DOMAIN' clientId='YOUR_CLIENT_ID' redirectUri='http://localhost:3000'>
  <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
    ...
  </SettingsProvider>
</Auth0Provider>
```

6. Usage:

```jsx
import { useAuth0 } from '@auth0/auth0-react'

const Component = () => {
  const { user, error, logout, loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
      .then(() => console.log(user))
      .catch(() => console.log(error))
  }

  return (
    <form>
      ...
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => logout()}>logout</button>
    </form>
  )
}

export default Component
```

7. You may refer to this [guide](https://auth0.github.io/auth0-react/) for more information on the `useAuth0` hook.
