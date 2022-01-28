const fs = require('fs')
const replace = require('replace-in-file')

const packagePath = '../../downloadable-package'
const userLayoutPath = `${packagePath}/src/layouts/UserLayout.tsx`
const BuyNowComponentPath = `${packagePath}/src/layouts/components/BuyNowButton.tsx`

if (fs.existsSync(packagePath)) {
  if (fs.existsSync(userLayoutPath)) {
    replace({
      files: userLayoutPath,
      from: "import BuyNowButton from './components/BuyNowButton'",
      to: ''
    })
    replace({
      files: userLayoutPath,
      from: '<BuyNowButton />',
      to: ''
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
