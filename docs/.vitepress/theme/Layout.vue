<template>
    <h1>Custom Layout!</h1>
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
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const {Layout} = DefaultTheme

</script>

<style scoped>

</style>
