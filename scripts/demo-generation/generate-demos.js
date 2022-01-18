const fs = require('fs')

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

        // fs.writeFile(fileName, JSON.stringify(demoData[key]), err => {
        //   if (err) {
        //     console.log(err)
        //   }
        // })

        if (fs.existsSync(defaultConfigPath)) {
          fs.readFile(defaultConfigPath, 'utf-8', (err, defaultConfigData) => {
            fs.writeFile(fileName, defaultConfigData, err => {
              if (err) {
                console.log(err)
              } else {
                fs.readFile(fileName, 'utf-8', (err, writtenConfigData) => {
                  let formatted = null
                  Object.keys(demoData[key]).forEach(val => {
                    writtenConfigData.split(/\r?\n/).forEach(line => {
                      const propKey = val
                      const propValue = demoData[key][val]
                      if (line.includes(propKey) && line.includes('/*')) {
                        const valToReplace = line.match(/'(\w+)'/)[1]
                        formatted = line.replace(valToReplace, propValue)
                      } else {
                        return
                      }
                      if (formatted !== null) {
                        fs.readFile(fileName, 'utf-8', (err, data) => {
                          fs.writeFile(fileName, data.replace(line, formatted), err => {
                            if (err) {
                              console.log(err)
                            }
                          })
                        })

                        // if (Object.keys(demoData[key]).length > 1) {
                        //   Object.keys(demoData[key]).forEach(val => {
                        //     fs.readFile(fileName, 'utf-8', (err, writtenConfigData) => {
                        //       fs.writeFile(fileName, writtenConfigData.replace(line, formatted), err => {
                        //         if (err) {
                        //           console.log(err)
                        //         }
                        //       })
                        //     })
                        //   })
                        // } else {
                        //   fs.writeFile(fileName, writtenConfigData.replace(line, formatted), err => {
                        //     if (err) {
                        //       console.log(err)
                        //     }
                        //   })
                        // }
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
