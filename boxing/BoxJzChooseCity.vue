<template>
    <div>
        用于包装的组件
        <nfButton>1</nfButton>
        <jz-choose-city />
<!--        <JzMsgList  :list-data="[{-->
<!--            title:'1',-->
<!--avatar:'1',-->
<!--time:'1',-->
<!--message:'1',-->
<!--        }]"  />-->
<!--        <JzNotification :data="brr" />-->
<!--        <jz-table :table-config="tableConfig" :list-data="listData" />-->
<!--        <JzUploadImage v-model="imgs" />-->
        <jz-form v-model="form" :form-config="formConfig" />
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import { type IForm} from "jz-ep-ui/dist/components";
// import { FormType } from "jz-ep-ui/dist/components";
import {FormType} from "jz-ep-ui/dist/jz-ui.es.js";

console.log(FormType.Input);
let form = reactive({
    Name:"",
    Age: 0,
})

let formConfig = <IForm<{Name: string,Age: number}>>{
    NativeProps:{},
    FormItemConfig: {
        labelWidth: "200px"
    },
    formItems: [
        {
            type: 1,
            NativeProps:{
                prop:"Name",
                label: "名称"
            },
            SubComponentNativeProps:{
            }
        },
    ]
}
let imgs = []
let brr = [
    {
        title: "通知",
        content: [
            {
                title: "消息1",
                avatar: "头像1",
                time: "2022年6月4日 20点19分",
                message: "消息",
            },
            {
                title: "消息1",
                avatar: "头像1",
                time: "2022年6月4日 20点19分",
                message: "消息",
            },
            {
                title: "消息1",
                avatar: "头像1",
                time: "2022年6月4日 20点19分",
                message: "消息",
            },
            {
                title: "消息1",
                avatar: "头像1",
                time: "2022年6月4日 20点19分",
                message: "消息",
            },
            {
                title: "消息1",
                avatar: "头像1",
                time: "2022年6月4日 20点19分",
                message: "消息",
            },
            {
                title: "消息1",
                avatar: "头像1",
                time: "2022年6月4日 20点19分",
                message: "消息",
            },
            {
                title: "消息1",
                avatar: "头像1",
                time: "2022年6月4日 20点19分",
                message: "消息",
            }
        ]
    },
    {
        title: "代办",
        content: [
            {
                title: "消息2",
                time: "2022年6月4日 20点19分",
                message: "消息",
                tag: "执行中",
            },
            {
                title: "消息1",
                time: "2022年6月4日 20点19分",
                message: "消息",
                tag: "失败",
                tagType: "danger"
            },
            {
                title: "消息1",
                time: "2022年6月4日 20点19分",
                message: "消息",
                tag: "成功",
                tagType: "success"
            }
        ]
    }
]
let listData = [
    {
        Type:"1",
        Name:"1",
    }
]
let tableConfig = {
    title: '用户列表',
    NativeProp:           {},
    ItemSharedProperties: {
        align:               "center",
        showOverflowTooltip: true,
    },
    TableColumns:         [
        {
            NativeProps: {
                prop:     "Type",
                label:    "商品类型",
                minWidth: "140",
            }
        },
        {
            NativeProps: {
                prop:     "Name",
                label:    "商品名称",
                minWidth: "100"
            }
        },
    ],
    showIndexColumn: true,
}
</script>

<style scoped>

</style>
