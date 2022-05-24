import React, { useCallback, useEffect, useState } from "react";
import style from "./MapView.module.css";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geojsonData from "./../../geoJson/geojsonData";
import { EventSourcePolyfill } from "event-source-polyfill";
import realTimeConnect from "../../api/realTimeConnect";

const token =
  "pk.eyJ1IjoidmxhZGltaXJwMzAwIiwiYSI6ImNsMnNva3BpazAwcnozZHFtemdmOG9td3IifQ.e-pV7a1zt65sBmnfnb8cmQ";

const defaultsLocation = {
  longitude: 31,
  latitude: 48.5,
  zoom: 5.4,
};

export const MapView = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [data, setData] = useState([]);

  const layerRendering = (geoJsonArray) => {
    const layerStyle = (id, alert) => {
      const color = alert ? "green" : "red";
      return {
        id: id + " Layer",
        type: "fill",
        paint: {
          "fill-color": color,
          "fill-opacity": 0.3,
        },
      };
    };

    return geoJsonArray.map((activeRegion) => (
      <Source
        id={activeRegion.id + activeRegion.changed}
        key={activeRegion.id + activeRegion.changed}
        type="geojson"
        data={geojsonData[activeRegion.id]}
      >
        <Layer
          {...layerStyle(
            activeRegion.id.toString(),
            activeRegion.alert.toString()
          )}
        />
      </Source>
    ));
  };

  const getRegions = async () => {
    const request = await fetch("https://alerts.com.ua/api/states", {
      headers: { "X-API-Key": "cc3698331afa6f399b17bcf21a33c1faa6bda749" },
    });
    const res = await request.json();
    setIsClosed(true);
    return setData(res.states);
  };

  const host = "https://alerts.com.ua/api/states/live";
  

  useEffect(() => {
    console.log(isClosed);
    !isClosed ? getRegions() : realTimeConnect(data, setData);
  }, [isClosed]);

  return (
    <div className={style.Container}>
      <Map
        mapboxAccessToken={token}
        initialViewState={defaultsLocation}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {layerRendering(data)}
      </Map>
    </div>
  );
};

export default MapView;
