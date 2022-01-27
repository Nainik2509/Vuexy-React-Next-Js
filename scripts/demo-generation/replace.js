const fs = require('fs')
const path = require('path')
const replace = require('replace-in-file')

let demo = 'demo-1'
const baseDir = '../../src'
const i18nPath = '../../src/configs/i18n.ts'
const nextConfigPath = '../../next.config.js'
const themeConfigPath = '../../src/configs/themeConfig.ts'
const settingsContextFile = '../../src/@core/context/settingsContext.tsx'

const demoArgs = process.argv.slice(2)

if (demoArgs[0] !== undefined) {
  demo = demoArgs[0]
}

const replaceBasePathInImages = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = replaceBasePathInImages(dirPath + '/' + file, arrayOfFiles)
    } else {
      fs.readFile(path.join(__dirname, dirPath, '/', file), 'utf-8', (err, data) => {
        if (err) {
          console.error(err)

          return
        } else {
          const content = data.split('\n')

          content.forEach(line => {
            if (line.includes('/images/')) {
              const replaced = line.replace('/images/', `/demo/react-master/${demo}/images/`)
              replace.sync({
                files: path.join(__dirname, dirPath, '/', file),
                from: line,
                to: replaced
              })
            }
          })

          arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
        }
      })
    }
  })

  return arrayOfFiles
}

const replaceBasePathInI18n = () => {
  fs.readFile(i18nPath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)

      return
    } else {
      if (data.includes('/locales/')) {
        replace.sync({
          files: i18nPath,
          from: '/locales/',
          to: `/demo/react-master/${demo}/locales/`
        })
      }
    }
  })
}

replaceBasePathInImages(baseDir)
replaceBasePathInI18n()

if (fs.existsSync(settingsContextFile)) {
  fs.readFile(settingsContextFile, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)

      return
    } else {
      const result = data.replace(new RegExp(/(localStorage.(get|set)Item\(')(.*)('.*\))/, 'g'), `$1settings-${demo}$4`)
      fs.writeFile(settingsContextFile, result, function (err) {
        if (err) {
          console.log(err)

          return
        }
      })

      if (fs.existsSync(nextConfigPath)) {
        const nextConfigData = fs.readFileSync(nextConfigPath).toString().split('\n')
        nextConfigData.splice(14, 0, `basePath: '/demo/react-master/${demo}',`)
        const result = nextConfigData.join('\n')

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

      const demoConfigPath = `../../demo-configs/${demo}.ts`

      if (fs.existsSync(themeConfigPath) && fs.existsSync(demoConfigPath)) {
        fs.copyFile(demoConfigPath, themeConfigPath, err => {
          if (err) {
            console.log(err)

            return
          } else {
            console.log(`Working on ${demo}`)
          }
        })
      }
    }
  })
}
