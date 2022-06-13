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
                        {text: "JzChooseCity",link: '/guide/JzChooseCity'},
                        {text: "JzForm",link: '/guide/JzForm'},
                        {text: "JzMsgList",link: '/guide/JzMsgList'},
                        {text: "JzNavMenu",link: '/guide/JzNavMenu'},
                        {text: "JzNotification",link: '/guide/JzNotification'},
                        {text: "JzPCASelect",link: '/guide/JzPCASelect'},
                        {text: "JzTable",link: '/guide/JzTable'},
                        {text: "JzTopSearch",link: '/guide/JzTopSearch'},
                        {text: "JzUploadImage",link: '/guide/JzUploadImage'},
                    ]
                }
            ]
        }
    }
}
