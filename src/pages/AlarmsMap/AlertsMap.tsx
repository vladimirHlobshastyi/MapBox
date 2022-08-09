import React, { useContext } from 'react';
import style from './AlertsMap.module.css';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import AlertsInRegionsLayer from './Layers/AlertsInRegionsLayer';
import { EventsContext } from '../../providers/AlertProvider';
import occupiedRegions from '../../geoJson/geojsonOccupiedRegion';
import OccupiedRegionsLayer from './Layers/OccupiedRegionsLayer';
import Legend from '../../components/Legend/Legend';

const AlertsMap = () => {
  const { alerts }: any = useContext(EventsContext);
  const token = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapStyleLink = process.env.REACT_APP_MAP_STYLE;
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
        }}
        interactive={false}
        mapStyle={mapStyleLink}
      >
        <AlertsInRegionsLayer alertsRegions={alerts} />
        <OccupiedRegionsLayer occupiedRegions={occupiedRegions} />
        <Legend />
      </Map>
    </div>
  );
};

export default AlertsMap;
