module.exports = {
  title: 'Dropil Chain Documentation',
  base: '/info/',
  dest: '../Dropil Chain Docs/info',
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
              { text: 'Staking Calculator', link: 'https://dropilchain.com/calc' }
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
            '/other'
          ]
        }
      ]
    }
  }  
}