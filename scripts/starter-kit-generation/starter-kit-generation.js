const fs = require('fs')

const {
  AppPathTSX,
  AppPathJSX,
  starterPath,
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

if (passedArgs[0] !== undefined) {
  arg = passedArgs[0]
} else {
  arg = null
}

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
          .replace(new RegExp(/\/\/[\s\S]*? Context/), '')
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

const generateSecondPage = (version, fileToRead) => {
  fs.mkdir(`${starterPath}/${version}/src/pages/second-page`, err => {
    if (err) {
      console.log(err)

      return
    } else {
      fs.writeFile(
        `${starterPath}/${version}/src/pages/second-page/index.${version === 'jsx' ? 'js' : 'tsx'}`,
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

const generateTSXStarter = () => {
  fs.mkdir(`${starterPath}/tsx`, err => {
    if (err) {
      console.log(err)

      return
    } else {
      filesToCopyTSX.map(file => {
        copyRecursiveSync(file, `${starterPath}/tsx/${file.replace('../../', '')}`)
      })

      foldersToRemoveTSX.map(folder => {
        fs.rm(folder, { recursive: true, force: true }, err => {
          if (err) {
            console.log(err)

            return
          }
        })
      })

      fs.rm(`${starterPath}/tsx/src/pages`, { recursive: true, force: true }, err => {
        if (err) {
          console.log(err)

          return
        } else {
          fs.mkdir(`${starterPath}/tsx/src/pages`, err => {
            if (err) {
              console.log(err)

              return
            } else {
              foldersToKeepTSX.map(file => {
                copyRecursiveSync(`../../src/${file}`, `${starterPath}/tsx/src/${file}`)
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

              generateSecondPage('tsx', './components/tsx/second-page/index.tsx')
            }
          })
        }
      })
    }
  })
}

const generateJSXPackage = () => {
  if (fs.existsSync('../../jsx-version')) {
    fs.mkdir(`${starterPath}/jsx`, err => {
      if (err) {
        console.log(err)

        return
      } else {
        filesToCopyJSX.map(file => {
          copyRecursiveSync(file, `${starterPath}/jsx/${file.replace('../../jsx-version', '')}`)
        })

        foldersToRemoveJSX.map(folder => {
          fs.rm(folder, { recursive: true, force: true }, err => {
            if (err) {
              console.log(err)

              return
            }
          })
        })

        fs.rm(`${starterPath}/jsx/src/pages`, { recursive: true, force: true }, err => {
          if (err) {
            console.log(err)

            return
          } else {
            fs.mkdir(`${starterPath}/jsx/src/pages`, err => {
              if (err) {
                console.log(err)

                return
              } else {
                foldersToKeepJSX.map(file => {
                  copyRecursiveSync(`../../jsx-version/src/${file}`, `${starterPath}/jsx/src/${file}`)
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
                generateSecondPage('jsx', './components/jsx/second-page/index.js')
              }
            })
          }
        })
      }
    })
  }
}

const generate = () => {
  if (arg !== null) {
    if (arg === 'tsx') {
      generateTSXStarter()
    } else {
      generateJSXPackage()
    }
  } else {
    generateTSXStarter()
    generateJSXPackage()
  }
}

if (!fs.existsSync(starterPath)) {
  fs.mkdir(starterPath, err => {
    if (err) {
      console.log(err)
    } else {
      generate()
    }
  })
} else {
  fs.rm(starterPath, { recursive: true, force: true }, err => {
    if (err) {
      console.log(err)
    } else {
      fs.mkdir(starterPath, err => {
        if (err) {
          console.log(err)
        } else {
          generate()
        }
      })
    }
  })
}
