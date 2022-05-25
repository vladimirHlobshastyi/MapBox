import React from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
import apiKeyHeaders from "./apiKeyHeaders";

const host = "https://alerts.com.ua/api/states/live";

const realTimeConnect = (allRegions, setData, setIsClosed) => {
  const updateStateRegions = (allRegions, newParamRegion) => {
    const updateRegions = allRegions.map((region) => {
      debugger;
      console.log("newParamRegion." + newParamRegion);

      return region.id === newParamRegion.id ? newParamRegion : region;
    });
    setData(updateRegions);
  };

  const es = new EventSourcePolyfill(host, {
    headers: apiKeyHeaders,
    credentials: "include",
  });

  es.addEventListener("open", (e) => console.log("open"));

  es.addEventListener("error", (e) => {
    console.log(`error = > ${e.error}`);
    setIsClosed(true);
    es.close();
  });
  es.addEventListener("update", (e) => {
    debugger;
    console.log(e.data);
    updateStateRegions(allRegions, e.data);
  });
};

export default realTimeConnect;
