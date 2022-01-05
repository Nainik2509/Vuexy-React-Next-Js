export const EditorControlledCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
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
`}</code></pre>) 
export const EditorUncontrolledCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** Next Import
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
`}</code></pre>) 
