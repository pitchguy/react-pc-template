import { topNavSight } from './constant';
import { browserHistory } from 'react-router';
import { message } from 'antd';
import http from '../../utils/http'
import apiUrl from '../../constants/apis';

export const setShopId = (params) => async (dispatch, getState) => {
    try{
        await dispatch({
            type: topNavSight.SET_SHOP_ID,
            payload: params
        })
    } catch (error) {
      console.log('error: ', error)
    }
}

export const getShopId = (params) => async (dispatch, getState) => {
    try {
        let response = await http.get(apiUrl.getShopId, params);
        const {data,mes,success} = response;

        if(success){
          await dispatch({
            type: topNavSight.GET_ALL_SHOP_ID,
            payload: data
          })
        }else{
            message.error(mes);
        }
    } catch (error) {
        console.log('error: ', error)
    }
  }