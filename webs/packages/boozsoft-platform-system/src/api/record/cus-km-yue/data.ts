import { defRouteApi } from '/@/utils/boozsoft/datasource/datasourceUtil';

enum Api {
  findAll = '/CusKeMuYue/findAll',
  exportAll = '/CusKeMuYue/exportAll',
  exportAll2 = '/CusKeMuYue/exportAll2',
}

export const findAll = defRouteApi(async (params) => {
  return {
    url: '/CusKeMuYue/findAll',
    method: 'POST',
    params,timeout: 100000000000,
  };
});
export const exportAll = defRouteApi(async (params) => {
  return {
    url: Api.exportAll,
    method: 'POST',
    params,timeout: 100000000000,
  };
});
export const exportAll2 = defRouteApi(async (params) => {
  return {
    url: Api.exportAll2,
    method: 'POST',
    params,timeout: 100000000000,
  };
});
