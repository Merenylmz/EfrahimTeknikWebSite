import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import { reducers } from './redux/configureStore';
import thunk from "redux-thunk";
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
