// ** Next Import
import dynamic from 'next/dynamic'

// ** Third Party Imports
import { EditorProps } from 'react-draft-wysiwyg'

// ** Styled Components
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'

// ! To avoid 'Window is not defined' error
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false })

const EditorUncontrolled = () => {
  return (
    <EditorWrapper>
      <Editor />
    </EditorWrapper>
  )
}

export default EditorUncontrolled
