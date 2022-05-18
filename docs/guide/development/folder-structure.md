# Folder Structure

::: danger Heads Up
Do not make any changes in the `src/@core` folder unless suggested by our support team. It is the core functionality of the template which is responsible to run the template and will be updated with every new update. Use layouts folder to override core layouts and components.
:::

Understand folder structure of the template and what every folder contains.

## Overview

Before checking folder structure it is better you know some stuff related to folder structure.

- `@core` folder contains core files of template which **shall not get modified** unless our support team guide you to do it.
- Outside of `@core` folder are files you can move and modify as per your wish. Basically that is your playground where you can modify anything.
- `@fake-db` folder just contains dummy data which we get in response of API call. This enables us to take step forward in providing **API ready template**.
- `src/layouts` folder outside of `@core` are your layouts which you can modify however you like. Template will always render these layouts.

## Main Package

Following is the folder structure of the full-version under both typescript / javascript version. Not explaining the folder structure for starter kit as everything is covered in the full version.

```
├── public
│   ├── images                   -> Static assets
│   ├── locales                  -> Translations
│   └── other files
├── src
│   ├── @core                    -> Template's core files
│   ├── @fake-db                 -> Fake Database for mocking axios requests (Fake API Calls)
│   ├── configs                  -> Template configurations files
│   │   ├── auth.ts              -> Your authentication files/configuration
│   │   ├── i18n.ts              -> i18n configuration and initialization
│   │   └── themeConfig.ts       -> Template configurations
│   ├── context                  -> Your context files go here
│   ├── hooks                    -> Your hooks go here
│   ├── layouts                  -> Your layouts
│   │   ├── components           -> Your components, layout components
│   │   ├── UserLayout.tsx       -> File responsible to render layout & template
│   │   └── UserThemeOptions.ts  -> Your theming file to override core theming
│   ├── navigation               -> Vertical & Horizontal static navigation menu files
│   │   ├── horizontal
│   │   └── vertical
│   ├── pages                    -> View files that render all the pages
│   │   ├── _app.tsx             -> Main file responsible to render layout
│   │   ├── _document.tsx        -> i18n configuration and initialization
│   │   └── index.tsx            -> Application entry tsx file
│   ├── store                    -> Redux store
│   ├── types                    -> All types (only in the typescript version)
│   └── views                    -> View files that are included in pages folder
├── styles                       -> Global styling
├── .env                         -> Environment file
├── next.config.js               -> Next js configuration
├── next.d.ts                    -> Next js global types configuration
├── package.json                 -> All the dependencies require to run the template
├── .gitignore                   -> gitignore (ignore files and folder to sync with repo)
├── .eslintrc.js                 -> ESLint Configuration (Linting code)
├── .prettierrc.js               -> Prettier Configuration (editor code formatting)
├── .tsconfig.json               -> ts Configuration
```

## @core folder

`@core` folder is core of our template which contains core layouts, components and theming where you should not make any change but override them with the help of our layout docs in case of any changes required in core files.

**@core folder isn't meant to get modified.** When you will update of our template replacing this `@core` folder will hopefully update the template with minimum changes.

It's good idea to have a look at it and know what it contains to use stuff we already invented so **you don't have to reinvent the wheel**.

### Understanding Core folder

Understanding `@core` folder will save your development time and you will know how to get most out of our template.

| Folder |       Description |
| ------ | :---------------- |
| components | It contains core components of the template. Make sure to check them all in our custom components section |
| context    | Auth, settings context which are responsible for authentication and live template customization |
| hooks      | useAuth, useSettings, useClipboard are main layout hooks to access auth and settings context values  |
| layouts    | All the layouts and layout components like menu, appbar, footer all reside in this folder |
| styles     | All third party styled components and MUI's stepper styled component reside in this folder |
| theme      | All the MUI theming like palette, breakpoints, typography, component's styling etc. are done in this folder |
| utils      | All the helpful functions used in whole template. Users can also import and use these useful functions.  |
