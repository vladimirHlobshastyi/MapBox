import React, { useCallback, useEffect, useMemo, useState } from "react";
import style from "./MapView.module.css";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import realTimeConnect from "../../api/realTimeConnect";
import getAllRegions from "../../api/getAllRegions";
import layerRendering from "./layerRendering";

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
/* 
  useEffect(() => {
    console.log(
      "isClosed>>>" + isClosed + "     regionsData>>>>" + regionsData
    );
    isClosed
      ? getAllRegions(setIsClosed, setRegionsData)
      : realTimeConnect(regionsData, setRegionsData, setIsClosed);
  }, [isClosed, regionsData]);

  const layerRenderingCallb = useMemo(
    () => layerRendering(regionsData),
    [regionsData]
  ); */

  return (
    <div className={style.Container}>
      <Map
        mapboxAccessToken={token}
        initialViewState={defaultsLocation}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {layerRenderingCallb}
      </Map>
    </div>
  );
};

export default MapView;
