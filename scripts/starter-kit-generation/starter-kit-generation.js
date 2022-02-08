const fs = require('fs')
const pathConfig = require('../configs/paths.json')

const {
  AppPathTSX,
  AppPathJSX,
  LoginPathTSX,
  LoginPathJSX,
  filesToReplace,
  filesToCopyTSX,
  filesToCopyJSX,
  foldersToKeepTSX,
  foldersToKeepJSX,
  RegisterPathTSX,
  RegisterPathJSX,
  appDataToReplace,
  copyRecursiveSync,
  userLayoutPathTSX,
  userLayoutPathJSX,
  PackageJSONPathTSX,
  foldersToRemoveTSX,
  themeConfigPathTSX,
  foldersToRemoveJSX,
  themeConfigPathJSX,
  PackageJSONPathJSX,
  TranslationsPathTSX,
  UserDropdownPathTSX,
  UserDropdownPathJSX,
  TranslationsPathJSX,
  BuyNowComponentPathTSX,
  BuyNowComponentPathJSX
} = require('./helpers')

let arg = null

const passedArgs = process.argv.slice(2)

// ** Updated args var
if (passedArgs[0] !== undefined) {
  arg = passedArgs[0]
} else {
  arg = null
}

/* 
 - Remove BuyNow
 - Replaces "^" & "~" in package.json 
 - Removes i18n 
 - Removes Auth & urls in user dropdown 
 - Replace imports, types & wrapper in _app file 
 - Disable customizer in ThemeConfig file
 - Removes Auth from login file
 - Removes Auth from Register file
*/
const updateContent = (
  UserLayoutPath,
  BuyNowComponentPath,
  PackageJSONPath,
  TranslationsPath,
  AppPath,
  UserDropdownPath,
  ThemeConfigPath,
  LoginPath,
  RegisterPath
) => {
  if (fs.existsSync(UserLayoutPath)) {
    fs.readFile(UserLayoutPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const result = data
          .replace("import BuyNowButton from './components/BuyNowButton'", '')
          .replace('<BuyNowButton />', '')
        fs.writeFile(UserLayoutPath, result, err => {
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
  if (fs.existsSync(PackageJSONPath)) {
    fs.readFile(PackageJSONPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const result = data.replace(/\^/g, '').replace('~', '')
        fs.writeFile(PackageJSONPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('package.json File Does Not Exist!')

    return
  }
  if (fs.existsSync(TranslationsPath)) {
    fs.readFile(TranslationsPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const result = data
          .replace("import { useTranslation } from 'react-i18next'", '')
          .replace('const { t } = useTranslation()', '')
          .replace('{`${t(text)}`}', '{text}')
        fs.writeFile(TranslationsPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('package.json File Does Not Exist!')

    return
  }

  if (fs.existsSync(UserDropdownPath)) {
    fs.readFile(UserDropdownPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const result = data
          .replace("import { useAuth } from 'src/@core/hooks/useAuth'", '')
          .replace(new RegExp(/\/\/ \*\* Context/), '')
          .replace('const { logout } = useAuth()', '')
          .replace('logout()', '')
          .replace(/if (url) [\s\S]*? setAnchorEl/, 'setAnchorEl')
          .replace(new RegExp(/(handleDropdownClose\(')(.*)('.*\))/, 'g'), 'handleDropdownClose()')
          .replace('onClick={handleLogout}', "onClick={() => handleDropdownClose('/login')}")
          .replace(new RegExp(/const handleLogout = \(\) => {[\s\S]*? }/), '')

        fs.writeFile(UserDropdownPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('UserDropdown.tsx File Does Not Exist!')

    return
  }

  if (fs.existsSync(AppPath)) {
    fs.readFile(AppPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        let result = data
        appDataToReplace.forEach(replacement => {
          result = result.replace(replacement.from, replacement.to)
        })
        fs.writeFile(AppPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('package.json File Does Not Exist!')

    return
  }

  if (fs.existsSync(ThemeConfigPath)) {
    fs.readFile(ThemeConfigPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const result = data.replace('disableCustomizer: false', 'disableCustomizer: true')

        fs.writeFile(ThemeConfigPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('ThemeConfig File Does Not Exist!')

    return
  }

  if (fs.existsSync(LoginPath)) {
    fs.readFile(LoginPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const newLoginBtn = `<Link href='/' passHref>
     <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }}>
      Login
      </Button>
</Link>`
        const result = data
          .replace('/pages/auth/forgot-password-v2', '/forgot-password')
          .replace('/pages/auth/register-v2', '/register')
          .replace(new RegExp('LoginV2', 'g'), 'Login')
          .replace(new RegExp(/<Button .*>[\s\S]*? <\/Button>/), newLoginBtn)
        fs.writeFile(LoginPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('Login File Does Not Exist!')

    return
  }

  if (fs.existsSync(RegisterPath)) {
    fs.readFile(RegisterPath, 'utf-8', (err, data) => {
      if (err) console.log(err)
      else {
        const newRegisterBtn = `<Link href='/' passHref>
     <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }}>
      Register
      </Button>
</Link>`
        const result = data

          .replace(new RegExp('RegisterV2', 'g'), 'Register')
          .replace(new RegExp(/<Button .*>[\s\S]*? <\/Button>/), newRegisterBtn)
        fs.writeFile(RegisterPath, result, err => {
          if (err) console.log(err)
        })
      }
    })
  } else {
    console.log('Register File Does Not Exist!')

    return
  }
}

// ** Replaces whole files
const replaceFiles = () => {
  filesToReplace.map(file => {
    if (fs.existsSync(file.src)) {
      fs.copyFile(file.src, file.dest, err => {
        if (err) {
          console.log
        }
      })
    }
  })
}

// ** Generates second page in src/pages folder
const generateSecondPage = (parentFolder, fileToRead, fileToWrite) => {
  fs.mkdir(`${parentFolder}/src/pages/second-page`, err => {
    if (err) {
      console.log(err)

      return
    } else {
      fs.writeFile(
        fileToWrite,
        fs.readFileSync(fileToRead).toString(),
        err => {
          if (err) {
            console.log(err)

            return
          }
        }
      )
    }
  })
}

// ** Generates TSX StarterKit
const generateTSXStarter = () => {

  const createStarter = () => fs.mkdir(pathConfig.starterKitTSXPath, err => {
    if (err) {
      console.log(err)

      return
    } else {
      filesToCopyTSX.map(file => {
        const dest = file.replace('full-version', 'starter-kit')

        copyRecursiveSync(file, dest)
      })

      foldersToRemoveTSX.map(folder => {
        fs.rm(folder, { recursive: true, force: true }, err => {
          if (err) {
            console.log(err)

            return
          }
        })
      })

      fs.rm(`${pathConfig.starterKitTSXPath}/src/pages`, { recursive: true, force: true }, err => {
        if (err) {
          console.log(err)

          return
        } else {
          fs.mkdir(`${pathConfig.starterKitTSXPath}/src/pages`, err => {
            if (err) {
              console.log(err)

              return
            } else {
              foldersToKeepTSX.map(file => {
                copyRecursiveSync(`${pathConfig.fullVersionTSXPath}/src/${file}`, `${pathConfig.starterKitTSXPath}/src/${file}`)
              })

              replaceFiles()
              updateContent(
                userLayoutPathTSX,
                BuyNowComponentPathTSX,
                PackageJSONPathTSX,
                TranslationsPathTSX,
                AppPathTSX,
                UserDropdownPathTSX,
                themeConfigPathTSX,
                LoginPathTSX,
                RegisterPathTSX
              )

              generateSecondPage(pathConfig.starterKitTSXPath, './components/tsx/second-page/index.tsx', `${pathConfig.starterKitTSXPath}/src/pages/second-page/index.tsx`)
            }
          })
        }
      })
    }
  })

  if (!fs.existsSync(pathConfig.starterKitTSXPath)) {
    createStarter()

  } else {
    fs.rm(pathConfig.starterKitTSXPath, { recursive: true, force: true }, err => {
      if (err) {
        console.log(err)
      } else {
        createStarter()
      }
    })
  }
}

// ** Generates JSX StarterKit
const generateJSXStarter = () => {

  const createStarter = () => fs.mkdir(pathConfig.starterKitJSXPath, err => {
    if (err) {
      console.log(err)

      return
    } else {
      filesToCopyJSX.map(file => {
        const dest = file.replace('full-version', 'starter-kit')

        copyRecursiveSync(file, dest)
      })

      foldersToRemoveJSX.map(folder => {
        fs.rm(folder, { recursive: true, force: true }, err => {
          if (err) {
            console.log(err)

            return
          }
        })
      })

      fs.rm(`${pathConfig.starterKitJSXPath}/src/pages`, { recursive: true, force: true }, err => {
        if (err) {
          console.log(err)

          return
        } else {
          fs.mkdir(`${pathConfig.starterKitJSXPath}/src/pages`, err => {
            if (err) {
              console.log(err)

              return
            } else {
              foldersToKeepJSX.map(file => {
                copyRecursiveSync(`${pathConfig.fullVersionJSXPath}/src/${file}`, `${pathConfig.starterKitJSXPath}/src/${file}`)
              })

              replaceFiles()
              updateContent(
                userLayoutPathJSX,
                BuyNowComponentPathJSX,
                PackageJSONPathJSX,
                TranslationsPathJSX,
                AppPathJSX,
                UserDropdownPathJSX,
                themeConfigPathJSX,
                LoginPathJSX,
                RegisterPathJSX
              )

              generateSecondPage(pathConfig.starterKitJSXPath, './components/jsx/second-page/index.js', `${pathConfig.starterKitJSXPath}/src/pages/second-page/index.js`)
            }
          })
        }
      })
    }
  })

  if (!fs.existsSync(pathConfig.starterKitJSXPath)) {
    createStarter()

  } else {
    fs.rm(pathConfig.starterKitJSXPath, { recursive: true, force: true }, err => {
      if (err) {
        console.log(err)
      } else {
        createStarter()
      }
    })
  }
}

// ** Generates StarterKit based on args
const generate = () => {
  if (arg !== null) {
    if (arg === 'tsx') {
      generateTSXStarter()
    } else {
      generateJSXStarter()
    }
  } else {
    generateTSXStarter()
    generateJSXStarter()
  }
}


generate()