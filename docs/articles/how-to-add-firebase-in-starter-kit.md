# How to add Firebase in starter-kit

Follow these steps to integrate Firebase into the starter-kit:

1. Follow this [guide](http://localhost:8080/guide/development/authentication.html#how-to-remove-authentication) to remove the existing Authentication(JWT)
2. Create a firebase account from [here](https://firebase.google.com/) and then create an app to get your configs
3. Copy the `full-version/src/configs/firebase.ts` file and paste it into the `starter-kit/src/configs/firebase.ts` file
4. Replace the `firebaseConfig` variable with your configs in the `src/configs/firebase.ts` file
5. Copy the `full-version/src/context/FirebaseContext.tsx` file and paste it into the `starter-kit/src/context/FirebaseContext.tsx` file
6. Copy the `full-version/src/hooks/useFirebaseAuth.tsx` file and paste it into the `starter-kit/src/hooks/useFirebaseAuth.tsx` file
7. Add the following import statement in the `src/pages/_app.tsx` file:

```jsx
import { FirebaseAuthProvider } from 'src/context/FirebaseContext'
```

8. In `src/pages/_app.tsx` file, wrap `SettingsProvider` component with `FirebaseAuthProvider` wrapper as shown below:

```jsx
<FirebaseAuthProvider>
  <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
    ...
  </SettingsProvider>
</FirebaseAuthProvider>
```

9. Usage:

```jsx
import { useAuth } from 'src/context/FirebaseContext'

const Component = () => {
  const { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } = useAuth()

  const handleLogin = () => {
    signInWithEmailAndPassword('email@email.com', 'PASSWORD')
      .then(user => console.log(user))
      .catch(err => console.log(err))
  }

  const handleRegister = () => {
    createUserWithEmailAndPassword('email@email.com', 'PASSWORD')
      .then(user => console.log(user))
  }

  return (
    <form>
      ...
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      <button onClick={signOut}>logout</button>
    </form>
  )
}

export default Component
```
