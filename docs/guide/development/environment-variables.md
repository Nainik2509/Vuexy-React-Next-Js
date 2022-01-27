# Environment Variables

react-material-admin comes with support for environment variables, which allows you to use `.env` to load the environment variables.

## Loading Environment Variables

Next.js has built-in support for loading environment variables from `.env` file into `process.env`.

An example `.env.local`:

```bash
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
```

This loads `process.env.DB_HOST`, `process.env.DB_USER`, and `process.env.DB_PASS` into the Node.js environment automatically allowing you to use them in Next.js data fetching methods and API routes.

For example, using `getStaticProps`:

```jsx
// pages/index.js
export async function getStaticProps() {
  const db = await myDB.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
  })
  // ...
}
```

## Exposing Environment Variables to the Browser

By default environment variables are only available in the Node.js environment, meaning they won't be exposed to the browser.

In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_`. For example:

```bash
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

::: warning
Do not store any secrets (such as private API keys or passwords) in the public variables! These environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.
:::

## Private Variables

Having access to the `NODE_ENV` is also useful for performing actions conditionally:

```jsx
if (process.env.NODE_ENV !== 'production') {
  analytics.disable()
}
```

Read more nextjs official documentation for more info on environment variables from [here](https://nextjs.org/docs/basic-features/environment-variables).
