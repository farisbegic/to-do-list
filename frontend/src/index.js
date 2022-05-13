import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './app/store'
import {Provider} from 'react-redux'
import ToDo from "./components/ToDo/ToDo";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ToDo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
