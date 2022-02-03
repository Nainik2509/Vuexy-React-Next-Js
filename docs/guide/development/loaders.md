# Loaders

## Pace Loader (Page Loader)

We're using [nprogress](https://github.com/rstacruz/nprogress) as the paceloader (or page loader).

If you want to disable it, change the `routingLoader` property to `false` in the `src/configs/themeConfig.ts` file.

But if you want to remove the package, follow these steps:

- Remove `nprogress` & `@types/nprogress` packages from the `package.json` file
- Remove the following snippet in the `src/pages/_app.ts` file

```tsx
import NProgress from 'nprogress'

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

## Splash Screen (Loader with Logo)

If you want to change the splash screen, then follow these steps:

- Make your own loader component
- Pass your component in the `fallback` prop with the `AuthGuard` and `GuestGuard` components in the `src/pages/_app.tsx` file.

```tsx
<GuestGuard fallback={<UserSpinner />}>{children}</GuestGuard>
<AuthGuard fallback={<UserSpinner />}>{children}</AuthGuard>
```

You can also pass `null` instead of a loader if you don't want to show a loader in the splash screen.
