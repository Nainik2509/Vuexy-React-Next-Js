# Installation

Master is built using [Create Next App](https://nextjs.org/docs/getting-started). Create Next App sets up everything automatically for you.

## Guide

First of all make sure you have installed [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/)

::: tip
Yarn package manager is recommended
:::

::: danger Requirements
Please make sure you use the node’s LTS version which is recommended by the official node site and not the one with the latest features or previous versions. Our project is not tested to work with other Node versions.
:::

::: danger Important!
Before installing the **node_modules** make sure you have files starting with a **dot(.eslintrc, .env etc..)**. It mostly happens when hidden files are not enabled on your machine and you try to copy our template at some other place on your system.
:::

::: danger Important!
If you decide to use **npm**, make sure you use following command: **npm install --legacy-peer-deps**
:::

- After downloading zip, copy this zip to your desired location and then unzip it. **Do not unzip first and then copy files to another location**, it may not be able to run the template due to missing hidden files not copied over.
  
- In uncompressed folder you will find `ts-version` / `js-version` folders which contains `full-version` & `starter-kit` folders. Unzip the one you want to get started with and open this folder in your console/terminal.
- Run below command in console:

```bash
# For Yarn (Highly Recommended)
yarn install

OR

# For npm
npm install --legacy-peer-deps
```

- After installing the modules run your project with following command:

```bash
# For Yarn
yarn dev

OR

# For npm
npm run dev
```

- You will find following output after running above command in console:
  
<img class='rounded medium-zoom' alt='console-output-of-development-server' :src="$withBase('/images/development/server-console.png')" />

- Congratulations!! You have successfully run the project. Visit [http://localhost:3000/](http://localhost:3000/) to check it in your browser.

::: tip NOTE
Your network URL might not have same URL as screenshot and that is completely fine. It depends on your network.
:::
