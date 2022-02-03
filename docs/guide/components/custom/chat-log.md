# Chat Log

## Overview

You can use the Chat log component to show your chats i.e. exchange of messages between two persons.

## Usage

```tsx
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ChatLog from 'src/@core/components/chat-log'

const Component = () => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  
  return (
    <>
      {/* Your some content */}
      <ChatLog data={{...}} hidden={hidden}>{children}</ChatLog>
    </>
  )
}

export default Component
```

## Props

| Prop   |   Type    | Required | Description                                                                  |
| ------ | :-------- | :------- | :--------------------------------------------------------------------------- |
| hidden | `boolean` |      Yes | If `true`, navigation menu opens from drawer (Vertical Overlay Menu)         |
| data   | `Object`  |      Yes | the object must have following properties: `chat`, `contact` & `userContact` |

::: tip
You can see the format of the `data` prop in `tsx-version/full-version/src/@core/components/chat-log/types.ts` and `tsx-version/full-version/src/types/apps/chatTypes.ts` files combined.
:::
