const fs = require('fs')

const jsConfigPath = '../../jsx-version/jsconfig.json'

const jsConfig = {
  compilerOptions: {
    baseUrl: '.'
  },
  include: ['src']
}

// Write jsconfig.json in jsx-version
fs.writeFile(jsConfigPath, JSON.stringify(jsConfig), err => {
  if (err) {
    console.error(err)

    return
  } else {
    console.log('File Written: JSCONFIG!!!!!!!')
  }
})
