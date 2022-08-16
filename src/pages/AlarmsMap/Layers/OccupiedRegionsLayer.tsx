import React, { FC, useState } from 'react';
import { Layer, Source } from 'react-map-gl';
import { geojsonType } from '../../../geoJson/geojsonData';

type OccupiedRegionsLayerProps = {
  occupiedRegions: Array<geojsonType>,
  setIsAlertsRender: React.Dispatch<React.SetStateAction<boolean>>,
  date: Date | null,
};

const OccupiedRegionsLayer: FC<OccupiedRegionsLayerProps> = ({
  occupiedRegions,
  setIsAlertsRender,
  date,
}) => {
  debugger;
  const [oldDate, setOldDate] = useState<Date>(new Date());
  if (date) {
    setOldDate(date);
  }

  return (
    <>
      {occupiedRegions?.map((occupiedRegion: any, index) => {
        if (index === 5) setIsAlertsRender(false);
        return (
          <Source
            id={`${occupiedRegion.properties.shapeName} + ${oldDate}`}
            key={`${occupiedRegion.properties.shapeName} + ${oldDate}`}
            type="geojson"
            data={occupiedRegion}
          >
            <Layer
              {...{
                id: `${occupiedRegion.properties.shapeName}`,
                key: `${occupiedRegion.properties.shapeName}`,
                type: 'fill',

                paint: {
                  'fill-color': '#000000',
                  'fill-opacity': 0.6,
                },
              }}
            />
          </Source>
        );
      })}
    </>
  );
};

export default OccupiedRegionsLayer;
