// ** React Imports
import { ReactNode } from 'react'

// ** Third Party Import
// import axios from 'axios'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'
import HorizontalNavItems from 'src/navigation/horizontal'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  /* const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    axios.get(`/navigation/data`).then(response => {
      console.log(response.data)
      setMenuItems(response.data)
    })
  }, [])

  if (menuItems.length === 0) {
    return null
  } */

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

/* export const getServerSideProps = async () => {
  // Call external API from here directly
  const response = await axios.get(`/navigation/data`)
  const data = await response.data
  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { menuItems: data }
  }
} */

export default UserLayout
