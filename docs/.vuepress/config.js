module.exports = {
  base: '/cep/',
  dest: './dist',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'vue-cli-plugin-cep',
      description: '基于vue-cli3.x的开发cep插件'
    },
    '/en/': {
      lang: 'en-US',
      title: 'cep | www.kuaizi.ai',
      description: 'Create cep plugin base on vue-cli 3.x'
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
  ],
  themeConfig: {
    repo: 'kuaizi-co/cep',
    locales: {

      '/': {
        label: '简体中文',
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '配置', link: '/config/' },
          { text: 'ChangeLog', link: '//kuaizi-co.github.io/cep/changelog/' }
        ],
        sidebar:  [
          ['/guide/', '指南'],
          ['/guide/webpack-plugin-cep-link', 'webpack 插件']
        ]
      },

      '/en': {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Config', link: '/config/' },
          { text: 'ChangeLog', link: '//kuaizi-co.github.io/cep/changelog/' }
        ],
        sidebar: {
          '/guide/': [
            ['/guide/', '指南'],
            ['/guide/webpack-plugin-cep-link', 'webpack 插件']
          ]
        }
      }
    }
  }
}
