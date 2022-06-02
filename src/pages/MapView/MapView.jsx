import React, { useContext } from "react";
import style from "./MapView.module.css";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import layerRendering from "./layerRendering";
import { EventsContext } from "../../providers/AlertProvider";
import Tag from "../../components/Tag";

export const MapView = () => {
  const contextRegionsData = useContext(EventsContext);
  const token = process.env.REACT_APP_MAPBOX_TOKEN;

  if (contextRegionsData) {
    return (
      <div className={style.Container} i>
        <Map
          mapboxAccessToken={token}
          initialViewState={{
            longitude: 31,
            latitude: 48.5,
            zoom: 3.8,
            interactive: false,
            trackResize: true,
          }}
          mapStyle="mapbox://styles/vladimirp300/cl3vgtnci000r14o3sifkvrvx/draft"
        >
          {layerRendering(contextRegionsData)}
          <div className={style.Legend}>
            <Tag Tagcolor={"red"} text={"Alarm in region"} />
            <Tag Tagcolor={"green"} text={"No air raid alert"} />
          </div>
        </Map>
      </div>
    );
  } else {
    return <div>LOADING</div>;
  }
};

export default MapView;
