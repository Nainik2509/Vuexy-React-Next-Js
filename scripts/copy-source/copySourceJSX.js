const fs = require('fs')
const path = require('path')

const pathConfig = require('../configs/paths.json')
const { AllFilesJSX, doesJSXVersionExits, sourceFilesJSX, getAllIndexFiles, replaceCodeWithNull } = require('./helpers')


const componentsPath = `${pathConfig.fullVersionJSXPath}/src/pages/components/`
const formsPath = `${pathConfig.fullVersionJSXPath}/src/pages/forms/form-elements/`

const generateJSXSourceCode = () => {
  if (doesJSXVersionExits) {
    AllFilesJSX.map(fileJSX => {
      if (
        !fileJSX.endsWith('SourceCode.js') &&
        !fileJSX.endsWith('index.js') &&
        !fileJSX.endsWith('data.js') &&
        !fileJSX.endsWith('DS_Store')
      ) {
        const parentFolderJSX = path.basename(path.dirname(fileJSX))
        const fileNameJSX = path.basename(fileJSX, '.js')
        const sourceToReadJSX = sourceFilesJSX.filter(j => j.includes(parentFolderJSX))[0]

        if (fileJSX && sourceToReadJSX) {
          fs.readFile(fileJSX, 'utf8', (err, dataJSX) => {
            fs.readFile(sourceToReadJSX, 'utf8', (err, source) => {
              const code =
                'export const ' +
                fileNameJSX +
                'JSXCode = (' +
                "<pre className='language-jsx'>" +
                "<code className='language-jsx'>" +
                '{`' +
                dataJSX.replace(/`/g, '').replace(/\$/g, '').replace(/\\"/, '"').replace(/\\"/, '"') +
                '`}' +
                '</code>' +
                '</pre>' +
                ') \n'
              fs.writeFile(sourceToReadJSX, '', err => {
                if (err) {
                  console.log(err)
                }
                fs.appendFile(sourceToReadJSX, code, err => {
                  if (err) {
                    console.log(err)
                  }
                })
              })
            })
          })
        }
      }

      return
    })
  } else {
    console.log('JSX version does not exist')
  }
}

generateJSXSourceCode()
if (doesJSXVersionExits) {

  const AllIndexFiles = [...getAllIndexFiles(componentsPath), ...getAllIndexFiles(formsPath)]
  replaceCodeWithNull(AllIndexFiles, 'tsx')
} else {
  return
}

module.exports = {
  generateJSXSourceCode
}
