const fs = require('fs')
const path = require('path')
const pathConfig = require('../configs/paths.json')

let demo = 'demo-1'
const demoConfigPath = `${pathConfig.demoConfigsPathTSX}/demo-1.ts`
const i18nPath = `${pathConfig.fullVersionTSXPath}/src/configs/i18n.ts`
const themeConfigPath = `${pathConfig.fullVersionTSXPath}/src/configs/themeConfig.ts`
const nextConfigPath = `${pathConfig.fullVersionTSXPath}/next.config.js`
const settingsContextFile = `${pathConfig.fullVersionTSXPath}/src/@core/context/settingsContext.tsx`

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
          const updatedData = data.replace(new RegExp(`/demo/react-master/${demo}/images/`, 'g'), '/images/')
          fs.writeFile(path.join(__dirname, dirPath, '/', file), updatedData, err => {
            if (err) {

              console.log(err);

              return
            }
          })

          arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
        }
      })
    }
  })

  return arrayOfFiles
}

const removeBasePathInI18n = () => {
  fs.readFile(i18nPath, 'utf-8', (err, data) => {
    if (err) {

      console.log(err);

      return
    } else {
      const updatedData = data.replace(`/demo/react-master/${demo}/locales/`, '/locales/')
      fs.writeFile(i18nPath, '', err => {
        if (err) {
          console.log(err);

          return
        } else {
          fs.writeFile(i18nPath, updatedData, err => {
            if (err) {

              console.log(err);

              return
            }
          })
        }
      })
    }
  })
}

removeBasePathInImages(`${pathConfig.fullVersionTSXPath}/src`)
removeBasePathInI18n()

if (fs.existsSync(settingsContextFile)) {
  fs.readFile(settingsContextFile, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)

      return
    } else {
      const result = data.replace(new RegExp(/(localStorage.(get|set)Item\(')(.*)('.*\))/, 'g'), `$1settings$4`)
      fs.writeFile(settingsContextFile, '', err => {
        if (err) {
          console.log(err);

          return
        } else {
          fs.writeFile(settingsContextFile, result, function (err) {
            if (err) {
              console.log(err)

              return
            } else {
              if (fs.existsSync(nextConfigPath)) {
                const nextConfigData = fs.readFileSync(nextConfigPath).toString().split('\n')

                const result = nextConfigData
                  .filter(line => {
                    return line.indexOf('basePath') === -1
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
                // fs.copyFile(demoConfigPath, themeConfigPath, err => {
                //   if (err) {
                //     console.log(err)

                //     return
                //   } else {
                //     console.log(`Reset Complete`)
                //   }
                // })
                fs.readFile(demoConfigPath, 'utf-8', (err, data) => {
                  if (err) {
                    console.log(err);

                    return
                  } else {
                    fs.writeFile(themeConfigPath, data, err => {
                      if (err) {
                        console.log(err);

                        return
                      }
                    })
                  }
                })
              }
            }
          })
        }
      })
    }
  })
}
