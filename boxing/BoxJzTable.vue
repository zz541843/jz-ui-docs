<template>
    <div>
        <JzTable
            :list-data="tableD"
            :table-config="contentTableConfig"

            ref="tableTef"
        >
            <template #Num="{row}">
                {{ row.Num }}
            </template>
        </JzTable>
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {ITable} from "jz-ep-ui";

let tableD = [{
    Num:  1,
    Name: "商品名称"
}];
const contentTableConfig = reactive({
    showSelectColumn:     true,
    NativeProp:           {},
    ItemSharedProperties: {
        align: "center"
        // showOverflowTooltip: true,
    },
    TableColumns:         [
        {
            NativeProps: {
                prop:  "Name",
                label: "地点名称",
                width: "120"
            }
        },
        {
            slotName:    "Num",
            NativeProps: {
                prop:  "Num",
                label: "库存数量",
                width: "140"
            }
        }
    ]
} as ITable<{ Name: string, Num: number }>);
</script>

<style scoped>

</style>
