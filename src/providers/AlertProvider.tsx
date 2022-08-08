import React, { createContext, useState, useEffect } from 'react';
import useInterval from '../hooks/useInterval';
import getAllRegions, { alertType, dataType } from '../api/getAllRegions';

export type contextTypes = {
  alerts: Array<alertType> | [],
  lastUpdate: string | undefined,
  isLoading: boolean,
  errorMessage: string,
  timerValue: number,
};
type childrenProps = {
  children?: JSX.Element | JSX.Element[],
};

export const EventsContext = createContext<contextTypes | null>(null);

// Minor: Split timer and fetching regions. Move timer to separate context/provider.

const AlertProvider = ({ children }: childrenProps) => {
  const [timerValue, srtTimerValue] = useState(10);
  const [alerts, setAlerts] = useState<[] | Array<alertType>>([]);
  const [lastUpdate, setLastUpdate] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getAlertRegions = async () => {
    try {
      if (errorMessage) {
        setErrorMessage('');
      }

      setIsLoading(true);
      const data: dataType = await getAllRegions();
      if (data?.states) {
        setAlerts(data?.states);
        setLastUpdate(data?.last_update);
      }

      setIsLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!alerts?.length && isLoading === false) {
      getAlertRegions();
    }
  }, [alerts, isLoading]);

  useInterval(() => {
    if (timerValue > 0) {
      srtTimerValue(old => old - 1);
    } else {
      getAlertRegions();
      srtTimerValue(10);
    }
  }, timerValue >= 0);

  return (
    <EventsContext.Provider
      value={{
        alerts,
        lastUpdate,
        isLoading,
        errorMessage,
        timerValue,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default AlertProvider;
