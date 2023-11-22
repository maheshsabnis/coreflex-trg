import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import SimpleComponent from './components/simplecomponent';
import ExpensesComponent from './components/expensescomponent';
import reportWebVitals from './reportWebVitals';
/* The HTML Root Element on index.html that is used as a Mounting HOST for React Component */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Added a custom 'props' named 'message' to pass data to SimpleComponent */}
    {/* <SimpleComponent message = {'My Names is Bond'}/>
     */}
     <ExpensesComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
