// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'
import HorizontalNavItems from 'src/navigation/horizontal'

// ** Language Dropdown Component Import
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // ** For Server Sided Navigation
  // const [menuItems, setMenuItems] = useState([])

  // useEffect(() => {
  //   axios.get(`/navigation/data`).then(response => {
  //     const menuArr = response.data

  /* - Replace the icon string with the component
     - If you don't want to import the whole icon library
     - you can create a static object and replace the icons using that object
   */
  //     menuArr.forEach(item => {
  //       if (item.icon) {
  //         item.icon = Icons[item.icon]

  //         return item
  //       }

  //       return item
  //     })

  //     setMenuItems(menuArr)
  //   })
  // }, [])

  // if (menuItems.length === 0) {
  //   return null
  // }

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      languageDropdown={() => <LanguageDropdown settings={settings} saveSettings={saveSettings} />}
      {...(settings.layout === 'horizontal'
        ? { horizontalNavItems: HorizontalNavItems() }
        : { verticalNavItems: VerticalNavItems() })}
    >
      {children}
    </Layout>
  )
}

export default UserLayout
