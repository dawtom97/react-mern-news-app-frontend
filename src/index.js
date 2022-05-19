import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'
import App from './App';
import { Provider } from 'react-redux';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>,
 document.getElementById('root'));