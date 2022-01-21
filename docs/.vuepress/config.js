module.exports = {
  base: '/',
  theme: 'book',
  title: 'Master',
  description: 'Master React Admin Dashboard Template',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Demo', link: 'http://google.com' },
      { text: 'Purchase', link: 'http://google.com' }
    ],
    sidebar: {
      '/guide/': [
        ['', 'Welcome'],
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/guide/getting-started/starter-kit-vs-full-package',
            '/guide/getting-started/support',
            '/guide/getting-started/github-access'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            '/guide/development/installation',
            '/guide/development/folder-structure',
            '/guide/development/routing',
            '/guide/development/deployment',
            '/guide/development/redux',
            '/guide/development/fakedb',
            '/guide/development/authentication',
            '/guide/development/internationalization',
            '/guide/development/rtl',
            '/guide/development/loaders',
            '/guide/development/environment-variables'
          ]
        },
        {
          title: 'Settings',
          collapsable: false,
          children: [
            '/guide/settings/theme-config',
            '/guide/settings/context',
            '/guide/settings/hooks',
            '/guide/settings/page-specific-settings'
          ]
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [
            '/guide/layout/layout-types',
            '/guide/layout/layout-components',
            '/guide/layout/get-layout',
            '/guide/layout/navigation-menu',
            '/guide/layout/layout-overrides',
            '/guide/layout/icons'
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/guide/components/cards',
            '/guide/components/avatar',
            '/guide/components/badge',
            '/guide/components/chips'
          ]
        },
        {
          title: 'Forms',
          collapsable: false,
          children: ['/guide/forms/input-group']
        },
        {
          title: 'Custom Components',
          collapsable: false,
          children: [
            '/guide/custom-components/sidebar',
            '/guide/custom-components/chatlog',
            '/guide/custom-components/repeater',
            '/guide/custom-components/apex-charts',
            '/guide/custom-components/react-draft-wysiwyg'
          ]
        }
      ]
    }
  },
  plugins: [
    ['@vuepress/back-to-top'],
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img.medium-zoom',
        options: {
          background: '#0e0e0ecc',
          margin: 50
        }
      }
    ]
  ]
}
