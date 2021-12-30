export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  redirectURL: (role: 'admin' | 'client' | null) => {
    if (role === 'admin') return '/dashboard/analytics'
    if (role === 'client') return '/pages/access-control'

    return '/login'
  }
}
