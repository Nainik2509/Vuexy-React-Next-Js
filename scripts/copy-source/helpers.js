const fs = require('fs')
const path = require('path')
const pathConfig = require('../configs/paths.json')

const basePathJSX = pathConfig.basePathJSX
const componentsPathTSX = `${pathConfig.fullVersionTSXPath}/src/views/components/`
const formsPathTSX = `${pathConfig.fullVersionTSXPath}/src/views/forms/form-elements/`
const componentsPathJSX = `${pathConfig.fullVersionJSXPath}/src/views/components/`
const formsPathJSX = `${pathConfig.fullVersionJSXPath}/src/views/forms/form-elements/`

const doesJSXVersionExits = fs.existsSync(basePathJSX)

const getAllFilesWithSource = function (dirPath, arrayOfFiles) {
  if (fs.existsSync(dirPath)) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
      if (fs.statSync(dirPath + '/' + file).isDirectory()) {
        for (let key of fs.readdirSync(dirPath + '/' + file)) {
          if (key.includes('SourceCode')) {
            arrayOfFiles = getAllFilesWithSource(dirPath + '/' + file, arrayOfFiles)
          }
        }
      } else {
        arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
      }
    })

    return arrayOfFiles
  } else {
    console.log('Dir does not exist')
  }
}

const getAllSourceFilesTSX = arr => {
  const files = []

  arr.map(file => {
    if (file.endsWith('SourceCode.tsx') && !files.includes(file)) {
      files.push(file)
    }
  })

  return files
}

const getAllSourceFilesJSX = arr => {
  const files = []

  if (doesJSXVersionExits) {
    arr.map(file => {
      if (file.endsWith('SourceCode.js') && !files.includes(file)) {
        files.push(file)
      }
    })
  } else {
    return
  }

  return files
}

const getAllIndexFiles = (dirPath, arrayOfFiles) => {
  if (fs.existsSync(dirPath)) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
      if (fs.statSync(dirPath + '/' + file).isDirectory()) {
        for (let key of fs.readdirSync(dirPath + '/' + file)) {
          if (key.includes('index')) {
            arrayOfFiles = getAllIndexFiles(dirPath + '/' + file, arrayOfFiles)
          }
        }
      } else {
        arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
      }
    })
    return arrayOfFiles
  } else {
    console.log('Dir does not exist')
  }
}

const replaceCodeWithNull = (dir, version) => {
  dir.map(file => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err)

        return
      } else {
        let splitData = data.split('\r\n')
        splitData.forEach(line => {
          if (line.toLowerCase().trim().includes(`${version}: source.`)) {
            console.log();
            fs.writeFile(file, data.replace(line, `${version}: null`), err => {
              if (err) {
                console.log(err);
              }
            })
          }
        })

      }
    })
  })
}

const componentFilesTSX = getAllFilesWithSource(componentsPathTSX)
const formsFilesTSX = getAllFilesWithSource(formsPathTSX)
const componentFilesJSX = getAllFilesWithSource(componentsPathJSX) || []
const formsFilesJSX = getAllFilesWithSource(formsPathJSX) || []

const AllFilesTSX = [...componentFilesTSX, ...formsFilesTSX]
const AllFilesJSX = [...componentFilesJSX, ...formsFilesJSX]
const sourceFilesTSX = getAllSourceFilesTSX(AllFilesTSX)
const sourceFilesJSX = getAllSourceFilesJSX(AllFilesJSX) || []

module.exports = {
  AllFilesTSX,
  AllFilesJSX,
  formsPathTSX,
  formsPathJSX,
  sourceFilesTSX,
  sourceFilesJSX,
  getAllIndexFiles,
  componentsPathTSX,
  componentsPathJSX,
  replaceCodeWithNull,
  doesJSXVersionExits,
  getAllSourceFilesTSX,
  getAllSourceFilesJSX,
  getAllFilesWithSource
}
