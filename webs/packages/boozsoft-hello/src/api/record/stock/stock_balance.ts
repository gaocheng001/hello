// @ts-ignore
import { defRouteApi } from '/@/utils/boozsoft/datasource/datasourceUtil';


export const stockBalanceEdit = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/stockBalanceEdit',timeout: 100000000000,
    method: 'POST',params
  };
});
export const stockBalanceSave = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/stockBalanceSave',timeout: 100000000000,
    method: 'POST',params
  };
});
export const getStockBalanceMaxIineId = defRouteApi(async () => {
  return {
    url: '/stock_balance/getStockBalanceMaxIineId',timeout: 100000000000,
    method: 'GET',
  };
});
export const getStockBalanceColumns = defRouteApi(async (iyear) => {
  return {
    url: '/stock_balance/getStockBalanceColumns?iyear='+iyear,timeout: 100000000000,
    method: 'POST',
  };
});
export const findAllStockBalance = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/findAllStockBalance',timeout: 100000000000,
    method: 'POST',params
  };
});
export const auditStockBalance = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/auditStockBalance',timeout: 100000000000,
    method: 'POST',params
  };
});
export const delStockBalance = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/delStockBalance',timeout: 100000000000,
    method: 'POST',params
  };
});
export const importStockBalanceDuli = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/importStockBalanceDuli',timeout: 100000000000,
    method: 'POST',params
  };
});
export const importStockBalanceJiBie = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/importStockBalanceJiBie',timeout: 100000000000,
    method: 'POST',params
  };
});




/************************************* 库存期初余额【插入现存量表】 *******************************************/
export const updateStockCurrentRevision = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/updateStockCurrentRevision',timeout: 100000000000,
    method: 'POST',params
  };
});
export const auditStockBalanceFindByLock = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/auditStockBalanceFindByLock',timeout: 100000000000,
    method: 'POST',params
  };
});
export const auditStockBalanceToStockCurrentstock_Increase = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/auditStockBalanceToStockCurrentstock_Increase',timeout: 100000000000,
    method: 'POST',params
  };
});
export const auditStockBalanceToStockCurrentstock_Decre = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/auditStockBalanceToStockCurrentstock_Decre',timeout: 100000000000,
    method: 'POST',params
  };
});
export const auditStockBalanceToStockCurrentstock_Count = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/auditStockBalanceToStockCurrentstock_Count',timeout: 100000000000,
    method: 'POST',params
  };
});
export const findByStockWarehousingsCount = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/findByStockWarehousingsCount',timeout: 100000000000,
    method: 'POST',params
  };
});

/************************************* END *******************************************/

/************************************* 任务 *******************************************/
export const getByStockBalanceTask = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/getByStockBalanceTask',params,timeout: 100000000000,
    method: 'POST',
  };
});
export const stockBalanceTaskSave = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/stockBalanceTaskSave',timeout: 100000000000,
    method: 'POST',params
  };
});
export const stockBalanceTaskEditNewTime = defRouteApi(async (id) => {
  return {
    url: '/stock_balance/stockBalanceTaskEditNewTime?id='+id,timeout: 100000000000,
    method: 'POST',
  };
});
export const stockBalanceTaskDelByUserName = defRouteApi(async (params) => {
  return {
    url: '/stock_balance/stockBalanceTaskDelByUserName',timeout: 100000000000,
    method: 'POST',params
  };
});
/************************************* END *******************************************/
