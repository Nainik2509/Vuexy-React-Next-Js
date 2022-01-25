const fs = require('fs')
const path = require('path')

const componentsPathTSX = '../src/views/components/'
const formsPathTSX = '../src/views/forms/form-elements/'
const componentsPathJSX = '../jsx-version/src/views/components/'
const formsPathJSX = '../jsx-version/src/views/forms/form-elements/'

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      for (let key of fs.readdirSync(dirPath + '/' + file)) {
        if (key.includes('SourceCode')) {
          arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
        }
      }
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
    }
  })

  return arrayOfFiles
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

  arr.map(file => {
    if (file.endsWith('SourceCode.js') && !files.includes(file)) {
      files.push(file)
    }
  })

  return files
}

const componentFilesTSX = getAllFiles(componentsPathTSX)
const formsFilesTSX = getAllFiles(formsPathTSX)
const componentFilesJSX = getAllFiles(componentsPathJSX)
const formsFilesJSX = getAllFiles(formsPathJSX)

const AllFilesTSX = [...componentFilesTSX, ...formsFilesTSX]
const AllFilesJSX = [...componentFilesJSX, ...formsFilesJSX]
const sourceFilesTSX = getAllSourceFilesTSX(AllFilesTSX)
const sourceFilesJSX = getAllSourceFilesJSX(AllFilesJSX)

if (fs.existsSync('../jsx-version')) {
  // ** Generation For TSX Version
  AllFilesTSX.map(fileTSX => {
    if (
      !fileTSX.endsWith('SourceCode.tsx') &&
      !fileTSX.endsWith('index.tsx') &&
      !fileTSX.endsWith('data.ts') &&
      !fileTSX.endsWith('types.ts') &&
      !fileTSX.endsWith('DS_Store')
    ) {
      const parentFolderTSX = path.basename(path.dirname(fileTSX))
      const fileNameTSX = path.basename(fileTSX, '.tsx')
      const fileJSX = AllFilesJSX.filter(i => i.includes(fileNameTSX))[0]
      const sourceToReadTSX = sourceFilesTSX.filter(t => t.includes(parentFolderTSX))[0]
      const sourceToReadJSX = sourceFilesJSX.filter(t => t.includes(parentFolderTSX))[0]

      if (sourceToReadTSX && fileTSX) {
        fs.readFile(fileTSX, 'utf8', (err, dataTSX) => {
          fs.readFile(sourceToReadTSX, 'utf8', () => {
            const codeTSX =
              'export const ' +
              fileNameTSX +
              'TSXCode = (' +
              "<pre className='language-jsx'>" +
              "<code className='language-jsx'>" +
              '{`' +
              dataTSX.replace(/`/g, '').replace(/\$/g, '').replace(/\\"/, '"').replace(/\\"/, '"') +
              '`}' +
              '</code>' +
              '</pre>' +
              ') \n'

            fs.writeFile(sourceToReadTSX, '', err => {
              if (err) {
                console.log(err)
              }
              fs.appendFile(sourceToReadTSX, codeTSX, err => {
                if (err) {
                  console.log(err)
                }
              })
            })
          })
        })

        if (sourceToReadJSX && fileJSX) {
          // sourceToReadJSX.includes('MuiPickersSourceCode') ? console.log(fileJSX) : null
          fs.readFile(fileJSX, 'utf8', (err, dataJSX) => {
            fs.readFile(sourceToReadJSX, 'utf8', (err, source) => {
              const codeJSX =
                'export const ' +
                fileNameTSX +
                'JSXCode = (' +
                "<pre className='language-jsx'>" +
                "<code className='language-jsx'>" +
                '{`' +
                dataJSX.replace(/`/g, '').replace(/\$/g, '').replace(/\\"/, '"').replace(/\\"/, '"') +
                '`}' +
                '</code>' +
                '</pre>' +
                ') \n'
              if (sourceToReadTSX) {
                fs.appendFile(sourceToReadTSX, codeJSX, err => {
                  if (err) {
                    console.log(err)
                  }
                })
              }
            })
          })
        }
      }
    }

    return
  })

  // ** Generation For JSX
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
      const fileTSX = AllFilesTSX.filter(i => i.includes(fileNameJSX))[0]
      const sourceToReadTSX = sourceFilesJSX.filter(t => t.includes(parentFolderJSX))[0]

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

        if (fileTSX && sourceToReadTSX) {
          fs.readFile(fileTSX, 'utf8', (err, dataTSX) => {
            fs.readFile(sourceToReadTSX, 'utf8', () => {
              const codeTSX =
                'export const ' +
                fileNameJSX +
                'TSXCode = (' +
                "<pre className='language-jsx'>" +
                "<code className='language-jsx'>" +
                '{`' +
                dataTSX.replace(/`/g, '').replace(/\$/g, '').replace(/\\"/, '"').replace(/\\"/, '"') +
                '`}' +
                '</code>' +
                '</pre>' +
                ') \n'
              if (sourceToReadJSX) {
                fs.appendFile(sourceToReadJSX, codeTSX, err => {
                  if (err) {
                    console.log(err)
                  }
                })
              }
            })
          })
        }
      }
    }

    return
  })
}
