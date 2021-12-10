// ** Navigation Drawer Import
import Drawer from './Drawer'

interface Props {
  hidden: boolean
  navWidth: number
  collapsedNavWidth: number
}

const index = (props: Props) => {
  const { hidden, navWidth, collapsedNavWidth } = props

  return <Drawer hidden={hidden} navWidth={navWidth} collapsedNavWidth={collapsedNavWidth} />
}

export default index
