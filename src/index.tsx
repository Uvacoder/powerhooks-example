import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import {UseDomRectExample} from "./components/UseDomRectExample";
//import {UseWindowInnerSizeExample} from "./components/UseWindowInnerSizeExample";
//import {UseNamedStateExample} from "./components/UseNamedStateExample";
import {BadExample} from "./components/UseCallbackFactoryExample/BadExample";
import {GoodExample} from "./components/UseCallbackFactoryExample/GoodExample";
//import {UseClickExample} from "./components/UseClickExample";

ReactDOM.render(
  <React.StrictMode>





  <div>
    <h1>useCallbackFactory</h1>


   <BadExample />
   <GoodExample />
  </div>










  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
