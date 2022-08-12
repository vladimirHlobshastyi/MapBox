import React, { useContext } from 'react';
import style from './AlertsMap.module.css';
import Map from 'react-map-gl';
import AlertsInRegionsLayer from './Layers/AlertsInRegionsLayer';
import { EventsContext } from '../../providers/AlertProvider';
import occupiedRegions from '../../geoJson/geojsonOccupiedRegion';
import OccupiedRegionsLayer from './Layers/OccupiedRegionsLayer';
import Legend from '../../components/Legend/Legend';
import LastUpdate from '../../components/LastUpdate/LastUpdate';
import 'mapbox-gl/dist/mapbox-gl.css';

export const AlertsMap = () => {
  const { alerts, lastUpdate }: any = useContext(EventsContext);

  const resizeZoom = () => {
    if (window.innerWidth < 860) {
      return 3.5;
    }

    if (window.innerWidth < 640) {
      return 4.5;
    }

    if (window.innerWidth < 460) {
      return 4.5;
    }

    else {
      return 5;
    }
  };

  return (
    <div className={style.Container}>
      <LastUpdate
        date={lastUpdate}
      />
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 31,
          latitude: 48.5,
          zoom: resizeZoom(),
        }}
        interactive={false}
        mapStyle={process.env.REACT_APP_MAP_STYLE}
      >
        <AlertsInRegionsLayer alertsRegions={alerts} />
        <OccupiedRegionsLayer occupiedRegions={occupiedRegions} />
        <Legend />
      </Map>
    </div>
  );
};

export default AlertsMap;
