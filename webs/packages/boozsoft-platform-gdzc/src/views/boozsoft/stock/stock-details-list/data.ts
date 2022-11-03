import {reactive} from "vue";

const dynamicColumnAndDataModel = reactive({
  DEFAULT: [
    {
      key: '0',
      title: '栏目名称',
      dataIndex: 'name',
      align: 'left',
      width: 150,
    },
    {
      key: '1',
      title: '显示',
      dataIndex: 'check',
      align: 'center',
      slots: { customRender: 'checkBox' },
    },
    {
      key: '3',
      title: '显示名称',
      dataIndex: 'nameNew',
      width: 150,
      align: 'center',
      slots: { customRender: 'nameInput', },
    },
    {
      key: '4',
      title: '宽度(范围)',
      dataIndex: 'width',
      align: 'center',
      width: 140,
      slots: { customRender: 'widthInput', },
    },
    {
      key: '5',
      title: '对齐方式',
      dataIndex: 'align',
      align: 'center',
      width: 140,
      slots: { customRender: 'alignRadio' },
    }
  ],
  '1': [
    {
      key: '0',
      name: '状态',
      nameNew: '状态',
      check: true,
      isFixed: true,
      width: 80,
      max: 100,
      min: 80,
      align: 'center'
    },
    {
      key: '1',
      name: '单据日期',
      nameNew: '单据日期',
      check: true,
      isFixed: true,
      width: 90,
      max: 120,
      min: 80,
      align: 'center'
    },
    {
      key: '2',
      name: '单据编码',
      nameNew: '单据编码',
      check: true,
      isFixed: true,
      width: 120,
      max: 200,
      min: 100,
      align: 'left'
    },{
      key: '3',
      name: '销售客户编码',
      nameNew: '销售客户编码',
      check: true,
      width: 120,
      max: 150,
      min: 100,
      align: 'left'
    }, {
      key: '4',
      name: '销售客户名称',
      nameNew: '销售客户名称',
      check: true,
      width: 200,
      max: 300,
      min: 150,
      align: 'left'
    },
    {
      key: '5',
      name: '结算客户编码',
      nameNew: '结算客户编码',
      check: true,
      width: 120,
      max: 150,
      min: 100,
      align: 'left'
    },{
      key: '6',
      name: '结算客户名称',
      nameNew: '结算客户名称',
      check: true,
      width: 200,
      max: 300,
      min: 150,
      align: 'left'
    },
    {
      key: '7',
      name: '业务部门',
      nameNew: '业务部门',
      check: true,
      width: 120,
      max: 200,
      min: 100,
      align: 'left'
    },
    {
      key: '8',
      name: '业务员',
      nameNew: '业务员',
      check: true,
      width: 100,
      max: 150,
      min: 100,
      align: 'left'
    },{
      key: '9',
      name: "条形码",
      nameNew: "条形码",
      check: false,
      width: 150,
      max: 200,
      min: 80, align: 'left'
    },
    {
      key: '10',
      name: '存货编码',
      nameNew: '存货编码',
      check: true,
      isFixed: true,
      width: 100,
      max: 150,
      min: 100,
      align: 'left'
    }, {
      key: '11',
      name: '存货名称',
      nameNew: '存货名称',
      check: true,
      isFixed: true,
      width: 150,
      max: 250,
      min: 150,
      align: 'left'
    }, {
      key: '12',
      name: '规格型号',
      nameNew: '规格型号',
      check: true,
      width: 80,
      max: 150,
      min: 80,
      align: 'left'
    },{
      key: '13',
      name: '计量单位',
      nameNew: '计量单位',
      check: true,
      isFixed: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    }, {
      key: '14',
      name: '数量',
      nameNew: '数量',
      check: true,
      isFixed: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    }, {
      key: '15',
      name: '主计量',
      nameNew: '主计量',
      check: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    }, {
      key: '16',
      name: '主数量',
      nameNew: '主数量',
      check: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    },
    {
      key: '17',
      name: '计量一',
      nameNew: '计量1',
      check: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    },
    {
      key: '18',
      name: '数量一',
      nameNew: '数量1',
      check: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    },{
      key: '19',
      name: '计量二',
      nameNew: '计量2',
      check: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    } ,
    {
      key: '20',
      name: '数量二',
      nameNew: '数量2',
      check: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    },

    {
      key: '21',
      name: "批号",
      nameNew: "批号",
      check: true,
      width: 150,
      max: 200,
      min: 100, align: 'center'
    },{
      key: '22',
      name: "税率",
      nameNew: "税率",
      check: true,
      width: 100,
      max: 100,
      min: 80,
      align: 'center'
    }, {
      key: '23',
      name: "无税单价",
      nameNew: "无税单价",
      check: false,
      width: 150,
      max: 250,
      min: 100,
      align: 'right'
    }, {
      key: '24',
      name: "无税金额",
      nameNew: "无税金额",
      check: false,
      width: 150,
      max: 250,
      min: 100,
      align: 'right'
    },  {
      key: '25',
      name: "税额",
      nameNew: "税额",
      check: true,
      width: 150,
      max: 250,
      min: 100,
      align: 'right'
    },
    {
      key: '26',
      name: "含税单价",
      nameNew: "含税单价",
      isFixed: true,
      check: true,
      width: 150,
      max: 250,
      min: 100,
      align: 'right'
    },{
      key: '27',
      name: "价税合计",
      nameNew: "价税合计",
      isFixed: true,
      check: true,
      width: 150,
      max: 250,
      min: 100,
      align: 'right'
    },
    {
      key: '28',
      name: "赠品",
      nameNew: "赠品",
      check: true,
      width: 80,
      max: 120,
      min: 80,
      align: 'center'
    },
    {
      key: '29',
      name: "生效日期",
      nameNew: "生效日期",
      check: true,
      width: 120,
      max: 150,
      min: 100,      align: 'center'
    },
    {
      key: '30',
      name: "失效日期",
      nameNew: "失效日期",
      check: true,
      width: 150,
      max: 200,
      min: 100,      align: 'center'
    },
    {
      key: '31',
      name: "备注",
      nameNew: "备注",
      check: true,
      width: 150,
      max: 200,
      min: 10,      align: 'left'
    },{
      key: '32',
      name: "制单人",
      nameNew: "制单人",
      check: true,
      width: 100,
      max: 120,
      min: 80,      align: 'center'
    },{
      key: '33',
      name: "审核人",
      nameNew: "审核人",
      check: true,
      width: 100,
      max: 120,
      min: 80,      align: 'center'
    },{
      key: '34',
      name: "复核人",
      nameNew: "复核人",
      check: true,
      width: 100,
      max: 120,
      min: 80,      align: 'center'
    }
  ],
})
const columnPropertyModel = {
  '1': [
    {
      title: '状态',
      dataIndex: 'bcheck',
      ellipsis: true,
      slots: { customRender: 'bcheck' }
    },
    {
      title: '单据日期',
      dataIndex: 'ddate',
      ellipsis: true,
    },
    {
      title: '单据编码',
      dataIndex: 'ccode',
      ellipsis: true,
      slots: {customRender: 'ccode'}
    },{
      title: '销售客户编码',
      dataIndex: 'cvencodeCode',
      ellipsis: true,
      slots: {customRender: 'cvencodeCode'}
    }, {
      title: '销售客户名称',
      dataIndex: 'cvencode',
      ellipsis: true,
      slots: {customRender: 'cvencode'}
    },{
      title: '结算客户编码',
      dataIndex: 'cvencodeJsCode',
      ellipsis: true,
      slots: {customRender: 'cvencodeJsCode'}
    },
    {
      title: '结算客户名称',
      dataIndex: 'cvencodeJs',
      ellipsis: true,
      slots: {customRender: 'cvencodeJs'}
    },
    {
      title: '业务部门',
      dataIndex: 'cdepcode',
      ellipsis: true,
      slots: { customRender: 'cdepcode'}
    },
    {
      title: '业务员',
      dataIndex: 'cpersoncode',
      ellipsis: true,
      slots: { customRender: 'cpersoncode'}
    },
    {
      title: '条形码',
      dataIndex: 'cinvodeBarcode',
      ellipsis: true,
      slots: {customRender: 'cinvodeBarcode'},
    },
    {
      title: '存货编码',
      dataIndex: 'cinvode',
      ellipsis: true,
      slots: {customRender: 'cinvode'}
    },
    {
      title: '存货名称',
      dataIndex: 'cinvodeName',
      ellipsis: true,
      slots: {customRender: 'cinvodeName'}
    },
    {
      title: '规格型号',
      dataIndex: 'speciType',
      ellipsis: true,
      slots: {customRender: 'speciType'}
    },
    {
      title: '计量单位',
      dataIndex: 'xsUnitId',
      ellipsis: true,
      slots: {customRender: 'xsUnitId'}
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      ellipsis: true,
      slots: {customRender: 'quantity'}
    },
    {
      title: '主计量',
      dataIndex: 'cunitid',
      ellipsis: true,
      slots: {customRender: 'cunitid'}
    },
    {
      title: '主数量',
      dataIndex: 'baseQuantity',
      ellipsis: true,
      slots: {customRender: 'baseQuantity'}
    },
    {
      title: '计量一',
      dataIndex: 'cunitidF1',
      ellipsis: true,
      slots: {customRender: 'cunitidF1'},
    },{
      title: '数量一',
      dataIndex: 'subQuantity1',
      slots: {customRender: 'subQuantity1'},
    },
    {
      title: '计量二',
      dataIndex: 'cunitidF2',
      ellipsis: true,
      slots: {customRender: 'cunitidF2'},
    },
    {
      title: '数量二',
      dataIndex: 'subQuantity2',
      ellipsis: true,
      slots: {customRender: 'subQuantity2'},
    },
    {
      title: '批号',
      dataIndex: 'batchId',
      ellipsis: true,
      slots: {customRender: 'batchId'},
    },  {
      title: '税率',
      dataIndex: 'itaxrate',
      slots: {customRender: 'itaxrate'},
      ellipsis: true,
    },
    {
      title: '无税单价',
      dataIndex: 'price',
      ellipsis: true,
      slots: {customRender: 'price'},
    },
    {
      title: '无税金额',
      dataIndex: 'icost',
      slots: {customRender: 'icost'},
      ellipsis: true,
    },
    {
      title: '含税单价',
      dataIndex: 'taxprice',
      slots: {customRender: 'taxprice'},
      ellipsis: true,
    },
    {
      title: '税额',
      dataIndex: 'itaxprice',
      slots: {customRender: 'itaxprice'},
      ellipsis: true,
    },
    {
      title: '价税合计',
      dataIndex: 'isum',
      slots: {customRender: 'isum'},
      ellipsis: true,
    },
    {
      title: '赠品',
      dataIndex: 'isGive',
      ellipsis: true,
      slots: {customRender: 'isGive'},
    },
    {
      title: '生效日期',
      dataIndex: 'dpdate',
      ellipsis: true,
    },
    {
      title: '失效日期',
      dataIndex: 'dvdate',
      slots: {customRender: 'dvdate'},
      ellipsis: true,
    },
    {
      title: '备注',
      dataIndex: 'cmemo',
      ellipsis: true,
      slots: {customRender: 'cmemo'},
    },
    {
      title: '制单人',
      dataIndex: 'cmaker',
      ellipsis: true,
      slots: {customRender: 'cmaker'},
    },
    {
      title: '审核人',
      dataIndex: 'bcheckUser',
      ellipsis: true,
      slots: {customRender: 'bcheckUser'},
    },
    {
      title: '复核人',
      dataIndex: 'bworkableUser',
      ellipsis: true,
      slots: {customRender: 'bworkableUser'},
    }
  ]
}

export function changeDefaultDynamics(list) {
  // 改变默认数据
  dynamicColumnAndDataModel['DATA'] = list
}

export function initDynamics() {
  return dynamicColumnAndDataModel
}

export function getTablePropertys(key) {
  return columnPropertyModel[key] || columnPropertyModel['1']
}

export function assemblyDynamicColumn(lanmuList: any, columnList: any) {
  columnList.forEach(cObj => {
    lanmuList.forEach((lObj, index) => {
      if (cObj.title === lObj.name) {
        cObj.title = thisName(index + '', lanmuList)
        cObj.width = thisWidth(index + '', lanmuList)
        cObj.align = thisAlign(index + '', lanmuList)
        cObj.ifShow = thisIsShow(index + '', lanmuList)
      }
    })
  })
  return columnList;
}

/*********************** 静态方法 ***********************/
// 动态名称
const thisName = (index,thisData)=>{
  let value = ''
  if (index.toString().indexOf('-') != -1){
    let arr = index.split('-');
    if (arr.length == 2)  {
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].nameNew
      if ('' == value)value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].name
    }else{
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].children[parseInt(arr[2])-1].nameNew
      if ('' == value)value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].children[parseInt(arr[2])-1].name
    }
  }else{
    value = thisData[index].nameNew
    if ('' == value)value = thisData[index].name
  }
  return value
}
// 当前宽度
const thisWidth = (index,thisData)=>{
  let value:any = 0
  if (index.toString().indexOf('-') != -1){
    let arr = index.split('-');
    if (arr.length == 2)  {
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].width
    }else{
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].children[parseInt(arr[2])-1].width
    }
  }else{
    value = thisData[index].width
  }
  return parseInt(value)
}
// 是否显示
const thisIsShow = (index,thisData)=>{
  let value = false
  if (index.toString().indexOf('-') != -1){
    let arr = index.split('-');
    if (arr.length == 2)  {
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].check
    }else{
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].children[parseInt(arr[2])-1].check
    }
  }else{
    value = thisData[index].check
  }
  return  value
}
// 对齐方式
const thisAlign = (index,thisData)=>{
  let value = 'center';
  if (index.toString().indexOf('-') != -1){
    let arr = index.split('-');
    if (arr.length == 2)  {
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].align
    }else{
      value = thisData[parseInt(arr[0])].children[parseInt(arr[1])-1].children[parseInt(arr[2])-1].align
    }
  }else{
    value = thisData[index].align
  }
  return  value
}
