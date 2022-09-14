import React, { createContext, useState, useEffect } from 'react';
import useInterval from '../hooks/useInterval';
import { fetchAlerts } from '../api/requests';
import { Alert } from "../commonTypes/alert";
import {AlertProviderContextTypes, AlertProviderPropTypes} from "./AlertProvider.types";


export const EventsContext = createContext({} as AlertProviderContextTypes);


const AlertProvider = ({ children }: AlertProviderPropTypes) => {
  const [timerValue, srtTimerValue] = useState<number>(10);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [lastUpdate, setLastUpdate] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const getAlertRegions = async () => {
    try {
      if (errorMessage) {
        setErrorMessage('');
      }

      setIsLoading(true);

      const data = await fetchAlerts();

      if (data?.states) {
        setAlerts(data?.states);
        setLastUpdate(data?.last_update);
      }

      setIsLoading(false);

    } catch (err) { if (err instanceof Error) {
   
      setErrorMessage(err.message);
      setIsLoading(false);
    } else {
      console.log('Unexpected error', err);
    }

    }
  };

  useEffect(() => {

    if (!alerts?.length && !isLoading) {
      getAlertRegions();
    }
  }, [alerts, isLoading]);

  useInterval(() => {

    if (timerValue > 1) {
      srtTimerValue(old => old - 1);
    } else {
      getAlertRegions();
      srtTimerValue(10);
    }

  }, timerValue >= 1);

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
