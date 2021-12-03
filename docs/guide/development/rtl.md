# RTL

In this page you will find how RTL works.

## Overview

We are using MUI's direction property for RTL.
You can read about it from [here](https://mui.com/guides/right-to-left/)

## useDirection

We have created a hook to make it easier for you to toggle between `LTR` & `RTL`.
`useDirection` hook returns two things a current `direction` & `setDirection`.

You can find the hook in `src/utility/hooks/layout/useDirection`. Refer below code for usage example.

```jsx
import { FC } from 'react'
import useDirection from 'hooks/layout/useDirection'

const Component: FC = () => {
  const { direction, setDirection } = useDirection()

  return (
    <div>
      <h1>direction: {direction}</h1>
      <button onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}>Toggle direction</button>
    </div>
  )
}

export default Component
```
