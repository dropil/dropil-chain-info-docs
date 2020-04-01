module.exports = {
  title: 'Dropil Chain Documentation',  
  base: '/info/',
  dest: '../Dropil Chain Docs/info',
  head: [
    ['meta', { property: 'og:title', content: 'Dropil Chain Documentation' }],
    ['meta', { property: 'og:description', content: 'Learn about Dropil Chain and how to utilize the Dropil Chain Daemon and Dropil Chain CLI.' }],
    ['meta', { property: 'og:image', content: 'https://dropil.com/wp-content/uploads/2020/04/dropil-docs-meta.jpg' }],
    ['meta', { property: 'og:url', content: 'https://docs.dropilchain.com' }],
    ['meta', { name: 'twitter:title', content: 'Dropil Chain Documentation' }],
    ['meta', { name: 'twitter:description', content: 'Learn about Dropil Chain and how to utilize the Dropil Chain Daemon and Dropil Chain CLI.' }],
    ['meta', { name: 'twitter:image', content: 'https://dropil.com/wp-content/uploads/2020/04/dropil-docs-meta.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-160632572-1'
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    logo: 'https://dropilchain.com/wp-content/uploads/2020/02/dropilchain.png',
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Resources',  
        ariaLabel: 'Resources Menu',
        items: [
          {
            text: 'Dropil Chain',
            items: [
              { text: 'Main Website', link: 'https://dropilchain.com' },
              { text: 'Public API Docs', link: 'https://docs.dropilchain.com/api/'},
              { text: 'Mainnet Explorer', link: 'https://explorer.dropilchain.com' },
              { text: 'Testnet Explorer', link: 'https://testnet-explorer.dropilchain.com' },
              { text: 'Zeli Wallet', link: 'https://zeli.dropilchain.com' },
              { text: 'Staking Calculator', link: 'https://calc.dropilchain.com' }
            ]
          },
          {
            text: 'Dropil',
            items: [
              { text: 'Main Website', link: 'https://dropil.com' },
              { text: 'Telegram', link: 'https://t.me/DropilCoin' }
            ]
          }
        ]
      }      
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          children: [
            '/introduction'
          ]
        },
        {
          title: 'Getting Started',
          children: [
            'getting-started/',
            'getting-started/create-wallet',
            'getting-started/send-transaction',
            'getting-started/delegate',
            'getting-started/full-node',
            'getting-started/validator'
          ]
        },
        {
          title: 'Information',
          children: [
            '/dropilchain-pos',
            '/validators',
            '/delegators',
            '/governance',
            '/other'
          ]
        }
      ]
    }
  }  
}