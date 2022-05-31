import React, { useContext } from "react";
import style from "./MapView.module.css";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import layerRendering from "./layerRendering";
import { EventsContext } from "../../providers/AlertProvider";

export const MapView = () => {
  const contextRegionsData = useContext(EventsContext);
  const token = process.env.REACT_APP_MAPBOX_TOKEN;

  if (contextRegionsData) {
    return (
      <div className={style.Container}>
        <Map
          mapboxAccessToken={token}
          initialViewState={{
            longitude: 31,
            latitude: 48.5,
            zoom: 5.4,
          }}
          style={{ width: 1200, height: 800 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {layerRendering(contextRegionsData)}
        </Map>
      </div>
    );
  } else {
    return <div>LOADING</div>;
  }
};

export default MapView;
