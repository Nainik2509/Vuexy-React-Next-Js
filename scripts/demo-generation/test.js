const fs = require('fs')
const path = require('path')
const pathConfig = require('../configs/paths.json')
let demo = 'demo-1'
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
          const splitData = data.split('\r\n')
          const lineIndex = splitData.findIndex(i => i.includes('/images/'))
          splitData[lineIndex] ? splitData[lineIndex].replace('/images/', `/demo/react-master/${demo}/images/`) : null
          if(splitData[lineIndex]){
            splitData[lineIndex] = splitData[lineIndex].replace('/images/', `/demo/react-master/${demo}/images/`) 
          }
          console.log(splitData[lineIndex]);
          // fs.writeFile(path.join(__dirname, dirPath, '/', file), splitData.join('\n'), err => {
          //   if (err) {
          //     console.error(err)

          //     return
          //   }
          // })

          arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
        }
      })
    }
  })

  return arrayOfFiles
}

replaceBasePathInImages(`${pathConfig.fullVersionTSXPath}/src`)