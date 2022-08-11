import * as React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AlertProvider from './providers/AlertProvider.tsx';
import Home from './pages/Home/Home';
import ErrorBoundary from './utils/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AlertProvider>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </AlertProvider>
  </React.StrictMode>
);

reportWebVitals();
