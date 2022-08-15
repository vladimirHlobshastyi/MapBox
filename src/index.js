import * as React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AlertProvider from './providers/AlertProvider.tsx';
import AlarmsMap from './pages/AlarmsMap';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AlertProvider>
      <AlarmsMap />
    </AlertProvider>
  </React.StrictMode>
);

reportWebVitals();
