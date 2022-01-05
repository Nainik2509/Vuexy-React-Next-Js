// ** React Imports
import { useState } from 'react'

// ** Next Import
import dynamic from 'next/dynamic'

// ** Third Party Imports
import { EditorState } from 'draft-js'
import { EditorProps } from 'react-draft-wysiwyg'

// ** Styled Components
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'

// ! To avoid 'Window is not defined' error
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false })

const EditorControlled = () => {
  // ** State
  const [value, setValue] = useState(EditorState.createEmpty())

  return (
    <EditorWrapper>
      <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
    </EditorWrapper>
  )
}

export default EditorControlled
