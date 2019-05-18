import { combineReducers } from 'redux';
import assign from 'object-assign';
import { globalType } from './constant';
const initialState = {
	userData: { name: '' },
	navData: {
		topNav: [],
		sideNav: [],
	},
	messageCount: 0,
	socketData: undefined,
};
const globalReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case globalType.GET_USER_DATA:
			return Object.assign({}, state, {
				userData: payload,
			});
		case globalType.GET_NAV_DATA:
			return Object.assign({}, state, {
				navData: payload,
			});
		case globalType.SOCKET_CONNECT:
			return Object.assign({}, state, {
				socketData: payload
			})
		case globalType.SET_MESSAGE:
			return Object.assign({}, state, {
				messageCount:state.messageCount + (payload != undefined ? payload : 1)*1
			})
		default:
			return state;
	}
};
export default globalReducer;
