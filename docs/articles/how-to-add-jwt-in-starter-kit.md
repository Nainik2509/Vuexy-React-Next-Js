# How to add JWT in starter-kit

Master uses context & fake-db to authenticate users. Follow these steps to integrate authentication in starter-kit:

1. Wrap your components with `AuthProvider` in `_app.tsx` file.

```tsx _app.tsx
// ** Contexts
import { AuthProvider } from 'src/@core/context/AuthContext'

type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}


const App = (props: ExtendedAppProps) => {
 return <AuthProvider>...</AuthProvider>
}

export default App
```

2.
