import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleTable from './SimpleTable';
import Selection_and_sorting from './Selection_and_sorting';
import * as serviceWorker from './serviceWorker';
import {povider,Provider} from "react-redux";
import store from "./store";
import TablePart from './TablePart';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Selection_and_sorting />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
