import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './assets/fonts/subset-Rubik-Regular.woff2';
import './assets/fonts/subset-Rubik-Regular.woff';
import './assets/fonts/subset-Rubik-Bold.woff2';
import './assets/fonts/subset-Rubik-Regular.woff2';
import './assets/fonts/subset-Rubik-Regular.woff2';
import './assets/fonts/subset-Rubik-Regular.woff2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/workbook">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
