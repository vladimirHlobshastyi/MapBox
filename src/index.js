import * as React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AlertProvider from './providers/AlertProvider.tsx';
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AlertProvider>
      <Home />
    </AlertProvider>
  </React.StrictMode>
);

reportWebVitals();
