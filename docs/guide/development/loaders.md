# Loaders

In this page you will find how to change/remove the loaders.

## Pace Loader

We're using [nprogress](https://github.com/rstacruz/nprogress) as paceloader.

You can disable it in `themeConfig.ts` file by changing the `routingLoader` to `false`

You can completely remove it from the template by removing the following snippet in `_app.ts` file:

```jsx
// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}
```

## Content Loader

You can change the content loader with your own using the `fallback` prop with `AuthGuard`/`GuestGuard` in `_app.tsx` file.

You can also pass `null` instead of a loader, if you don't want to show a loader.

```jsx
<GuestGuard fallback={<Spinner />}>{children}</GuestGuard>

// ** OR ** //

<AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
```
