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
  DATA: [
    {
      key: '0',
      name: '状态',
      nameNew: '状态',
      check: true,
      width: 100,
      max: 80,
      min: 120,
      align: 'left'
    },
    {
      key: '1',
      name: '单据日期',
      nameNew: '单据日期',
      check: true,
      width: 100,
      max: 200,
      min: 80,
      align: 'left'
    },
    {
      key: '2',
      name: '单据编码',
      nameNew: '单据编码',
      check: true,
      width: 120,
      max: 200,
      min: 80,
      align: 'left'
    },
    {
      key: '3',
      name: '单据类型',
      nameNew: '单据类型',
      check: true,
      width: 100,
      max: 200,
      min: 80,
      align: 'left'
    },
    {
      key: '4',
      name: '往来单位',
      nameNew: '往来单位',
      check: true,
      width: 200,
      max: 300,
      min: 100,
      align: 'left'
    },
    {
      key: '5',
      name: '业务部门',
      nameNew: '业务部门',
      check: true,
      width: 150,
      max: 300,
      min: 100,
      align: 'left'
    },
    {
      key: '6',
      name: '业务员',
      nameNew: '业务员',
      check: true,
      width: 100,
      max: 200,
      min: 100,
      align: 'left'
    },
    {
      key: '7',
      name: '无税金额',
      nameNew: '无税金额',
      check: true,
      width: 150,
      max: 200,
      min: 100,
      align: 'right'
    },
    {
      key: '8',
      name: '税额',
      nameNew: '税额',
      check: true,
      width: 150,
      max: 200,
      min: 100,
      align: 'right'
    },
    {
      key: '9',
      name: '凭证摘要',
      nameNew: '凭证摘要',
      check: true,
      width: 150,
      max: 300,
      min: 100,
      align: 'left'
    },
    {
      key: '10',
      name: '凭证日期',
      nameNew: '凭证日期',
      check: true,
      width: 100,
      max: 200,
      min: 80,
      align: 'left'
    },
    {
      key: '11',
      name: '凭证编号',
      nameNew: '凭证编号',
      check: true,
      width: 100,
      max: 120,
      min: 80,
      align: 'left'
    },
    {
      key: '10',
      name: '辅助核算项',
      nameNew: '辅助核算项',
      check: true,
      width: 150,
      max: 300,
      min: 100,
      align: 'left'
    },
  ]
})

export function changeDefaultDynamics(list) {
  // 改变默认数据
  dynamicColumnAndDataModel['DATA'] = list
}

export function initDynamics() {
  return dynamicColumnAndDataModel
}

export function assemblyDynamicColumn(lanmuList:any,columnList:any){
  columnList.forEach(cObj=>{
    lanmuList.forEach((lObj,index)=>{
      if (cObj.title === lObj.name){
        cObj.title = thisName(index+'',lanmuList)
        cObj.width = thisWidth(index+'',lanmuList)
        cObj.align = thisAlign(index+'',lanmuList)
        cObj.ifShow = thisIsShow(index+'',lanmuList)
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
