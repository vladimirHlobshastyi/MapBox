import React, { useEffect, useState } from "react";
import getAllRegions from "./getAllRegions";

const api = () => {
  const ws = new WebSocket("bla bla");
  const [isWsClose, setIsWsClose] = useState(true);

  useEffect(() => {
    if (isWsClose) getAllRegions();

    ws.onopen = (event) => {
      console.log("server is open");
    };
    ws.onmessage = function (event) {
      let incomingMessage = event.data;
      console.log(incomingMessage);
    };

    ws.onclose = (event) => {
      setIsWsClose(true);
      if (event.wasClean) {
        alert(
          `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
        );
      } else {
        alert("[close] Соединение прервано");
      }
    };
    ws.onerror = function (error) {
      setIsWsClose(true);
      alert(`[error] ${error.message}`);
    };
    return () => ws.close();
  }, [ws, isWsClose]);
};

export default api;
