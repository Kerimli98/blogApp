import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducers, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App  />
  </Provider>
);

