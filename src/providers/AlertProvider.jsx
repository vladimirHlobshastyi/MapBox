import React, { createContext, useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import getAllRegions from "../api/getAllRegions";

// Minor: Split timer and fetching regions. Move timer to separate context/provider.

export const EventsContext = createContext();

const AlertProvider = ({ children }) => {
  const [timerValue, srtTimerValue] = useState(10);
  const [alerts, setAlerts] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getAlertRegions = async () => {
    try {
      if (errorMessage) {
        setErrorMessage("");
      }

      setIsLoading(true);
      const data = await getAllRegions();
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
