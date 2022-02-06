const fs = require('fs')
const path = require('path')
const pathConfig = require('../configs/paths.json')
const {
  AllFilesTSX,
  AllFilesJSX,
  sourceFilesTSX,
  sourceFilesJSX,
  getAllIndexFiles,
  doesJSXVersionExits
} = require('./helpers')

const componentsPath = `${pathConfig.fullVersionTSXPath}/src/pages/components/`
const formsPath = `${pathConfig.fullVersionTSXPath}/src/pages/forms/form-elements/`

const AllIndexFiles = [...getAllIndexFiles(componentsPath), ...getAllIndexFiles(formsPath)]

const replaceCodeWithNull = (dir, version) => {
  dir.map(file => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err)

        return
      } else {
          let splitData = data.split('\r\n')
          const lineIndex = splitData.findIndex(i => i.toLowerCase().trim().includes(`${version}: source.`))
        //   splitData[lineIndex] ? data.replace(splitData[lineIndex].trim(), `${version}: null`) : null        
        
//    const dataToWrite = data.replace(new RegExp(`^${version}`, 'g'), `${version}: null`)
// splitData.splice(lineIndex, 1, `${version}: null,` )
// console.log(splitData);

splitData.forEach(line => {
    if(line.toLowerCase().trim().includes(`${version}: source.`)){
        console.log(line.replace(line, `${version}: null`));
    }
})

//    console.log(data);
        
          // content.map(line => {
        //   if (line.includes(`${version}:`)) {
            
        //     fs.writeFile(file, data.replace(line, `${version}: null,`), (err) => {
        //       if(err){
        //         console.log(err);
        //       }
        //     })
        //   }
        // })
        
      }
    })
  })
}

replaceCodeWithNull(AllIndexFiles, 'jsx')