# How to add JWT in starter-kit

Master uses context & fake-db to authenticate users. Follow below-mentioned steps to integrate authentication in starter-kit.

**Please Note:** The Authentication provided with the template is for demo purposes only.

1. create a `@fake-db` folder.
2. Create `mock.ts` file in the newly created `@fake-db` folder and add the following code:
```jsx
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

export default mock
```
3. Copy `full-version/src/@fake-db/auth` folder to the `@fake-db` folder.
4. Create `index.ts` file in the `@fake-db` folder and add the following code:
```jsx
import mock from './mock'

import './auth/jwt'

mock.onAny().passThrough()
```
5. Add the following import in `_app.tsx`:
```jsx
// ** Fake-DB Import
import 'src/@fake-db'
```
6. Copy `auth.ts` files from `full-version/src/configs` to `configs` folder.
7. Import `AuthGuard` & `GuestGuard` component in `_app.tsx`:
```jsx
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'
```
8. Import `AuthProvider` in `_app.tsx`:
```jsx
import { AuthProvider } from 'src/context/AuthContext'
```
9. Import `<Spinner>` component:
```jsx
import Spinner from 'src/@core/components/spinner'
```
10. Add the Guard Component just above app component in `_app.tsx`:
```jsx
const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}
```
11. Add following variables in `_app.tsx`:
```jsx
  const authGuard = Component.authGuard ?? true
  const guestGuard = Component.guestGuard ?? false
```
12. Wrap `<SettingsProvider>` with `<AuthProvider>`.
13. Wrap `getLayout` function with `<Guard>` component from above.
```jsx
<Guard authGuard={authGuard} guestGuard={guestGuard}>
  {getLayout(<Component {...pageProps} />)}
</Guard>
```
14.  You can now use `useAuth` hook to `login`, `logout`, `register` & get `user`:
15.  Example:
```jsx
import { useAuth } from 'src/hooks/useAuth'

const LoginForm = () => {
  // ** Hooks
  const auth = useAuth()
  
  const handleSubmit = () => {
     auth.login({ email, password }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  return <Form onSubmit={handleSubmit}>...</Form>
}
```