const fs = require('fs')
const path = require('path')
const findRemoveSync = require('find-remove')

const srcDirPath = '../jsx-version/src'
const packageFilePath = '../jsx-version/package.json'

//  search for all the .ts file in src directory inside jsx-version directory and remove them
findRemoveSync(srcDirPath, {
  files: ['types.js', 'type.js']
})

// remove ts and tsx extensions from yarn format and yarn lint commands from package.json file
if (fs.existsSync(packageFilePath)) {
  fs.readFile(packageFilePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    // const result = data.replace(new RegExp(/(.*:\s)(.*)(\,ts\,tsx)(}")/, 'g'), `$1$2$4`)
    const result = data.replace(/,ts,tsx/g, '')

    const finalResult = result.replace(new RegExp(/(\n)\s*("(@types|typescript))(.*)/, 'g'), ``)
    fs.writeFile(packageFilePath, finalResult, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  })
}

// Change all files extension from jsx to js
renameFiles(srcDirPath)

function renameFiles(dirPath) {
  files = fs.readdirSync(dirPath)

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      renameFiles(dirPath + '/' + file)
    } else {
      if (path.extname(file) === '.jsx') {
        const newFile = file.replace(/\.[^.]+$/, '.js')
        fs.rename(dirPath + '/' + file, dirPath + '/' + newFile, err => {
          if (err) throw err
        })
      }
    }
  })
}

console.log('Removed TS Files')
