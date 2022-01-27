const fs = require('fs')
const path = require('path')
const replace = require('replace-in-file')

const componentsPath = '../../jsx-version/src/pages/components/'
const formsPath = '../../jsx-version/src/pages/forms/form-elements/'

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

const AllFiles = [...getAllFiles(componentsPath), ...getAllFiles(formsPath)]

AllFiles.map(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err)

      return
    } else {
      const content = data.split('\n')

      content.map(line => {
        if (line.includes('tsx:')) {
          replace.sync({
            files: file,
            from: line,
            to: 'tsx: null,'
          })
        }
      })
    }
  })
})
