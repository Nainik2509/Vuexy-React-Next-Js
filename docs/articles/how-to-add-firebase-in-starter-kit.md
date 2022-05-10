# How to add Firebase in starter-kit

Follow these steps to integrate Auth0 in starter-kit:

1. Follow this [guide](http://localhost:8080/guide/development/authentication.html#how-to-remove-authentication) to remove the existing Authentication(JWT).
2. Create a firebase account from [here](https://firebase.google.com/) and then create an app to get your config.
3. Run `yarn add firebase` in your project root.
4. Copy the `full-version/src/configs/firebase.ts` file to `starter-kit/src/configs` folder.
5. Replace the `firebaseConfig` variable with your own config.
6. Copy the `full-version/src/context/FirebaseContext.tsx` file to `starter-kit/src/context` folder.
7. Copy the `full-version/src/hooks/useFirebaseAuth.tsx` file to `starter-kit/src/hooks` folder.
8. Add following Import:

```jsx
import { FirebaseAuthProvider } from 'src/context/FirebaseContext'
```

9. Wrap everything in `_app.tsx` with `FirebaseAuthProvider`.

```jsx
<FirebaseAuthProvider>
...
</FirebaseAuthProvider>
```

10. Usage:

```jsx
import { useAuth } from 'src/context/FirebaseContext'

const Component = () => {
  const { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } = useAuth()

  return (
    <Form>
      ...
      <Button onClick={() => signInWithEmailAndPassword('email@email.com', 'PASSWORD')}>Login</Button>
      <Button onClick={() => createUserWithEmailAndPassword('email@email.com', 'PASSWORD')}>Register</Button>
      <Button onClick={signOut}>logout</Button>
    </Form>
  )
}

export default Component
```
