import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPanel';
import * as serviceWorker from './serviceWorker';
import FilterableProductTable , {PRODUCTS} from './filter1/filter1'
//<ControlPanel />
ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
