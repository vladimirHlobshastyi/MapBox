import { EventSourcePolyfill } from "event-source-polyfill";
import apiKeyHeaders from "./apiKeyHeaders";

const host = "https://alerts.com.ua/api/states/live";

const realTimeConnect = (allRegions, setData, setIsClosed) => {
  const updateRegionsState = (allRegions, newParamRegion) => {
    const updateRegions = allRegions.map((region) =>
      region.id === newParamRegion.state.id ? newParamRegion.state : region
    );
    return setData(updateRegions);
  };

  const es = new EventSourcePolyfill(host, {
    headers: apiKeyHeaders,
    credentials: "include",
  });

  es.addEventListener("open", (e) => {
    console.log("open");
    setIsClosed(false);
  });

  es.addEventListener("error", (e) => {
    es.close();
    setIsClosed(true);
  });

  es.addEventListener("update", (e) => {
    updateRegionsState(allRegions, JSON.parse(e.data));
  });
};

export default realTimeConnect;
