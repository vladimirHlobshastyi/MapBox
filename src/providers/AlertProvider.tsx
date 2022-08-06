import React, { createContext, useState, useEffect, FC } from "react";
import useInterval from "../hooks/useInterval";
import getAllRegions from "../api/getAllRegions";

// Minor: Split timer and fetching regions. Move timer to separate context/provider.
type dataType = { states: Array<alertType>; last_update: string };
type alertType = {
  id: number;
  name: string;
  name_en: string;
  alert: Boolean;
  changed: string;
};
interface contextTypeS {
  alerts: Array<alertType> | [];
  lastUpdate: string | undefined;
  isLoading: boolean;
  errorMessage: string;
  timerValue: number;
}
export const EventsContext = createContext<contextTypeS | null>(null);

const AlertProvider = ({ children }) => {
  const [timerValue, srtTimerValue] = useState(10);
  const [alerts, setAlerts] = useState<[] | Array<alertType>>([]);
  const [lastUpdate, setLastUpdate] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getAlertRegions = async () => {
    try {
      if (errorMessage) {
        setErrorMessage("");
      }

      setIsLoading(true);
      const data: dataType = await getAllRegions();
      console.log(data);
      if (data?.states) {
        setAlerts(data?.states);
        setLastUpdate(data?.last_update);
      }

      setIsLoading(false);
    } catch (error) {
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
      srtTimerValue((old) => old - 1);
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
