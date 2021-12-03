# Routing

In this page you will find how to add new routes and how we have handled the existing routes.

## Overview

You can find our template's router configuration in `src/router/index.tsx`. `src/router/routes` folder contains all routes of our template.

## Router.tsx

In `Router.tsx` file you'll find `resolveRoutes` function which loops through the routes and renders them according to their layout.

## PrivateRoute & PublicRoute

You can check the code for both custom route components in `src/@core/components/routes`

- **PrivateRoute**: Components wrapped with Private routes will restrict the unauthorized users from accessing the routes and will redirect the user to not authorized page.

- **PublicRoute**: Components wrapped with Public routes will be accessible to both authorized and unauthorized users.

## Routes

Our routes are not just simple routes. It's an array of object and few other properties are required to render a proper page.

First we define the layout component and then we pass the routes to show for that layout.
You can refer the below mentioned code as example:

```js
const routes = [
  {
    path: '*',
    component: VerticalLayout,
    routes: [
      {
        path: '/dashboard/analytics',
        component: lazy(() => import('views/dashboards/analytics'))
      },
      {
        path: '/dashboard/ecommerce',
        component: lazy(() => import('views/dashboards/ecommerce')),
        meta: {
          action: 'read',
          resource: 'analytics'
        }
      }
    ]
  }
]
```

## Route Meta

There are few meta properties that you'll need for your routes. Let's find out each of them:

- **action**: Use this to define if the route is readable.
- **resource**: Use this to define the subject of route.
- **publicRoute**: Use this to make any route a public route.
- **restricted**: Use this to make any route a restricted route where user will be redirected to home / dashboard if they are logged in otherwise redirected to not authorized page.
- **layout**: Use this to change page layout. You can select from ['vertical', 'horizontal', 'blank', blankWithAppBar']

## Route Protection (ACL)

You will learn how to add route protection for particular route in [Access Control](/guide/development/acl) page.
