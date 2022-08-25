import React, { FC } from 'react';
import { Layer, Source } from 'react-map-gl';
import { geojsonType } from '../../../geoJson/geojsonData';

type occupiedRegionsType = {
  occupiedRegions: Array<geojsonType>,
};

const OccupiedRegionsLayer: FC<occupiedRegionsType> = ({ occupiedRegions }) => {
  return (
    <>
      {occupiedRegions?.map((occupiedRegion: any) => {
        return (
          <Source
            id={occupiedRegion.properties.shapeName}
            key={occupiedRegion.properties.shapeName}
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
                  'fill-opacity': 0.2,
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
