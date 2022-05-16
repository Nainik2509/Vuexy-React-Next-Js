# How to add Amplify in starter-kit

Follow these steps to integrate Amplify into the starter-kit:

1. Follow this [guide](http://localhost:8080/guide/development/authentication.html#how-to-remove-authentication) to remove the existing Authentication(JWT)
2. First, you'll have to create an AWS account and install the required dependencies. Refer this [guide](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/) for more information
3. Run the `amplify init` command in your project root. When you initialize Amplify, you'll be prompted for some information about the app with the option to accept recommended values
4. When you initialize a new Amplify project, it creates an `amplify` folder in your project root and an `aws-exports.js` file in your `src` folder
5. Move the `aws-exports.js` file to the `src/configs` folder
6. Open the `src/pages/_app.tsx` file and configure the amplify

```jsx
import { Amplify } from 'aws-amplify'
import awsExports from 'src/configs/aws-exports'

Amplify.configure(awsExports)
```

7. Usage:

```jsx
import { Auth } from 'aws-amplify'

const Component = () => {

  const register = () => {
    Auth.signUp({
    username: 'email@email.com',
    password: 'Password@1234',
    attributes: { email: 'email@email.com' }
    })
      .then(() => console.log('registered'))
      .catch(err => console.log(err))
  }

  const login = async () => {
    const user = await Auth.signIn('email@email.com', 'Password@1234')
    console.log(user)
  }

  const signOut = () => {
    Auth.signOut()
      .then(() => console.log('signed out'))
      .catch(err => console.log(err))
  }

  return (
    <form>
      ..
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
      <button onClick={signOut}>logout</button>
    </form>
  )
}

export default Component
```
