import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import Header from './Header';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);
