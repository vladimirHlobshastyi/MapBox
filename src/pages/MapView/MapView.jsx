import React, { useContext } from "react";
import style from "./MapView.module.css";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import renderAlertsInRegions from "./Layers/renderAlertsInRegions";
import { EventsContext } from "../../providers/AlertProvider";
import Tag from "../../components/Tag/Tag";
import occupiedRegions from "../../geoJson/geojsonOccupiedRegion";
import renderOccupiedRegions from "./Layers/renderOccupiedRegions";
import TagCounter from "../../components/TagCounter/TagCounter";
import Loader from "../Loader/Loader";

export const MapView = () => {
  const contextRegionsData = useContext(EventsContext);
  const token = process.env.REACT_APP_MAPBOX_TOKEN;
  const windowWidth = window.innerWidth;

  const resizeZoom = () => {
    if (windowWidth <= 380) {
      return 3.4;
    } else if (windowWidth <= 400) {
      return 3.7;
    } else if (windowWidth <= 850) {
      return 4;
    } else {
      return 5.4;
    }
  };

  if (contextRegionsData) {
    return (
      <div className={style.Container}>
        <Map
          mapboxAccessToken={token}
          initialViewState={{
            longitude: 31,
            latitude: 48.5,
            zoom: resizeZoom(),
            interactive: false,
          }}
          mapStyle="mapbox://styles/vladimirp300/cl3vgtnci000r14o3sifkvrvx"
        >
          {renderAlertsInRegions(contextRegionsData.data)}
          {renderOccupiedRegions(occupiedRegions)}

          <div className={style.Legend}>
            <Tag Tagcolor={"red"} text={"Alarm in region"} />
            <Tag Tagcolor={"green"} text={"No air raid alert"} />
            <Tag Tagcolor={"grey"} text={"Occupied region"} />
            <TagCounter onChange={contextRegionsData.onChange} />
          </div>
        </Map>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default MapView;
