import React, { useCallback, useEffect, useState } from "react";
import style from "./MapView.module.css";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geojsonData from "./../../geoJson/geojsonData";
import realTimeConnect from "../../api/realTimeConnect";
import apiKeyHeaders from "../../api/apiKeyHeaders";

const token =
  "pk.eyJ1IjoidmxhZGltaXJwMzAwIiwiYSI6ImNsMnNva3BpazAwcnozZHFtemdmOG9td3IifQ.e-pV7a1zt65sBmnfnb8cmQ";

const defaultsLocation = {
  longitude: 31,
  latitude: 48.5,
  zoom: 5.4,
};

export const MapView = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [regionsData, setRegionsData] = useState([]);

  const layerRendering = (geoJsonArray) => {
    const layerStyle = (id, alert) => {
      const color = alert === "false" ? "#228B22" : "#FF0000";

      return {
        id: id + " Layer",
        type: "fill",
        paint: {
          "fill-color": color,
          "fill-opacity": color === "#228B22" ? 0.2 : 0.5,
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
      headers: apiKeyHeaders,
    });
    const requesRegions = await request.json();
    setIsClosed(false);
    console.log(requesRegions.states);
    return setRegionsData(requesRegions.states);
  };

  useEffect(() => {
    isClosed
      ? getRegions()
      : realTimeConnect(regionsData, setRegionsData, setIsClosed);
  }, [isClosed]);

  return (
    <div className={style.Container}>
      <Map
        mapboxAccessToken={token}
        initialViewState={defaultsLocation}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {layerRendering(regionsData)}
      </Map>
    </div>
  );
};

export default MapView;
