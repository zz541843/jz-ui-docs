export default {
    title: 'VitePress',
    description: 'Just playing around.',

    themeConfig:{
        siteTitle: 'My Custom Title',
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Configs', link: '/configs/' },
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
                    text: "组件",
                    items: [
                        {text: "JzCityChoose",link: '/guide/JzCityChoose'},
                        {text: "b",link: '/guide/b'},
                    ]
                }
            ]
        }
    }
}
