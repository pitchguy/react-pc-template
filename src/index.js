import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
import zhCN from "antd/es/locale/zh_CN";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import Routers from './router'
import appReducer from './pages/global';
import "./assets/styles/main.scss";

export const history = createHistory();
const middleware = routerMiddleware(history);
const middlewares = [thunk, middleware];
const store = createStore(
    combineReducers({ routing: routerReducer, ...appReducer }),
    __PRODUCTION ? applyMiddleware(...middlewares) : composeWithDevTools(applyMiddleware(...middlewares))
)

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Component />
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
  )

render(Routers)
if (module.hot) {
  module.hot.accept();
}

