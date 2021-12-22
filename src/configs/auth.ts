export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/jwt/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  redirectURL: (role: 'admin' | 'client') => {
    if (role === 'admin') return '/dashboard/analytics'
    if (role === 'client') return '/pages/access-control'

    return '/auth/login'
  }
}
