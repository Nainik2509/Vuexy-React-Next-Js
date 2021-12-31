---
sidebar: 'auto'
---

# FAQ

::: tip
If you can't find your problem. Try searching related term as well.
:::

::: tip I can't find my issue/problem/question listed here, What to do now?
If you can't find your issue/problem/question listed here then you can [raise support](/guide/getting-started/support.md) at our support portal. For **getting your solution quickly with minimum conversation**, please check out our getting support page which provides some tips on how to raise perfect support ticket to get solution quickly so our development team don't have to ask for things which takes time and waste your precious development time.
:::

## npm install or yarn install errors

Causes of npm install or yarn install issue can be due to various things which include:

- Missing or inappropriate dependencies like node or some other environmental issues
- Dependency resolved by package manager (npm/yarn) conflict with other installed dependency
- The dependency of the package we use have an internal issue or that dependency has some issue with your environment
- Package or dependency of the package requires some additional step or configuration to work in your environment
- Downloaded package is broken or is got tampered

To resolve such installation issue:

- Please try again downloading fresh package/zip from ThemeForest and perform installation again.
- Please make sure you are using LTS version of node which is recommended and not one with latest features.
- run `yarn cache clean` or `npm cache clean`
- Try using yarn if possible (Recommended).

After following about steps still, you are getting the error please [raise support](/guide/getting-started/support.md) at our support portal with the below details:

- Your OS information, Node version, npm/yarn version, Template/Package version
- Mention if you are able to run fresh VueJS project using Vue CLI without our template
- Attache log file of error you are getting in your console (Provide full log)
- Mention which command you are running
- Mention If you have any other machine, are you able to run our template in that machine

## npm install or yarn install warnings or installation warnings

You might get some warnings while running `npm install` or `yarn install` like below:

```bash
info fsevents@2.3.1: The platform "linux" is incompatible with this module.
info "fsevents@2.3.1" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "@vue/eslint-config-airbnb > eslint-import-resolver-webpack@0.13.0" has unmet peer dependency "webpack@>=1.11.0".
warning " > sass-loader@10.1.0" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
```

The warnings you are receiving while installing is from library/packages we used.

We always keep our packages up to date when we make major release. However, the writer of that package may use an older dependency that is no longer maintained for backward compatibility or any other code related issue. But, that's not an issue. Those packages will work fine with our template.

Even if you like to try you can install this packages in fresh VueJS project without our template and you will get the same.

## How to update logo and text

You can update the logo and text from "themeConfig.js" file. Please update `$themeConfig` variable's `app.appName` and `app.appLogoImage` to update the text and logo.

## NextJS support and its integration

As Admin templates are meant for backend and it doesn't require SEO we didn't provide support for NextJS. If you want to integrate NextJS in our template please consider checking some online articles on how to migrate VueJS project to NextJS.

Here's some of what we have found:

- [Official NextJS Docs](https://nextjs.org/)

## How to update navbar, breadcrumb or footer

You can use layout slots to add your custom navbar, breadcrumb or footer. Please refer to [layout](/guide/layout/layout-types.md) docs for example with code snippet.

## Nextjs Image Component

There might be time where you'll have to use an image without height or width. But, the Nextjs Image component
requires both height & width.

In that case you can do something like this:

```jsx
<Box sx={{ width: 35, height: 35 }}>
  <Img width='100%' height='100%' layout='responsive' objectFit='contain' src='/images/logos/facebook.png' />
</Box>
```
