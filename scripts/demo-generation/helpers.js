const fs = require('fs')
const path = require('path')
const pathConfig = require('../configs/paths.json')

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
    filesWithTestObj,
    testFoldersToCopy,
    testFoldersToModify
}