const fs = require('fs')
const path = require('path')

const pathConfig = require('../configs/paths.json')
const {
  AllFilesTSX,
  AllFilesJSX,
  sourceFilesTSX,
  sourceFilesJSX,
  getAllIndexFiles,
  replaceCodeWithNull,
  doesJSXVersionExits
} = require('./helpers')


const componentsPath = `${pathConfig.fullVersionTSXPath}/src/pages/components/`
const formsPath = `${pathConfig.fullVersionTSXPath}/src/pages/forms/form-elements/`


const AllIndexFiles = [...getAllIndexFiles(componentsPath), ...getAllIndexFiles(formsPath)]

const generateTSXSourceCode = () => {
  AllFilesTSX.map(fileTSX => {
    if (
      !fileTSX.endsWith('SourceCode.tsx') &&
      !fileTSX.endsWith('index.tsx') &&
      !fileTSX.endsWith('data.ts') &&
      !fileTSX.endsWith('types.ts') &&
      !fileTSX.endsWith('DS_Store')
    ) {
      const parentFolderTSX = path.basename(path.dirname(fileTSX))
      const fileNameTSX = path.basename(fileTSX, '.tsx')
      const fileJSX = AllFilesJSX.filter(i => i.includes(fileNameTSX))[0]
      const sourceToReadTSX = sourceFilesTSX.filter(t => t.includes(parentFolderTSX))[0]
      const sourceToReadJSX = sourceFilesJSX.filter(t => t.includes(parentFolderTSX))[0]

      if (sourceToReadTSX && fileTSX) {
        fs.readFile(fileTSX, 'utf8', (err, dataTSX) => {
          fs.readFile(sourceToReadTSX, 'utf8', () => {
            const codeTSX =
              'export const ' +
              fileNameTSX +
              'TSXCode = (' +
              "<pre className='language-jsx'>" +
              "<code className='language-jsx'>" +
              '{`' +
              dataTSX.replace(/`/g, '').replace(/\$/g, '').replace(/\\"/, '"').replace(/\\"/, '"') +
              '`}' +
              '</code>' +
              '</pre>' +
              ') \n'

            fs.writeFile(sourceToReadTSX, '', err => {
              if (err) {
                console.log(err)
              }
              fs.appendFile(sourceToReadTSX, codeTSX, err => {
                if (err) {
                  console.log(err)
                }
              })
            })
          })
        })

        if (doesJSXVersionExits) {
          if (sourceToReadJSX && fileJSX) {
            // sourceToReadJSX.includes('MuiPickersSourceCode') ? console.log(fileJSX) : null
            fs.readFile(fileJSX, 'utf8', (err, dataJSX) => {
              fs.readFile(sourceToReadJSX, 'utf8', (err, source) => {
                const codeJSX =
                  'export const ' +
                  fileNameTSX +
                  'JSXCode = (' +
                  "<pre className='language-jsx'>" +
                  "<code className='language-jsx'>" +
                  '{`' +
                  dataJSX.replace(/`/g, '').replace(/\$/g, '').replace(/\\"/, '"').replace(/\\"/, '"') +
                  '`}' +
                  '</code>' +
                  '</pre>' +
                  ') \n'
                if (sourceToReadTSX) {
                  fs.appendFile(sourceToReadTSX, codeJSX, err => {
                    if (err) {
                      console.log(err)
                    }
                  })
                }
              })
            })
          }
        } else {
          console.log('JSX Version does not exist')
        }
      }
    }

    return
  })
}

generateTSXSourceCode()

if (!doesJSXVersionExits) {
  replaceCodeWithNull(AllIndexFiles, 'jsx')
} else {
  if(AllIndexFiles){
    AllIndexFiles.map(file => {
      fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
          console.log(err);
          return
        }else{
            const splitData = data.split('\r\n')
            // const lineIndex = splitData.findIndex(i => i.trim().includes('jsx: null'))
            // const prevLineIndex = lineIndex - 1

            splitData.forEach((line, index) => {
              if(line.trim().includes('jsx:')){
                const replaced = splitData[index - 1] ? splitData[index - 1].replace('tsx: ', '').replace('TSXCode', 'JSXCode').replace(',', '') : null
                if(replaced){

                  line = line.replace('null', replaced)
                }
                return line
              }else{
                return line
              }
            })

              fs.writeFile(file, splitData.join('\r\n'), err => {
                if(err){
                  console.log(err);

                  return
                }
              })

            // if(splitData[lineIndex]){
            //   const replacedLine = splitData[prevLineIndex].replace('tsx:', 'jsx:').replace('TSXCode', 'JSXCode')
            //   splitData[lineIndex] = splitData[lineIndex].replace(splitData[lineIndex], replacedLine)
             
            //   result = splitData.join('\n')
             
            
            // }

            // console.log(result);
        }
      })
    })
  }
  return
}

module.exports = {
  generateTSXSourceCode
}
