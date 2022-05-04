# How to add Amplify in starter-kit

Follow these steps to integrate Amplify in starter-kit:

1. Follow this [guide](http://localhost:8080/guide/development/authentication.html#how-to-remove-authentication) to remove the existing Authentication(JWT).
2. First, you'll have to create AWS account & install required dependencies. Refer this [guide](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/) for more info.
3. Run `amplify init` in your project root. When you initialize Amplify you'll be prompted for some information about the app, with the option to accept recommended values.
4. When you initialize a new Amplify project, it creates a `amplify` folder in your project root and `aws-exports.js` in your src folder.
5. Run `yarn add aws-amplify @aws-amplify/ui-react` in your project root.
6. open `_app.tsx` and configure the amplify.
```jsx
import { Amplify } from 'aws-amplify'
import awsExports from 'src/aws-exports'

Amplify.configure(awsExports);
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
}

const login = async () => {
    const user = await Auth.signIn('email@email.com', 'Password@1234')
    console.log(user)
}

  return (
    <Form>
      ...
      <Button onClick={loginWithRedirect}>Login</Button>
      <Button onClick={register}>Register</Button>
      <Button onClick={() => Auth.signOut()}>logout</Button>
    </Form>
  )
}

export default Component
```
