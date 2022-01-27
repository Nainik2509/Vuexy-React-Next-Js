const fs = require('fs')
const path = require('path')
const replace = require('replace-in-file')

let demo = 'demo-1'
const baseDir = '../../src'
const i18nPath = '../../src/configs/i18n.ts'
const themeConfigPath = '../../src/configs/themeConfig.ts'
const demoConfigPath = '../../demo-configs/demo-1.ts'
const nextConfigPath = '../../next.config.js'
const settingsContextFile = '../../src/@core/context/settingsContext.tsx'

const demoArgs = process.argv.slice(2)

if (demoArgs[0] !== undefined) {
  demo = demoArgs[0]
}

const removeBasePathInImages = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = removeBasePathInImages(dirPath + '/' + file, arrayOfFiles)
    } else {
      fs.readFile(path.join(__dirname, dirPath, '/', file), 'utf-8', (err, data) => {
        if (err) {
          console.error(err)

          return
        } else {
          replace.sync({
            files: path.join(__dirname, dirPath, '/', file),
            from: new RegExp(`/demo/react-master/${demo}/images/`, 'g'),
            to: `/images/`
          })

          arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
        }
      })
    }
  })

  return arrayOfFiles
}

const removeBasePathInI18n = () => {
  replace.sync({
    files: i18nPath,
    from: `/demo/react-master/${demo}/locales/`,
    to: '/locales/'
  })
}

removeBasePathInImages(baseDir)
removeBasePathInI18n()

if (fs.existsSync(settingsContextFile)) {
  fs.readFile(settingsContextFile, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)

      return
    } else {
      const result = data.replace(new RegExp(/(localStorage.(get|set)Item\(')(.*)('.*\))/, 'g'), `$1settings$4`)
      fs.writeFile(settingsContextFile, result, function (err) {
        if (err) {
          console.log(err)

          return
        } else {
          if (fs.existsSync(nextConfigPath)) {
            const nextConfigData = fs.readFileSync(nextConfigPath).toString().split('\n')

            const result = nextConfigData
              .filter(line => {
                return line.indexOf('basePath') !== 0
              })
              .join('\n')

            fs.writeFile(nextConfigPath, result, err => {
              if (err) {
                console.log(err)

                return
              }
            })
          } else {
            console.log('NextConfig Does Not Exists')

            return
          }
          if (fs.existsSync(themeConfigPath) && fs.existsSync(demoConfigPath)) {
            fs.copyFile(demoConfigPath, themeConfigPath, err => {
              if (err) {
                console.log(err)

                return
              } else {
                console.log(`Reset Complete`)
              }
            })
          }
        }
      })
    }
  })
}
