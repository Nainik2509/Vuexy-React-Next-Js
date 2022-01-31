const fs = require('fs')
const path = require('path')

const packagePath = '../../downloadable-package'
const userLayoutPathTSX = `${packagePath}/tsx/src/layouts/UserLayout.tsx`
const BuyNowComponentPathTSX = `${packagePath}/tsx/src/layouts/components/BuyNowButton.tsx`
const userLayoutPathJSX = `${packagePath}/jsx/src/layouts/UserLayout.js`
const BuyNowComponentPathJSX = `${packagePath}/jsx/src/layouts/components/BuyNowButton.js`

const filesToCopyTSX = [
  '../../demo-configs',
  '../../public',
  '../../src',
  '../../styles',
  '../../.editorconfig',
  '../../.env',
  '../../.eslintrc.json',
  '../../.gitignore',
  '../../.prettierrc.js',
  '../../declaration.d.ts',
  '../../next-env.d.ts',
  '../../next.config.js',
  '../../next.d.ts',
  '../../package.json',
  '../../tsconfig.json'
]

const filesToCopyJSX = [
  '../../demo-configs',
  '../../jsx-version/public',
  '../../jsx-version/src',
  '../../jsx-version/styles',
  '../../jsx-version/.editorconfig',
  '../../jsx-version/.env',
  '../../jsx-version/.eslintrc.js',
  '../../jsx-version/.gitignore',
  '../../jsx-version/.prettierrc.js',
  '../../jsx-version/next.config.js',
  '../../jsx-version/package.json',
  '../../jsx-version/jsconfig.json'
]

let arg = null

const passedArgs = process.argv.slice(2)

if (passedArgs[0] !== undefined) {
  arg = passedArgs[0]
} else {
  arg = null
}

const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()
  if (isDirectory) {
    !fs.existsSync(dest) ? fs.mkdirSync(dest) : null
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName))
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

const updateContent = (userLayoutPath, BuyNowComponentPath) => {
  if (fs.existsSync(userLayoutPath)) {
    fs.readFile(userLayoutPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const result = data
          .replace("import BuyNowButton from './components/BuyNowButton'", '')
          .replace('<BuyNowButton />', '')
        fs.writeFile(userLayoutPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('UserLayout File Does Not Exist!')

    return
  }
  if (fs.existsSync(BuyNowComponentPath)) {
    fs.unlink(BuyNowComponentPath, err => {
      if (err) {
        console.log(err)

        return
      }
    })
  } else {
    console.log('BuyNow Component File Does Not Exist!')

    return
  }
}

const generateTSXPackage = () => {
  fs.mkdir(`${packagePath}/tsx`, err => {
    if (err) {
      console.log(err)

      return
    } else {
      filesToCopyTSX.map(file => {
        copyRecursiveSync(file, `${packagePath}/tsx/${file.replace('../../', '')}`)
      })
      updateContent(userLayoutPathTSX, BuyNowComponentPathTSX)
    }
  })
}

const generateJSXPackage = () => {
  if (fs.existsSync('../../jsx-version')) {
    fs.mkdir(`${packagePath}/jsx`, err => {
      if (err) {
        console.log(err)

        return
      } else {
        filesToCopyJSX.map(file => {
          copyRecursiveSync(file, `${packagePath}/jsx/${file.replace('../../jsx-version/', '')}`)
        })
        updateContent(userLayoutPathJSX, BuyNowComponentPathJSX)
      }
    })
  }
}

const generate = () => {
  if (arg !== null) {
    if (arg === 'tsx') {
      generateTSXPackage()
    } else {
      generateJSXPackage()
    }
  } else {
    generateTSXPackage()
    generateJSXPackage()
  }
}

if (!fs.existsSync(packagePath)) {
  fs.mkdir(packagePath, err => {
    if (err) {
      console.log(err)
    } else {
      generate()
    }
  })
} else {
  fs.rm(packagePath, { recursive: true, force: true }, err => {
    if (err) {
      console.log(err)
    } else {
      fs.mkdir(packagePath, err => {
        if (err) {
          console.log(err)
        } else {
          generate()
        }
      })
    }
  })
}
