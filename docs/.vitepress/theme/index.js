import MyLayout from './Layout.vue'
// import DefaultTheme from 'vitepress/theme'
// import JzUI from '../../../dist123/jz-ui.es'
import BoxJzChooseCity from "../../../boxing/BoxJzChooseCity.vue"
import BoxJzCalendar from "../../../boxing/BoxJzCalendar.vue"
import BoxJzMsgList from "../../../boxing/BoxJzMsgList.vue"
import BoxJzForm from "../../../boxing/BoxJzForm.vue"
import BoxJzNotification from "../../../boxing/BoxJzNotification.vue"
import BoxJzPCASelect from "../../../boxing/BoxJzPCASelect.vue"
import BoxJzTable from "../../../boxing/BoxJzTable.vue"
import JzUI from "jz-ep-ui"
import "jz-ep-ui/dist/style.css"
import path from "path"

export default {
    enhanceApp({ app, router, siteData }) {
        // const files = import.meta.glob("../../../boxing/*.vue");
        //
        // const modules = {}
        // for (const key in files) {
        //     files[key]().then(res=>{
        //         console.log(key.replace(/(\.\.\/\.\.\/\.\.\/boxing\/|\.vue)/g, ''));
        //         modules[key.replace(/(\.\.\/\.\.\/\.\.\/boxing\/|\.vue)/g, '')] = res.default
        //     })
        // }

        app.component("BoxJzChooseCity",BoxJzChooseCity)
        app.component("BoxJzCalendar",BoxJzCalendar)
        app.component("BoxJzMsgList",BoxJzMsgList)
        app.component("BoxJzForm",BoxJzForm)
        app.component("BoxJzNotification",BoxJzNotification)
        app.component("BoxJzPCASelect",BoxJzPCASelect)
        app.component("BoxJzTable",BoxJzTable)
        app.use(JzUI)
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
    },
    Layout:MyLayout,
}
