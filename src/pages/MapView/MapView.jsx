import React, { useEffect } from "react";
import style from "./MapView.module.css";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geojsonData from "./../../geoJson/geojsonData";

const token =
  "pk.eyJ1IjoidmxhZGltaXJwMzAwIiwiYSI6ImNsMnNva3BpazAwcnozZHFtemdmOG9td3IifQ.e-pV7a1zt65sBmnfnb8cmQ";

const defaultsLocation = {
  longitude: 31,
  latitude: 48.5,
  zoom: 5.4,
};

const lokationData = [
  { id: "Chernihiv", name: "Chernihiv", color: "red" },
  { id: "Lviv", name: "Lviv", color: "blue" },
  { id: "KyivSity", name: "KyivCity", color: "green" },
  { id: "Vinnytsia", name: "Vinnytsia" },
];

export const MapView = () => {
  const layerRendering = (geoJsonArray) => {
    const layerStyle = (id, color = "#00ffff", opacity = 0.3) => {
      return {
        id,
        type: "fill",
        paint: {
          "fill-color": color,
          "fill-opacity": opacity,
        },
      };
    };

    return geoJsonArray.map((activeRegion) => (
      <Source
        id={activeRegion.id}
        key={activeRegion.id}
        type="geojson"
        data={geojsonData[activeRegion.name]}
      >
        <Layer {...layerStyle(activeRegion.id, activeRegion.color)} />
      </Source>
    ));
  };

  /* const ws = new WebSocket("wss:/www.com");

  useEffect(() => {
    ws.onopen = () => {
      console.log("server is open");
    };
    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      setMessage(message);
    });

    ws.onclose = (event) => {
      console.log("Server closed");
    };
    ws.onerror = (event) => {
      console.log("Server get an error");
    };
  }, []); */

  return (
    <div className={style.Container}>
      <Map
        mapboxAccessToken={token}
        initialViewState={defaultsLocation}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {layerRendering(lokationData)}
      </Map>
    </div>
  );
};

export default MapView;
