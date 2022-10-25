import React, { useContext, useEffect, useState } from 'react';
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
import IosLoader from '../../components/IosLoader';
import Button from '../../components/Button/Button';
import { IsIosEventsContext } from '../../providers/IsIosProvaider';

export const AlertsMap = () => {
  const { alerts, lastUpdate } = useContext(EventsContext);
  const { isIosProviderProp } = useContext(IsIosEventsContext);
  const [isLoading, setIsLoading] = useState(isIosProviderProp);
  const resizeZoom = () => {
    if (window.innerWidth < 860 && window.innerWidth > 640) {
      return 4.6;
    }

    if (window.innerWidth < 640 && window.innerWidth > 460) {
      return 4.1;
    }

    if (window.innerWidth < 460 && window.innerWidth > 350) {
      return 3.7;
    }

    if (window.innerWidth < 350) {
      return 3.5;
    } else {
      return 5.2;
    }
  };

  const myRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, []);

  if (isLoading) {
    return <IosLoader />;
  }

  return (
    <div className={style.Container}>
      <div className={style.ContainerWrapper} ref={myRef}>
        <LastUpdate date={lastUpdate} />
        <Legend />
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          initialViewState={{
            longitude: 31,
            latitude: 48.5,
            zoom: resizeZoom(),
          }}
          cooperativeGestures={true}
          interactive={true}
          maxZoom={6.5}
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
          {!isIosProviderProp ? (
            <div className={style.screenshot}>
              <Button refProp={myRef} isStatistic={false} />
            </div>
          ) : (
            <></>
          )}
          <NavigationControl
            showCompass={false}
            showZoom={true}
            position={`${
              window.innerWidth > 450 ? 'bottom-right' : 'top-right'
            }`}
            visualizePitch={true}
            style={{
              position: 'inherit',
              top: `${window.innerWidth < 450 ? '100px' : ''}`,
              bottom: `${window.innerWidth < 450 ? '' : '25px'}`,
              right: `${window.innerWidth < 411 ? '16px' : '40px'}`,
            }}
          />
        </Map>
      </div>
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
