const fs = require('fs')
const path = require('path')

const componentsPath = '../jsx-version/src/views/components/'
const formsPath = '../jsx-version/src/views/forms/form-elements/'

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
    }
  })

  return arrayOfFiles
}

const componentFiles = getAllFiles(componentsPath)
const formsFiles = getAllFiles(formsPath)

const AllFiles = [...componentFiles, ...formsFiles]

const sourceFiles = []
AllFiles.map(file => {
  if (file.endsWith('SourceCode.js') && !sourceFiles.includes(file)) {
    sourceFiles.push(file)
  }

  if (
    !file.endsWith('SourceCode.js') &&
    !file.endsWith('index.js') &&
    !file.endsWith('data.js') &&
    !file.endsWith('DS_Store')
  ) {
    const parentFolder = path.basename(path.dirname(file))
    const fileName = path.basename(file, '.js')

    fs.readFile(file, 'utf8', (err, data) => {
      const sourceToRead = sourceFiles.filter(j => j.includes(parentFolder))[0]
      if (sourceToRead) {
        fs.readFile(sourceToRead, 'utf8', (err, source) => {
          const code =
            'export const ' +
            fileName +
            'Code = (' +
            "<pre className='language-jsx'>" +
            "<code className='language-jsx'>" +
            '{`' +
            data.replace(/`/g, '').replace(/\$/g, '').replace(/\\"/, '"').replace(/\\"/, '"') +
            '`}' +
            '</code>' +
            '</pre>' +
            ') \n'
          fs.writeFile(sourceToRead, '', err => {
            if (err) {
              console.log(err)
            }
            fs.appendFile(sourceToRead, code, err => {
              if (err) {
                console.log(err)
              }
            })
          })
        })
      }
    })
  }
  return
})
