import App from './App'
import 'babel-polyfill';
import React from 'react';
import ReactDom, { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
);
