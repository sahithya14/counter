import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from "redux";
import registerServiceWorker from './registerServiceWorker';
import counterReducer from "../src/store/reducers/counterReducer";
import resultReducer from "../src/store/reducers/resultReducer";
import {Provider} from "react-redux";

const rootReducer = combineReducers({ctr:counterReducer,res:resultReducer})
const reduxStore = createStore(rootReducer);
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
