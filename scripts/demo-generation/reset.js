const fs = require('fs')

const themeConfigPath = '../../src/configs/themeConfig.ts'
const demoConfigPath = '../../demo-configs/demo-1.ts'
const nextConfigPath = '../../next.config.js'
const settingsContextFile = '../../src/@core/context/settingsContext.tsx'

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
