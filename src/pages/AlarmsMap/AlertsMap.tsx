import React, { useContext, useState } from 'react';
import style from './AlertsMap.module.css';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import AlertsInRegionsLayer from './Layers/AlertsInRegionsLayer';
import { EventsContext } from '../../providers/AlertProvider';
import occupiedRegions from '../../geoJson/geojsonOccupiedRegion';
import OccupiedRegionsLayer from './Layers/OccupiedRegionsLayer';
import Legend from '../../components/Legend/Legend';

const AlertsMap = () => {
  const { alerts } = useContext(EventsContext);
  const [isAlertsRender, setIsAlertsRender] = useState(false);
  const token = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapStyleLink = process.env.REACT_APP_MAP_STYLE;
  const windowWidth = window.innerWidth;

  const resizeZoom = (): number => {
    if (windowWidth <= 380) {
      return 3.4;
    } else if (windowWidth <= 400) {
      return 3.7;
    } else if (windowWidth <= 850) {
      return 3.8;
    } else if (windowWidth <= 1024) {
      return 5.27;
    } else {
      return 5.3;
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
        }}
        interactive={true}
        mapStyle={mapStyleLink}
        // scrollZoom={true}    //standart scroll
        maxZoom={6}
        minZoom={3.4}
        maxBounds={[
          [18.429, 28.867], // [west, south]
          [42.243, 60.384], // [east, north]
        ]}
        cooperativeGestures={true}
      >
        <AlertsInRegionsLayer
          alertsRegions={alerts}
          setIsAlertsRender={setIsAlertsRender}
        />
        <OccupiedRegionsLayer
          occupiedRegions={occupiedRegions}
          setIsAlertsRender={setIsAlertsRender}
          date={isAlertsRender ? new Date() : null}
        />

        <Legend />
        <NavigationControl showCompass={false} showZoom={true} />
      </Map>
    </div>
  );
};

export default AlertsMap;
