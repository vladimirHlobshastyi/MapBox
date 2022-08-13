import React from 'react';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AlertProvider from './providers/AlertProvider.tsx';
import Home from './pages/Home/Home';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import registerServiceWorker from 'react-service-worker';

Sentry.init({
  dsn:
    'https://e6eae306749841d6a876eabb04f947b1@o1356833.ingest.sentry.io/6642623',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AlertProvider>
      <Sentry.ErrorBoundary fallback={<ErrorComponent typeError={'ывавы'} />}>
        <Home />
      </Sentry.ErrorBoundary>
    </AlertProvider>
  </React.StrictMode>
);

reportWebVitals();

registerServiceWorker.register();
