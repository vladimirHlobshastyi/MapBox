import { useState, useEffect, useContext, createContext } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
import { API_URLS } from "../api/config";
import { getInitialAlerts } from "../api/requests";
const EventsContext = createContext();
const EventsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    getInitialAlertsBeforeReceivingEvents();
    const alertEvents = new EventSourcePolyfill(API_URLS.GET_ALERTS_EVENTS, {});
    alertEvents.addEventListener("open", onAlertsConnected);
    alertEvents.addEventListener("error", onAlertsError);
    alertEvents.addEventListener("update", onAlertsUpdate);
    return () => {
      alertEvents.close();
    };
  }, []);
  const onAlertsUpdate = (event) => {
    try {
      const data = JSON.parse(event.data);
      setAlerts(data);
    } catch (error) {}
  };
  const onAlertsError = (event) => {
    console.log("Alerts error:", event);
  };
  const onAlertsConnected = (event) => {
    console.log("Alerts connected:", event);
  };
  const getInitialAlertsBeforeReceivingEvents = async () => {
    const data = await getInitialAlerts();
    setAlerts(data);
  };
  return (
    <EventsContext.Provider value={alerts}>{children}</EventsContext.Provider>
  );
};
export const useEventsProvider = () => {
  return useContext(EventsContext);
};
export default EventsProvider;
