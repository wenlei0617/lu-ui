module.exports = {
  title: 'LU-UI组件库',
  description: 'LU-UI组件库',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['/', '补丁记录']
        ],
      },
      {
        title: '消息提示组件',
        collapsable: false,
        children: [
          ['/message-box', '消息框(MessageBox)']
        ],
      },
    ]
  },
}