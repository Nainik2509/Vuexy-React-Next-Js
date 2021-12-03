module.exports = {
  base: '/',
  theme: 'book',
  title: 'MUI',
  description: 'MUI React Admin Dashboard Template',
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
          children: ['/guide/getting-started/support', '/guide/getting-started/gitlab-access']
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            '/guide/development/installation',
            '/guide/development/folder-structure',
            '/guide/development/routing',
            '/guide/development/authentication',
            '/guide/development/access-control',
            '/guide/development/internationalization',
            '/guide/development/rtl'
            // '/guide/development/theme-configuration',
            // '/guide/development/template-styles',
            // '/guide/development/splash-screen',
            // '/guide/development/navigation-menus',
            // '/guide/development/redux',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/guide/components/cards',
            '/guide/components/avatar'
            // '/guide/components/cards'
          ]
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [
            '/guide/layout/layout-types'
            // '/guide/layout/modifying-and-extending-layouts',
            // '/guide/layout/core-layouts',
            // '/guide/layout/content-renderer',
            // '/guide/layout/page-layout-examples',
          ]
        },
        {
          title: 'Forms',
          collapsable: false,
          children: [
            '/guide/forms/input-group'
            // '/guide/forms/checkbox',
            // '/guide/forms/radio',
            // '/guide/forms/switch',
            // '/guide/forms/vue-select',
            // '/guide/forms/flat-pickr',
            // '/guide/forms/form-wizard',
          ]
        },
        {
          title: 'Custom Components',
          collapsable: false,
          children: [
            '/guide/custom-components/card-actions'
            // '/guide/custom-components/card-code',
            // '/guide/custom-components/collapse'
          ]
        }
      ]
    }
  },
  plugins: [
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
