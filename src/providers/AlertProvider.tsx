import React, { createContext, useState, useEffect } from 'react';
import useInterval from '../hooks/useInterval';
import { fetchAlerts } from '../api/requests';
import { Alert } from "../commonTypes/alert";
import {AlertProviderContextTypes, ChildrenPropTypes} from "./AlertProvider.types";


export const EventsContext = createContext({} as AlertProviderContextTypes);


const AlertProvider = ({ children }: ChildrenPropTypes) => {
  const [timerValue, setTimerValue] = useState<number>(10);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [lastUpdate, setLastUpdate] = useState< string>('')
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

  const updateAlerts = ()=>{
      getAlertRegions();
      setTimerValue(10);
  }

  useEffect(() => {

    if (!alerts?.length && !isLoading) {
      getAlertRegions();
    }
  }, [alerts, isLoading]);

  useInterval(() => {

    if (timerValue > 1) {
      setTimerValue(old => old - 1);
    } else {
      getAlertRegions();
      setTimerValue(10);
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
        updateAlerts
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default AlertProvider;
