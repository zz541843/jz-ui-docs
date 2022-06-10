export default {
    title: 'VitePress',
    description: 'Just playing around.',

    themeConfig:{
        siteTitle: 'My Custom Title',
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Configs', link: '/configs' },
            { text: 'Changelog', link: 'https://github.com/...' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
            { icon: 'discord', link: '...' }
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "导航",
                    items: [
                        {text: "首页",link: '/guide/'},
                        {text: "b",link: '/guide/b'},
                    ]
                }
            ]
        }
    }
}
