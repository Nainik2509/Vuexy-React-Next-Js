const fs = require('fs')
const path = require('path')

const srcDirPath = '../jsx-version/src'
const packageFilePath = '../jsx-version/package.json'

// deletes root types folder
// fs.rmdirSync('../jsx-version/src/types', { recursive: true, force: true }, err =>
//   console.log(err || 'Deleted: Root Types folder')
// )

const scanDir = function (dir, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err)
    var i = 0
    ;(function done() {
      var file = list[i++]
      if (!file) return callback(null)
      file = path.resolve(dir, file)
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          scanDir(file, function (err, res) {
            done()
          })
        } else {
          if (file.endsWith('types.js') || file.endsWith('type.js')) {
            fs.unlinkSync(file)
          }
          done()
        }
      })
    })()
  })
}

scanDir(srcDirPath, () => console.log('Removed Type Files'))

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str

  return str.substring(0, index) + chr + str.substring(index + 1)
}

// remove ts and tsx extensions from yarn format and yarn lint commands from package.json file
if (fs.existsSync(packageFilePath)) {
  fs.readFile(packageFilePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    // console.log(data.charAt(data.lastIndexOf(',')))

    // const result = data.replace(new RegExp(/(.*:\s)(.*)(\,ts\,tsx)(}")/, 'g'), `$1$2$4`)
    const result = data.replace(/,ts,tsx/g, '')

    // const fixToken = result[result.length - 8]

    // fixToken === ',' ? result[result.length - 8].replace(',', '') : null

    // result[result.length - 8] === ',' ?

    const finalResult = result.replace(new RegExp(/(\n)\s*("(@types|typescript))(.*)\n/, 'g'), ``)

    fs.writeFile(packageFilePath, finalResult, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  })
}

fs.readFile(packageFilePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }

  console.log(data.charAt(data.lastIndexOf(',') + 6))
  if (data.charAt(data.lastIndexOf(',')) === ',' && data.charAt(data.lastIndexOf(',') + 6) === '}') {
    const result = setCharAt(data, data.lastIndexOf(','), '')

    fs.writeFile(packageFilePath, result, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  } else {
    return
  }
})

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
