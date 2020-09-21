import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import registerServiceWorker from './registerServiceWorker';
import reducer from "../src/store/reducer";
import {Provider} from "react-redux";

const reduxStore= createStore(reducer);
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
