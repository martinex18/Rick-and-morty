import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApiProvaider } from './apis/CharactersContext/ApiProvaider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvaider>
    <App />
  </ApiProvaider>
);
