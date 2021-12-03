# Folder Structure

Understand folder structure of template and what everything contains

## Overview

Before checking folder structure it is better you know some stuff related to folder structure.

- `@core` folder contains core files of template which **shall not get modified** unless our support team guide you to do it.
- Outside of `@core` folder is files you can move and modify as your wish. Basically that is your playground where you can modify anything.
- `@core` folder contains layouts and styles but those are core files so you can still write your our layout using our layout and override our styles.
- `@fake-db` folder just contains dummy data which we get in response of API call. This enables us to take step forward in providing **API ready template**.
- `/src/layouts` folder outside of `@core` is your layouts which you can modify however you like. Template will render this layouts.

Other folders and details of it will be available in docs. This overview is here so you don't get confused.

## Main Package

Once you unzip the package from ThemeForest you will find folder named `react-material-admin-vX.X` folder which contains actual files and folders required to run react-material-admin.

```
├── public
│   ├── favicon.ico            -> Favicon
│   └── index.html             -> Main HTML
│   └── assets                 -> Static assets
│       └── images             -> Static images
│       └── locales            -> Translations
├── src
│   ├── @core                  -> react-material-admin core files
│   ├── @fake-db               -> Fake Database for mocking axios requests (Fake API Calls)
│   ├── layouts                -> Your layouts
│   │   ├── horizontal
│   │   ├── full
│   │   └── vertical
│   ├── configs                -> Template configurations files
│   │   ├── auth               -> Your authentication files/configuration
│   │   ├── acl                -> Your ACL files/configuration
│   │   └── themeConfig.ts     -> Admin configuration
│   ├── navigation             -> Vertical & Horizontal navigation menu files
│   │   ├── horizontal
│   │   └── vertical
│   ├── redux                  -> Redux store
│   │── router                 -> react-router files
│   │   ├── index.tsx           -> Router index file
│   │   └── routes             -> Template routes
│   ├── views                  -> View files for all pages
│   ├── assets
│   │   ├── theme
│   │   └── scss
│   ├── utility                -> Context, Hooks & Utility functions
│   ├── App.tsx                -> Application main tsx file
│   ├── index.tsx              -> Application entry tsx file
├── package.json               -> Package json
├── .gitignore                 -> gitignore
├── README.md                  -> README
├── .eslintrc.js               -> ESLint Configuration
├── .prettierrc.js             -> Prettier Configuration
├── .tsconfig.json             -> ts Configuration
```

## @core folder

`@core` folder is core of our template which includes core files like layouts, custom components, etc.

**@core folder isn't meant to get modified.** When you will update of our template replacing this `@core` folder will hopefully update the template with minimum changes.

It's good idea to have a look at it and know what it contains to use stuff we already invented so **you don't have to reinvent the wheel**.

e.g. We have created custom animation component to animate the routes.

### Understanding Core folder

Understanding `@core` folder will save your development time and you will know how to get most of our template.

- **theme**

This folder contains app themes.

- **auth**

This folder contains auth related files. Currently, It has Auth context and other supporting files. Please refer to [JWT page](/guide/development/authentication.md) for getting detailed information on this.

- **components**

It contains core component of template. Make sure to check them all in our custom components section.

- **layouts**

This contains layouts of our template and layout components. You can find detailed information in [layout](/guide/layout/layout-types.md) section.
