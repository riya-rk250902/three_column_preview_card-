import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

React.render(<counter/>,document.getElementById("root"));

//promises
// successful or unsuccessful 


