# Repeater

## Overview

We have created a Repeater component to duplicate a component.

## Usage

Repeater only takes one prop `count`.

```jsx
import { useState } from 'react'
import Repeater from 'src/@core/components/repeater'

const Component = () => {
  const [count, setCount] = useState(1)

  return <Repeater count={count}>{i => <Form>...</Form>}</Repeater>
}

export default Component
```

## Props

| Prop  |     Type      | Required |     Description |
| ----- | :-----------: | -------: | --------------: |
| count |   `number`    |      Yes | Component Count |
| tag   | `element tag` |       No |   Component Tag |
