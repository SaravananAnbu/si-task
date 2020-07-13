
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Root from "./Containers//routes";
import configureStore from './store';
import history from './history';
import { setCurrentUser } from './Actions/Login';
import jwtDecode from 'jwt-decode';

export const store = configureStore();

if (localStorage.jwtToken) {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
         <Root history={history} />
    </Provider>
, document.getElementById("app"));