import MyLayout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'
import JzUI from '../../../dist123/jz-ui.es'
import '../../../dist123/style.css'
import JzChooseCity from "../../../boxing/JzChooseCity.vue"
export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component("BoxJzChooseCity",JzChooseCity)
        app.use(JzUI)
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
    },
    Layout:MyLayout,
}
