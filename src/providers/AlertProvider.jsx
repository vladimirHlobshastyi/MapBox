import React, { createContext, useEffect, useState } from "react";
import getAllRegions from "../api/getAllRegions";

export const EventsContext = createContext();

const AlertProvider = ({ children }) => {
  const [regionsData, setRegionsData] = useState([]);
  useEffect(() => {
    getAlertRegions();
    setInterval(() => {
      return getAlertRegions();
    }, 10000);
  }, []);

  const getAlertRegions = async () => {
    const data = await getAllRegions();
    return setRegionsData(data);
  };
  return (
    <EventsContext.Provider value={regionsData}>
      {children}
    </EventsContext.Provider>
  );
};

export default AlertProvider;
