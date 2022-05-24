import React, { useCallback } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

const host = "https://alerts.com.ua/api/states/live";

const realTimeConnect = (data, setData) => {
  const logEvent = ((data, dataNew) => {
    const result = data.filter((item) => {
      if (item.id === dataNew.id) {
        return dataNew;
      } else {
        return item;
      }
    });
    setData(result);
  });

  const es = new EventSourcePolyfill(host, {
    headers: { "X-API-Key": "cc3698331afa6f399b17bcf21a33c1faa6bda749" },
    credentials: "include",
  });
  es.addEventListener("open", (e) => console.log("open"));
  es.addEventListener("error", (e) => {
    console.log(`error = > ${e.error}`);
    es.close();
  });
  ["hello", "ping", "update"].map((type) =>
    es.addEventListener(type, (e) => {
      if (!e.data && type === "update") {
        console.log(e.data.state);
        logEvent(data, e.data.state);
      } else {
        console.log(e);
      }
    })
  );
};

export default realTimeConnect;
