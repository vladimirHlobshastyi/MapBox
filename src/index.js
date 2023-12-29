import * as React from 'react';
import * as Sentry from '@sentry/react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserTracing } from '@sentry/tracing';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AlertProvider from './providers/AlertProvider.tsx';
import AlarmsMap from './pages/AlarmsMap';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import Statistic from './pages/Statistic/Statistic';
import StatisticProvider from './providers/StatisticProvider';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import IsIosProvider from './providers/IsIosProvaider';
import NotificationProvider from './providers/NotificationProvider';

Sentry.init({
  dsn: 'https://e6eae306749841d6a876eabb04f947b1@o1356833.ingest.sentry.io/6642623',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<ErrorComponent typeError={'technical'} />}>
      <IsIosProvider>
        <AlertProvider>
          <StatisticProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/map" element={<AlarmsMap />} />
                <Route path="statisctic" element={<Statistic />} />
                <Route path="*" element={<Navigate to="/map" replace />} />
              </Routes>
            </BrowserRouter>
          </StatisticProvider>
        </AlertProvider>
      </IsIosProvider>
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();

serviceWorkerRegistration.register();
