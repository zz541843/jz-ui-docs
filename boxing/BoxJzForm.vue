<template>
    <div>
        <JzForm
            v-model="formData"
            @change="formChange"
            :form-config="formConfig"
        >
            <!--<template #Name>-->
            <!--    name下面-->
            <!--</template>-->
            <template v-slot:line1>
                <el-divider>商品所属范围及商品分类</el-divider>
            </template>
            <template #CategoryUuidBottom>
                没有想要的分类？前往添加分类
            </template>
            <template v-slot:line2>
                <el-divider>设置兑换点、店铺与库存量</el-divider>
            </template>
            <template v-slot:line3>
                <el-divider>商品信息</el-divider>
            </template>
            <template #table1>
                <div >
                    <JzTable
                        :list-data="tableD"
                        :table-config="contentTableConfig"

                        ref="tableTef"
                    >
                        <template #Num="{row}">
                            <el-input-number
                                v-model="row.Num"
                                :min="0"
                                size="small"
                                style="width: 80%;"
                            />
                        </template>
                    </JzTable>
                    <el-button size="small" @click="console.log(tableTef.getData())">获取表格数据</el-button>
                </div>

            </template>
        </JzForm>
    </div>
</template>

<script setup lang="ts">
import {ref,computed,reactive} from 'vue'
import  {type ITable,type IForm,FormType} from "jz-ep-ui";

let formData = ref({
    Type: 1,
    Photo: [] as string[]
} as ReqAddGoods);
interface ReqAddGoods {
    Uuid: string,
    Name: string,// 商品名称
    CategoryUuid: string,// 商品分类uuid
    StoreUuid: string,// 商户uuid
    CorpId: string,// 镇村uuid
    Price: number, // 价格
    Stock: number,// 库存
    DiscountedPrices: number,// 折扣价格
    BrieflyText: string,// 简述
    Remark: string,// 备注
    IsShelf: number,
    DetailText: string,  // 详情
    Type: number, // 类型 1:实体 2:虚拟
    Photo: string[], // 商品预览图
    // Locations: ResGetShopCartLocationListItem[],
}
let shitiShow = computed(() => {
    return formData.value.Type === 1;
});
let xuniShow = computed(() => {
    return formData.value.Type === 2;
});

function formChange(data: ReqAddGoods) {
    // 做处理
    formData.value = data;
    console.log(formData);
}

let categoryOptions = [
    {
        label:"1",
        value:"1",
    },
    {
        label:"2",
        value:"2",
    }
];


const formConfig  = reactive(<IForm<ReqAddGoods>>{
    NativeProps:    {
        rules: {
            Name: [{required: true, message: "Please input Activity name", trigger: "blur"},
                {min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur"}]
        }
    },
    FormItemConfig: {
        labelWidth: "200px"
    },
    formItems:      [
        {slotName: "line1", NativeProps: {prop: Symbol("__line1")}},
        {
            type:                    FormType.Select,
            NativeProps:             {
                prop:  "CorpId",
                label: "选择镇"
            },
            SubComponentNativeProps: {
                options: [{label: "镇本级", value: "xxxx-CorpId"}]
            }
        },
        {
            type:                    FormType.Select,
            SubComponentNativeProps: {
                options: categoryOptions
            },
            NativeProps:             {
                label: "商品类型",
                prop:  "CategoryUuid"
            }
        },
        {
            type:                    FormType.Radio,
            SubComponentNativeProps: {
                radios: {
                    data:         [{
                        label: 1,
                        text:  "实体"

                    }, {
                        label: 2,
                        text:  "虚拟"
                    }],
                    SharedConfig: {
                        border: true
                    }
                }
            },
            NativeProps:             {
                label: "商品类型",
                prop:  "Type"
            }
        },
        {slotName: "line2", NativeProps: {prop: Symbol("__line2")}},
        {
            slotName:             "table1",
            slotViewInElFormItem: true,
            NativeProps:          {prop: Symbol("__duihuandian"), label: "设置兑换点与库存"},
            isHidden:             xuniShow
        },
        {
            type:                    FormType.Select,
            NativeProps:             {
                prop:  "StoreUuid",
                label: "所属商户"
            },
            SubComponentNativeProps: {
                options:  categoryOptions,
            },
            isHidden:             xuniShow
        },
        {
            NativeProps:             {
                prop:  "Locations",
                label: "设置适用店铺"
            },
            type:                    FormType.Checkbox,
            SubComponentNativeProps: {
                checkboxes: {
                    data: [{label: "1", text: "店铺1"}, {label: "2", text: "店铺2"}]
                }
            },
            isHidden:                shitiShow
        },
        {
            type: FormType.Input,
            NativeProps:{
                prop:"Stock",
                label: "商品总库存"
            },
            SubComponentNativeProps:{
            }
        },
        {slotName: "line3", NativeProps: {prop: Symbol("__line3")}},
        {
            type:                    FormType.Input,
            SubComponentNativeProps: {
                placeholder: "请输入商品名称"
            },
            NativeProps:             {
                label: "商品名称",
                prop:  "Name"
            }
        },
        {
            type:                    FormType.Input,
            SubComponentNativeProps: {
                placeholder: "请输入商品简述"
            },
            NativeProps:             {
                label: "商品简述",
                prop:  "BrieflyText"
            },
        },
        {
            type:                    FormType.Input,
            SubComponentNativeProps: {
                placeholder: "请输入所需积分"
            },
            NativeProps:             {
                label: "所需积分",
                prop:  "Price"
            },
        },
        {
            type:                    FormType.Input,
            SubComponentNativeProps: {
                placeholder: "请输入优惠价积分-实体显示"
            },
            NativeProps:             {
                label: "优惠价积分",
                prop:  "DiscountedPrices"
            },
        },
        {
            type:                    FormType.Input,
            SubComponentNativeProps: {
                placeholder: "请输入备注-虚拟显示"
            },
            NativeProps:             {
                label: "备注",
                prop:  "Remark"
            },
        },
        {
            type: FormType.ImageUpload,
            NativeProps:             {
                label: "商品预览图",
                prop:  "Photo"
            },
        },
        {
            type: FormType.RichText,
            NativeProps:             {
                label: "商品详情",
                prop:  "DetailText"
            },
        }
    ]
} );
let tableD = ref([
    {
        Name: "1",
        Num:  0
    }
])

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
                // minWidth: "70",
                width:               "120",
                // showOverflowTooltip: true
            }
        },
        {
            slotName:    "Num",
            NativeProps: {
                prop:  "Num",
                label: "库存数量",
                width: "140"
                // minWidth: "170"
            }
        }
    ]
}as ITable<{ Name: string, Num: number }>);




</script>

<style scoped>

</style>
