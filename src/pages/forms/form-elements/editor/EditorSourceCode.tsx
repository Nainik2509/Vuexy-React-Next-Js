export const EditorControlledCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC, useState } from 'react'

// ** Third Party Imports
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'

// ** Styled Components
import { EditorWrapper } from '@core/styles/libs/react-draft-wysiwyg'

const EditorControlled: FC = () => {
  // ** State
  const [value, setValue] = useState(EditorState.createEmpty())

  return (
    <EditorWrapper>
      <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
    </EditorWrapper>
  )
}

export default EditorControlled
`}</code>
  </pre>
)
export const EditorUncontrolledCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** Third Party Imports
import { Editor } from 'react-draft-wysiwyg'

// ** Styled Components
import { EditorWrapper } from '@core/styles/libs/react-draft-wysiwyg'

const EditorUncontrolled: FC = () => {
  return (
    <EditorWrapper>
      <Editor />
    </EditorWrapper>
  )
}

export default EditorUncontrolled
`}</code>
  </pre>
)
