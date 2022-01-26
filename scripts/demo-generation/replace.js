const fs = require('fs')

let demo = 'demo-1'
const themeConfigPath = '../../src/configs/themeConfig.ts'
const settingsContextFile = '../../src/@core/context/settingsContext.tsx'

const demoArgs = process.argv.slice(2)

if (demoArgs[0] !== undefined) {
  demo = demoArgs[0]
}

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
    }
  })
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
