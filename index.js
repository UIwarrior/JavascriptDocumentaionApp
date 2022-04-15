import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/src/App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './client/src/redux/store/configureStore';
import './index.css'; // Import your root CSS file

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
