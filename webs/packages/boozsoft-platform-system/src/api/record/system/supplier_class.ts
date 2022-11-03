import { defRouteApi } from '/@/utils/boozsoft/datasource/datasourceUtil';
import {defHttp} from "/@/utils/http/axios";

enum Api {
  findAllCustomerClass = '/sys/supplierclass/findAllCustomerClass',
  treeCustomerClass = '/sys/supplierclass/treeCustomerClass',
  customerSaveApi = '/sys/supplierclass/save',
  delCustomerClass = '/sys/supplierclass/del',
  verifyCusClass = '/sys/supplierclass/verifyCusClass',
  verifyCusClassName = '/sys/supplierclass/verifyCusClassName',
  findAllByCusBendEq1 = '/sys/supplierclass/findAllByCusBendEq1',
  importCusClass = '/sys/supplierclass/importCusClass',
}

export const customerSaveCusClass = defRouteApi(async (params) => {
  return {
    url: '/sys/supplierclass/saveCusClass',
    timeout: 100000000000,
    method: 'POST',
    headers: {
      ignoreCancelToken: true,
    },
    params,
  };
});
export const customerSaveApi = defRouteApi(async (params) => {
  return {
    url: Api.customerSaveApi ,
    timeout: 100000000000,
    method: 'POST',
    headers: {
      ignoreCancelToken: true,
    },
    params,
  };
});

export const GetCustomerClassTree = defRouteApi(async () => {
  return {
    url: Api.treeCustomerClass,timeout: 100000000000,
    method: 'GET',
  };
});
export const findAllCustomerClass = defRouteApi(async (params) => {
  return {
    url: Api.findAllCustomerClass,timeout: 100000000000,
    method: 'POST',
    params
  };
});

export const delCustomerClass = defRouteApi(async (params) => {
  return {
    url: Api.delCustomerClass,timeout: 100000000000,
    method: 'POST',params
  };
});

export const verifyCusClass = defRouteApi(async (cusClass) => {
  return {
    url: Api.verifyCusClass + '?cusClass=' + cusClass,timeout: 100000000000,
    method: 'POST',
    headers: {
      ignoreCancelToken: true,
    },
  };
});

export const verifyCusClassName = defRouteApi(async ({ parentId, cusClassName }) => {
  return {
    url: Api.verifyCusClassName + '?parentId=' + parentId + '&cusClassName=' + cusClassName,timeout: 100000000000,
    method: 'POST',
  };
});

export const findAllByCusBendEq1 = defRouteApi(async () => {
  return {
    url: Api.findAllByCusBendEq1,timeout: 100000000000,
    method: 'GET',
  };
});
export const importCusClass = defRouteApi(async (params:any) => {
  return {
    url: Api.importCusClass,
    timeout: 100000000000,
    method: 'POST',
    params
  };
});
export const getCusTypeSeeSwitch = (async (params:any) => {
  return defHttp.request({
    url: '/sys/cusromerclass/getCusTypeSeeSwitch',
    timeout: 100000000000,
    method: 'POST',
    params
  });
});
export const getCusClassAuthorData = (async (params:any) => {
  return defHttp.request({
    url: '/sys/supplierclass/getCusClassAuthorData',
    timeout: 100000000000,
    method: 'POST',
    params
  });
});

export const findAllSupClass = defRouteApi(async () => {
  return {
    url: '/sys/supplierclass/findAllSupClass',timeout: 100000000000,
    method: 'GET',
  };
});
