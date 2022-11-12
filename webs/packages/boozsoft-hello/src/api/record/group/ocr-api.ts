import { defHttp } from '/@/utils/http/axios'
import {defRouteApi} from "/@/utils/boozsoft/datasource/datasourceUtil";

/**
 * @description: Get Emp based on id
 */

export const findSettModesAll = defRouteApi((params)=> {
  return {
    url: '/ocr/findAll',
    method: 'GET',
  }
})


export const saveSettModes = defRouteApi((params)=> {
  return {
    url: '/ocr',
    method: 'POST',
    params
  }
})


