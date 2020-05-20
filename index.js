import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './client/src/App';
import { Provider } from 'react-redux';
import configureStore from './client/src/redux/store/configureStore';
//const store = configureStore();
import reducer from './client/src/redux/reducers/index';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
    )


ReactDOM.render(
    <Provider store ={store}>
        <App/>
    </Provider>,  
    document.getElementById("root")
);