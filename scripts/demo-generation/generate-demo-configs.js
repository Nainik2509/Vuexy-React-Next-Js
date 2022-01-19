const fs = require('fs')
const replace = require('replace-in-file')

const demoConfigPath = './demoConfigs.json'
const defaultConfigPath = '../../src/configs/themeConfig.ts'

if (fs.existsSync(demoConfigPath)) {
  fs.readFile(demoConfigPath, 'utf8', (err, demoConfigString) => {
    if (err) {
      console.log(err)
    } else {
      const demoData = JSON.parse(demoConfigString)
      Object.keys(demoData).forEach(key => {
        const demoNumber = key.replace('demo', '')

        const fileName = `../../demo-configs/demo-${demoNumber}.ts`

        if (fs.existsSync(defaultConfigPath)) {
          fs.readFile(defaultConfigPath, 'utf-8', (err, defaultConfigData) => {
            fs.writeFile(fileName, defaultConfigData, err => {
              if (err) {
                console.log(err)
              } else {
                fs.readFile(fileName, 'utf-8', (err, writtenConfigData) => {
                  Object.keys(demoData[key]).forEach(val => {
                    writtenConfigData.split(/\r?\n/).forEach(line => {
                      const propKey = val
                      const propValue = demoData[key][val]
                      if (line.includes(propKey) && line.includes('/*')) {
                        const valToReplace = line.match(/'(\w+)'/)[1]
                        formatted = replace.sync({
                          files: fileName,
                          from: line,
                          to: line.replace(valToReplace, propValue)
                        })
                      }
                    })
                  })
                })
              }
            })
          })
        }
      })
    }
  })
}
