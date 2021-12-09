// ** Next Imports
import dynamic from 'next/dynamic'

// ** Styled Components
import { EditorWrapper } from '@core/styles/libs/react-draft-wysiwyg'

// ! To avoid Window is not defined Error
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false })
const EditorUncontrolled = () => {
  return (
    <EditorWrapper>
      <Editor />
    </EditorWrapper>
  )
}

export default EditorUncontrolled
