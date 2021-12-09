// ** React Imports
import { useState } from 'react'

// ** Next Imports
import dynamic from 'next/dynamic'

// ** Third Party Imports
import { EditorState } from 'draft-js'

// ** Styled Components
import { EditorWrapper } from '@core/styles/libs/react-draft-wysiwyg'

// ! To avoid Window is not defined Error
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false })
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
