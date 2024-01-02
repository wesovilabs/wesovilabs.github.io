import 'font-awesome/css/font-awesome.min.css';
import "glightbox/dist/css/glightbox.css";


import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css';
import './index.css';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/js/bootstrap.bundle.min";
// import './styles/main.css';

import Home from './screen/Home';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
