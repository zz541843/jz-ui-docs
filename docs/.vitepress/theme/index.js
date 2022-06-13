import MyLayout from './Layout.vue'
// import DefaultTheme from 'vitepress/theme'
// import JzUI from '../../../dist123/jz-ui.es'
import '../../../dist123/style.css'
import BoxJzChooseCity from "../../../boxing/BoxJzChooseCity.vue"
import {default as JzUI} from "jz-ep-ui"

// 二次封装
import { nfElementPlus,b } from '@naturefw/ui-elp'

export default {
    enhanceApp({ app, router, siteData }) {
        app.component("BoxJzChooseCity",BoxJzChooseCity)
        app.use(JzUI)
        app.use(nfElementPlus)
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
    },
    Layout:MyLayout,
}
