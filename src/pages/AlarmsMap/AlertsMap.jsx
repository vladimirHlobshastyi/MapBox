import React, { useContext } from "react";
import style from "./AlertsMap.module.css";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import AlertsInRegionsLayer from "./Layers/AlertsInRegionsLayer";
import { EventsContext } from "../../providers/AlertProvider";
import Tag from "../../components/Tag/Tag";
import occupiedRegions from "../../geoJson/geojsonOccupiedRegion";
import OccupiedRegionsLayer from "./Layers/OccupiedRegionsLayer";
import Counter from "../../components/Counter/Counter";
import Loader from "../../components/Loader/Loader";

export const AlertsMap = () => {
  const { alerts, lastUpdate, timerValue, isLoading } = useContext(EventsContext);
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
        // Move map style link to .env variables
        mapStyle="mapbox://styles/vladimirp300/cl3vgtnci000r14o3sifkvrvx"
      >
        <AlertsInRegionsLayer alertsRegions={alerts} />
        <OccupiedRegionsLayer occupiedRegions={occupiedRegions} />

        {/*Move legend to separate component*/}
        <div className={style.Legend}>
          <Tag color={"red"} text={"Тривога в регіоні"} />
          <Tag color={"green"} text={"Тривога відсутня"} />
          <Tag color={"grey"} text={"Окуповані регіони"} />
          <Counter value={timerValue} isLoading={isLoading} />
        </div>
      </Map>
    </div>
  );
};

export default AlertsMap;
