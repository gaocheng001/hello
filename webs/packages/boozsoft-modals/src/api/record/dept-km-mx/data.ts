import { defRouteApi } from '/@/utils/boozsoft/datasource/datasourceUtil';


//部门明细列表
export const findAll = defRouteApi(async (params) => {
  return {
    url: '/DeptKeMuMingXi/findAll',
    method: 'POST',
    params,timeout: 100000000000,
  };
});
export const exportAll = defRouteApi(async (params) => {
  return {
    url: '/DeptKeMuMingXi/exportAll',
    method: 'POST',
    params,timeout: 100000000000,
  };
});
export const exportAll2 = defRouteApi(async (params) => {
  return {
    url: '/DeptKeMuMingXi/exportAll2',
    method: 'POST',
    params,timeout: 100000000000,
  };
});
