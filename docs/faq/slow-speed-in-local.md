---
sidebarDepth: 0
---

# Why app runs slow in local?

There are two main reasons why the app runs slow in your local system:

1. Some components of MUI are very complex and thus it takes some time to render those components on your local system.
2. MUI components use `sx` prop and `styled` function which are internally styling the components using [emotion](https://emotion.sh/). When emotion is used, all the components take a little bit more time to render than normal.

You may refer [this MUI discussion](https://github.com/mui/material-ui/discussions/29268) for detailed information on why MUI v5 is very slow.

When your app is running on your server or your site is live, you will not face this issue. It will run normally on the server.
