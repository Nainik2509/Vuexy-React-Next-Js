const fs = require('fs')
const path = require('path')
const pathConfig = require('../configs/paths.json')

const userLayoutPathTSX = `${pathConfig.packagePath}/typescript-version/full-version/src/layouts/UserLayout.tsx`
const PackageJSONPathTSX = `${pathConfig.packagePath}/typescript-version/full-version/package.json`
const PackageJSONPathJSX = `${pathConfig.packagePath}/javascript-version/full-version/package.json`
const BuyNowComponentPathTSX = `${pathConfig.packagePath}/typescript-version/full-version/src/layouts/components/BuyNowButton.tsx`
const userLayoutPathJSX = `${pathConfig.packagePath}/javascript-version/full-version/src/layouts/UserLayout.js`
const BuyNowComponentPathJSX = `${pathConfig.packagePath}/javascript-version/full-version/src/layouts/components/BuyNowButton.js`

const filesToCopyTSX = [
  `${pathConfig.demoConfigsPathTSX}`,
  `${pathConfig.fullVersionTSXPath}/public`,
  `${pathConfig.fullVersionTSXPath}/src`,
  `${pathConfig.fullVersionTSXPath}/styles`,
  `${pathConfig.fullVersionTSXPath}/.editorconfig`,
  `${pathConfig.fullVersionTSXPath}/.env`,
  `${pathConfig.fullVersionTSXPath}/.eslintrc.json`,
  `${pathConfig.fullVersionTSXPath}/.gitignore`,
  `${pathConfig.fullVersionTSXPath}/.prettierrc.js`,
  `${pathConfig.fullVersionTSXPath}/declaration.d.ts`,
  `${pathConfig.fullVersionTSXPath}/next-env.d.ts`,
  `${pathConfig.fullVersionTSXPath}/next.config.js`,
  `${pathConfig.fullVersionTSXPath}/next.d.ts`,
  `${pathConfig.fullVersionTSXPath}/yarn.lock`,
  `${pathConfig.fullVersionTSXPath}/package.json`,
  `${pathConfig.fullVersionTSXPath}/tsconfig.json`,
  `${pathConfig.fullVersionTSXPath}/package-lock.json`,
]

const filesToCopyJSX = [
  `${pathConfig.demoConfigsPathJSX}`,
  `${pathConfig.fullVersionJSXPath}/public`,
  `${pathConfig.fullVersionJSXPath}/src`,
  `${pathConfig.fullVersionJSXPath}/styles`,
  `${pathConfig.fullVersionJSXPath}/.editorconfig`,
  `${pathConfig.fullVersionJSXPath}/.env`,
  `${pathConfig.fullVersionJSXPath}/.eslintrc.js`,
  `${pathConfig.fullVersionJSXPath}/.gitignore`,
  `${pathConfig.fullVersionJSXPath}/.prettierrc.js`,
  `${pathConfig.fullVersionJSXPath}/next.config.js`,
  `${pathConfig.fullVersionJSXPath}/package.json`,
  `${pathConfig.fullVersionTSXPath}/yarn.lock`,
  `${pathConfig.fullVersionJSXPath}/jsconfig.json`,
  `${pathConfig.fullVersionTSXPath}/package-lock.json`,
]


const copyDirectory = (source, destination) => {
    fs.mkdirSync(destination, {
        recursive: true
    })

    fs.readdirSync(source, {
        withFileTypes: true
    }).forEach((entry) => {
        let sourcePath = path.join(source, entry.name);
        let destinationPath = path.join(destination, entry.name);

        entry.isDirectory() ?
            copyDirectory(sourcePath, destinationPath) :
            fs.copyFileSync(sourcePath, destinationPath);
    });
}

const testFoldersToModify = [

    {
        from: `${pathConfig.fullVersionTSXPath}/src/views/components/test`,
        to: `./temp-folder/${pathConfig.fullVersionTSXPath.replace('../../', '')}/src/views/components/test`,
    },
    {
        from: `${pathConfig.fullVersionTSXPath}/src/pages/components/test`,
        to: `./temp-folder/${pathConfig.fullVersionTSXPath.replace('../../', '')}/src/pages/components/test`,
    },
    {
        from: `${pathConfig.fullVersionTSXPath}/src/views/forms/form-elements/test`,
        to: `./temp-folder/${pathConfig.fullVersionTSXPath.replace('../../', '')}/src/views/forms/form-elements/test`,
    },
    {
        from: `${pathConfig.fullVersionTSXPath}/src/pages/forms/form-elements/test`,
        to: `./temp-folder/${pathConfig.fullVersionTSXPath.replace('../../', '')}/src/pages/forms/form-elements/test`,
    },

    {
        from: `${pathConfig.fullVersionJSXPath}/src/views/components/test`,
        to: `./temp-folder/${pathConfig.fullVersionJSXPath.replace('../../', '')}/src/views/components/test`,
    },
    {
        from: `${pathConfig.fullVersionJSXPath}/src/pages/components/test`,
        to: `./temp-folder/${pathConfig.fullVersionJSXPath.replace('../../', '')}/src/pages/components/test`,
    },
    {
        from: `${pathConfig.fullVersionJSXPath}/src/views/forms/form-elements/test`,
        to: `./temp-folder/${pathConfig.fullVersionJSXPath.replace('../../', '')}/src/views/forms/form-elements/test`,
    },
    {
        from: `${pathConfig.fullVersionJSXPath}/src/pages/forms/form-elements/test`,
        to: `./temp-folder/${pathConfig.fullVersionJSXPath.replace('../../', '')}/src/pages/forms/form-elements/test`,
    }
]

const testFoldersToCopy = [{
        from: `${pathConfig.fullVersionTSXPath}/src/@fake-db/server-side-menu`,
        to: `./temp-folder/${pathConfig.fullVersionTSXPath.replace('../../', '')}/src/@fake-db/server-side-menu`,
    },
    {
        from: `${pathConfig.fullVersionTSXPath}/src/navigation`,
        to: `./temp-folder/${pathConfig.fullVersionTSXPath.replace('../../', '')}/src/navigation`,
    },
    {
        from: `${pathConfig.fullVersionJSXPath}/src/@fake-db/server-side-menu`,
        to: `./temp-folder/${pathConfig.fullVersionJSXPath.replace('../../', '')}/src/views/components/test`,
    },
    {
        from: `${pathConfig.fullVersionJSXPath}/src/navigation`,
        to: `./temp-folder/${pathConfig.fullVersionJSXPath.replace('../../', '')}/src/views/components/test`,
    },
]

const filesWithTestObj = [
    `${pathConfig.fullVersionTSXPath}/src/navigation/vertical/index.ts`,
    `${pathConfig.fullVersionTSXPath}/src/navigation/horizontal/index.ts`,
    `${pathConfig.fullVersionTSXPath}/src/@fake-db/server-side-menu/vertical.ts`,
    `${pathConfig.fullVersionTSXPath}/src/@fake-db/server-side-menu/horizontal.ts`,    
    `${pathConfig.fullVersionJSXPath}/src/navigation/vertical/index.js`,
    `${pathConfig.fullVersionJSXPath}/src/navigation/horizontal/index.js`,
    `${pathConfig.fullVersionJSXPath}/src/@fake-db/server-side-menu/vertical.js`,
    `${pathConfig.fullVersionJSXPath}/src/@fake-db/server-side-menu/horizontal.js`,
]

module.exports = {
  copyDirectory,
  filesToCopyTSX,
  filesToCopyJSX,
  filesWithTestObj,
  testFoldersToCopy,
  userLayoutPathJSX,
  userLayoutPathTSX,
  PackageJSONPathTSX,
  PackageJSONPathJSX,
  testFoldersToModify,
  BuyNowComponentPathTSX,
  BuyNowComponentPathJSX,
}