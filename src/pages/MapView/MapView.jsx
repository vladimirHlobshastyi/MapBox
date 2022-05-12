import React from "react";
import style from "./MapView.module.css";
import Map, { Source, Layer } from "react-map-gl";
import volyn from "../../geoJson/Volyn.json";
import chernihiv from "../../geoJson/Chernihiv.json";
import "mapbox-gl/dist/mapbox-gl.css";
import UA from "./../../geoJson/Ukraine-regions.json";
import Odessa from "./../../geoJson/Odessa.json";

const token =
  "pk.eyJ1IjoidmxhZGltaXJwMzAwIiwiYSI6ImNsMnNva3BpazAwcnozZHFtemdmOG9td3IifQ.e-pV7a1zt65sBmnfnb8cmQ";

const defaultsLocation = {
  longitude: 31.178175217890583,
  latitude: 49.38690975075764,
  zoom: 5.2,
};

const geojsonChernihiv = chernihiv;

const geojsonVolyn = volyn;
const Ukraine = UA;

const layerStyle = {
  id: "point",
  type: "fill",
  paint: {
    "fill-color": "red",
    "fill-opacity": 0.3,
  },
};

const layerStyle1 = {
  id: "point1",
  type: "fill",
  paint: {
    "fill-color": "#00ffff",
    "fill-opacity": 0.3,
  },
};

export const MapView = () => {
  //will do this func
  const layerRendering = (geoJsonArray) => {
    const layerStyle = {
      id: "point1",
      type: "fill",
      paint: {
        "fill-color": "#00ffff",
        "fill-opacity": 0.3,
      },
    };
    return geoJsonArray.map((it) => {
      return (
        <Source key={it.id} type="geojson" data={AllDataGeojson}>
          <Layer {...layerStyle} />
        </Source>
      );
    });
  };
  return (
    <div className={style.Container}>
      <Map
        mapboxAccessToken={token}
        initialViewState={defaultsLocation}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source key={1} type="geojson" data={Ukraine}>
          <Layer {...layerStyle} />
        </Source>
        <Source key={2} type="geojson" data={geojsonVolyn}>
          <Layer {...layerStyle1} />
        </Source>
      </Map>
    </div>
  );
};

export default MapView;
