import React from "react";
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

const fillStyleLayer = {
  id: "point1",
  type: "fill",
  paint: {
    "fill-color": "#0055ff",
    "fill-opacity": 0.3,
  },
};
const lineLayer = {
  id: "outline",
  type: "line",
  source: "maine",
  layout: {},
  paint: {
    "line-color": "#000",
    "line-width": 1,
    "line-blur": 5,
  },
};

export const MapView = () => {
  //will do this func
  const LokationData = [
    { id: "Lviv", name: "Lviv" /* color: "red"  */ },
    { id: "KyivSity", name: "KyivCity" /* color: "red"  */ },
  ];
  const layerRendering = (geoJsonArray) => {
    const layerStyle = {
      id: "point1",
      type: "fill",
      paint: {
        "fill-color": "#00ffff",
        "fill-opacity": 0.3,
      },
    };

    return geoJsonArray.map((item) => (
      <Source key={item.id} type="geojson" data={geojsonData[item.name]}>
        <Layer {...layerStyle} />
      </Source>
    ));
  };
  return (
    <div className={style.Container}>
      <Map
        mapboxAccessToken={token}
        initialViewState={defaultsLocation}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Source key={1} type="geojson" data={geojsonData.AllRegions}>
          <Layer {...fillStyleLayer} />
          <Layer {...lineLayer} />
        </Source>
        {/*     {layerRendering(LokationData)} */}
      </Map>
    </div>
  );
};

export default MapView;
