// ** React Imports
import { FC, ReactNode } from 'react'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from '@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'navigation/vertical'
import HorizontalNavItems from 'navigation/horizontal'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayout: FC<Props> = (props: Props) => {
  // ** Props
  const { children } = props

  // const [menuItems, setMenuItems] = useState([])

  // useEffect(() => {
  //   axios.get(`/navigation/data`).then(response => {
  //     console.log(response.data)
  //     setMenuItems(response.data)
  //   })
  // }, [])

  // ** Hooks
  const { settings, saveSettings } = useSettings()

  // if (menuItems.length === 0) {
  //   return null
  // }

  return (
    <Layout
      settings={settings}
      saveSettings={saveSettings}
      {...(settings.layout === 'horizontal'
        ? { horizontalNavItems: HorizontalNavItems() }
        : { verticalNavItems: VerticalNavItems() })}
    >
      {children}
    </Layout>
  )
}

export default UserLayout

// export async function getServerSideProps() {
//   // Call external API from here directly
//   const response = await axios.get(`/navigation/data`)
//   const data = await response.data
//   if (!data) {
//     return {
//       notFound: true
//     }
//   }

//   return {
//     props: { menuItems: data }
//   }
// }
