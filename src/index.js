import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// renamed BrowserRouter to HashRouter for GitHub Pages deployment
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, 
  document.getElementById('root'));
  