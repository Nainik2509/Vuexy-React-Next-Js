# Installation

react-material-admin is built using [Create Next App](https://nextjs.org/docs/getting-started). Create Next App sets up everything automatically for you.

# Guide

First of all make sure you have installed [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/)

::: tip
Yarn package manager is recommended
:::

::: warning
Please make sure you use the node’s LTS version which is recommended by the official node site and not the one with the latest features or previous versions. Our project is not tested wot work with other Node versions.
:::

::: danger Important
Before installing the **node_modules** make sure you have files starting with a **dot(.eslintrc)**. It mostly happens when hidden files are not enabled and you try to copy our template at some other place on your system.
:::

::: danger Important
If you decide to use **npm**. Make sure you use following command: **npm install --force --legacy-peer-deps**
:::

- After downloading zip, unzip it in your desired location.
- In uncompressed folder you will find folder named `react-material-admin`. This will contain all versions of the Template. Move to `react-material-admin-template` folder and open this folder in console/terminal.
- Run below command in console:

```bash
# For Yarn (Highly Recommended)
yarn install

# For npm
npm install
```

- After installing the modules run your project with following command:

```bash
# For Yarn
yarn dev

# For npm
npm run dev
```

- You will find following output after running above command in console:
  <img :src="$withBase('/images/development/server-console.png')" alt="console-output-of-development-server" class="rounded">
- Visit [http://localhost:3000/](http://localhost:3000/) to check frontend.

::: tip NOTE
Your network URL might not have same URL as screenshot and that is completely fine. It depends on your network.
:::
