import React, { useContext } from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import AlertsInRegionsLayer from './Layers/AlertsInRegionsLayer';
import { EventsContext } from '../../providers/AlertProvider';
import occupiedRegions from '../../geoJson/geojsonOccupiedRegion';
import OccupiedRegionsLayer from './Layers/OccupiedRegionsLayer';
import Legend from '../../components/Legend/Legend';
import LastUpdate from '../../components/LastUpdate/LastUpdate';
import 'mapbox-gl/dist/mapbox-gl.css';
import style from './AlertsMap.module.css';
import { Helmet } from 'react-helmet';

export const AlertsMap = () => {
  const { alerts, lastUpdate } = useContext(EventsContext);

  const resizeZoom = () => {
    if (window.innerWidth < 860 && window.innerWidth > 640) {
      return 4.6;
    }

    if (window.innerWidth < 640 && window.innerWidth > 460) {
      return 4.1;
    }

    if (window.innerWidth < 460) {
      return 3.6;
    } else {
      return 5.2;
    }
  };

  return (
    <div className={style.Container}>
      <LastUpdate date={lastUpdate} />

      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 31,
          latitude: 48.5,
          zoom: resizeZoom(),
        }}
        cooperativeGestures={true}
        interactive={true}
        // scrollZoom={true}    //standart scroll
        maxZoom={6}
        minZoom={3.4}
        maxBounds={[
          [10, 28], // [west, south]
          [50, 60], // [east, north]
        ]}
        mapStyle={process.env.REACT_APP_MAP_STYLE}
      >
        <AlertsInRegionsLayer alertsRegions={alerts} />
        <OccupiedRegionsLayer occupiedRegions={occupiedRegions} />
        <Legend />
        <NavigationControl showCompass={false} showZoom={true} />
      </Map>
    </div>
  );
};

const AlertsMapHelmet = () => {
  return (
    <>
      <Helmet>
        <title>Карта повітряних тривог України</title>
        <meta
          name="description"
          content="Перевірка інформації про повітряну тривогу в Україні. Дізнатися, у якому регіоні оголошено повітряну тривогу"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      <AlertsMap />
    </>
  );
};

export default AlertsMapHelmet;
