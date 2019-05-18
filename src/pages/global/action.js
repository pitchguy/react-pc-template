import { globalType } from './constant';
import { message } from 'antd';
import http from '../../utils/http'
import apiUrl from '../../constants/apis';
import { browserHistory } from 'react-router';

const userData = (data) => ({
    type: globalType.GET_USER_DATA,
    payload: data
})
export const getUserData = (params) => async (dispatch, getState) => {
    try {
        let response = await http.get(apiUrl.getUserData, params);
        if (response.success) {
            await dispatch(userData(response.data));
        } else {
            //返回失败
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

const navData = (data) => ({
    type: globalType.GET_NAV_DATA,
    payload: data
})
export const getNavData = (params) => async (dispatch, getState) => {
    try {
        let response = await http.get(apiUrl.getNavData, params);
        if (response.success) {
            await dispatch(navData(response.data));
        } else {
            //返回失败
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

const socketData = (data) => ({
    type: globalType.SOCKET_CONNECT,
    payload: data
})
export const websocketConnect = () => (dispatch, getState) => {
    try {
        http.websocketConnect({}).then((stompClient) => {
            dispatch(socketData(stompClient))
        }).catch((error) => {
            console.log('error:', error)
        })
    } catch (error) {
        console.log('error: ', error)
    }
}

const messageData = (data) => ({
    type: globalType.SET_MESSAGE,
    payload: data
})
export const setMessage = (params) => (dispatch, getState) => {
    /* 不传则默认+1 */
    try {
        dispatch(messageData(params))
    } catch (error) {
        console.log('error: ', error)
    }
}

