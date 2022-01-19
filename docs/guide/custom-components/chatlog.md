# Chatlog

## Overview

You can use chatlog component to show your chats.

## Usage

Chatlog component only takes `data` prop.

Data prop must have following properties: `chat`, `contact` & `userContact`.

```jsx
import ChatLog from 'src/@core/components/chat-log'

const Component = () => <ChatLog data={{...}}>{children}</ChatLog>

export default Component
```

## Props

| Prop |   Type   | Required | Description |
| ---- | :------: | -------: | ----------: |
| Data | `Object` |      Yes |   Chat data |
