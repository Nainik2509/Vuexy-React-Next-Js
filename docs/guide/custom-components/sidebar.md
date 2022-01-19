# Sidebar

## Overview

We have created a sidebar component with position `absolute` incase if you need to show a sidebar inside a container.

## Usage

Sidebar usage is pretty simple all you have to do is import the sidebar & pass `show` prop.

```jsx
import Sidebar from 'src/@core/components/sidebar'

const Component = () => <Sidebar show={userProfileRightOpen}>{children}</Sidebar>

export default Component
```

## Props

| Prop          |      Type       | Required |                              Description |
| ------------- | :-------------: | -------: | ---------------------------------------: |
| show          | `true`, `false` |      Yes |                    Visibility of sidebar |
| hideBackdrop  | `true`, `false` |       No |                   Hides sidebar backdrop |
| direction     | `left`, `right` |       No |                     Direction of sidebar |
| onOpen        |   `function`    |       No |           Sidebar Open callback function |
| onClose       |   `function`    |       No |          Sidebar Close callback function |
| backDropClick |   `function`    |       No | Sidebar backdrop click callback function |
