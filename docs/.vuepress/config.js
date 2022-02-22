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
      { text: 'Demo', link: 'https://themeselection.com/' },
      { text: 'Purchase', link: 'https://themeselection.com/' }
    ],
    sidebar: {
      '/guide/': [
        ['', 'Welcome'],
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '/guide/overview/getting-started',
            '/guide/overview/starter-kit-vs-full-package',
            '/guide/overview/dependencies',
            '/guide/overview/installation',
            '/guide/overview/support',
            '/guide/overview/github-access'
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
            '/guide/layout/navigation-menu-structure',
            {
              title: 'Navigation Menu',
              collapsable: true,
              children: ['/guide/layout/navigation-menu-static', '/guide/layout/navigation-menu-server-side']
            },
            '/guide/layout/layout-overrides',
            '/guide/layout/icons'
          ]
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            '/guide/development/folder-structure',
            '/guide/development/routing',
            '/guide/development/theming',
            '/guide/development/deployment',
            '/guide/development/redux',
            '/guide/development/fakedb',
            '/guide/development/authentication',
            '/guide/development/access-control',
            '/guide/development/internationalization',
            '/guide/development/rtl',
            '/guide/development/loaders',
            '/guide/development/demo-config',
            '/guide/development/environment-variables'
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            ['/guide/components/overview', 'Overview'],
            {
              title: 'MUI',
              collapsable: true,
              children: [
                '/guide/components/mui/avatar',
                '/guide/components/mui/badge',
                '/guide/components/mui/card',
                '/guide/components/mui/chip',
                '/guide/components/mui/timeline-dot'
              ]
            },
            {
              title: 'Custom',
              collapsable: true,
              children: [
                '/guide/components/custom/apexcharts',
                '/guide/components/custom/react-draft-wysiwyg',
                '/guide/components/custom/chat-log',
                '/guide/components/custom/page-header',
                '/guide/components/custom/react-datepicker',
                '/guide/components/custom/repeater',
                '/guide/components/custom/sidebar'
              ]
            },
            '/guide/components/override-components',
            '/guide/components/styled-components'
          ]
        },
        {
          title: 'Others',
          collapsable: false,
          children: ['/guide/others/credits']
        }
      ],
      '/faq/': [
        ['', 'FAQs'],
        {
          title: '',
          collapsable: false,
          children: [
            ['installation-errors', 'Installation errors'],
            ['installation-warnings', 'Installation warnings'],
            ['first-child-console-error', ':first-child console error'],
            ['cra-support', 'CRA Support'],
            ['how-to-change-branding', 'How to change Logo / Branding'],
            ['how-to-change-colors', 'How to change colors'],
            ['how-to-change-direction', 'How to change Direction'],
            ['how-to-change-fonts', 'How to change fonts'],
            ['how-to-change-mode', 'How to change Mode [Light / Dark]'],
            ['how-to-change-skin', 'How to change Skin'],
            [
              'how-to-configure-demo-config',
              'How to Configure local template to look like one of the 6 demo you see online'
            ],
            ['how-to-enable-disable-responsive-font', 'How to enable / disable responsive font'],
            ['how-to-hide-menu-custom-screen-size', 'How to change screen size to hide menu'],
            ['how-to-implement-server-side-menu', 'How to implement server side menu'],
            ['how-to-integrate-into-existing-project', 'How to integrate this template in to my existing project'],
            ['how-to-override-custom-components', "How to override custom components"],
            ['how-to-override-component-styling', "How to override component's styling"],
            ['how-to-update-navbar-footer', 'How to update navbar or footer'],
            ['how-to-override-remove-loader', 'How to override / remove loader'],
            ['how-to-update-this-template', 'How to update this template'],
            ['how-to-use-custom-icons', 'How to override menu icons and use custom icons in the template'],
            ['how-to-use-nextjs-image-component', 'How to use Nextjs Image Component without Height & Width'],
            ['why-images-are-missing-on-deployment', 'Why images are missing on deployment']
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
