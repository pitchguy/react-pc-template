import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import Routers from './router'
import appReducer from './pages/global';

import './assets/style/base.css' 

export const history = createHistory();
const middleware = routerMiddleware(history);
const middlewares = [thunk, middleware];
const store = createStore(
    combineReducers({ routing: routerReducer, ...appReducer }),
    __PRODUCTION ? applyMiddleware(...middlewares) : composeWithDevTools(applyMiddleware(...middlewares))
  )

import { Switch,HashRouter as Router,Route } from 'react-router-dom';

const render = Component =>
  ReactDOM.render(
    // <Provider store={store}>
    //   <LocaleProvider locale={zhCN}>
        <Component />,
    //   </LocaleProvider>
    // </Provider>,
    document.getElementById('root')
  )

render(Routers)
if (module.hot) {
  module.hot.accept();
}
const App = () =>
    (
        <Router>
            <Switch>
                {
                    routes.map(route => (
                        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                    ))
                }
            </Switch>
        </Router>
    );
    
if (module.hot) {
        module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById('root'));

