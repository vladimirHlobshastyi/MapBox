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
        maxZoom={6}
        minZoom={3.4}
        maxBounds={[
          [10, 28], // [west, south]
          [50, 60], // [east, north]
        ]}
        preserveDrawingBuffer={true}
        mapStyle={process.env.REACT_APP_MAP_STYLE}
      >
        <AlertsInRegionsLayer alertsRegions={alerts} />
        <OccupiedRegionsLayer occupiedRegions={occupiedRegions} />
        <Legend />
        <NavigationControl
          showCompass={false}
          showZoom={true}
          position={'bottom-right'}
          style={{
            position: 'inherit',
            bottom: `${window.innerWidth < 450 ? '150px' : '15px'}`,
            right: `${window.innerWidth < 411 ? '16px' : '40px'}`,
          }}
        />
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
        <link
          href="%PUBLIC_URL%/logo512.png"
          sizes="2048x2732"
          rel="apple-touch-startup-image"
        />
        <link
          href="%PUBLIC_URL%/logo512.png"
          sizes="1668x2224"
          rel="apple-touch-startup-image"
        />
        <link
          href="%PUBLIC_URL%/logo512.png"
          sizes="1536x2048"
          rel="apple-touch-startup-image"
        />
        <link
          href="%PUBLIC_URL%/logo512.png"
          sizes="1125x2436"
          rel="apple-touch-startup-image"
        />
        <link
          href="%PUBLIC_URL%/logo512.png"
          sizes="1242x2208"
          rel="apple-touch-startup-image"
        />
        <link
          href="%PUBLIC_URL%/logo512.png"
          sizes="750x1334"
          rel="apple-touch-startup-image"
        />
        <link
          href="%PUBLIC_URL%/logo512.png"
          sizes="640x1136"
          rel="apple-touch-startup-image"
        />
      </Helmet>

      <AlertsMap />
    </>
  );
};

export default AlertsMapHelmet;
