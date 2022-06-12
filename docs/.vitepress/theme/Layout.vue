<template>
    <div>
        <!--<Content />-->
        <Layout>
            <template #aside-outline-before>
                My custom sidebar top content
            </template>
            <template #aside-bottom>
                aside-bottom
            </template>
            <!--<template #aside-outline-after>-->
            <!--    aside-outline-after-->
            <!--</template>-->
            <!--<template #aside-ads-before>-->
            <!--    aside-ads-before-->
            <!--</template>-->
            <!--<template #aside-ads-after>-->
            <!--    aside-ads-after-->
            <!--</template>-->
        </Layout>
    </div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const {Layout} = DefaultTheme

</script>

<style scoped lang="scss">
:deep(table){
    margin: 0 !important;
    /*tr,
    th,
    td{
        border: unset !important;
    }*/
}
</style>
