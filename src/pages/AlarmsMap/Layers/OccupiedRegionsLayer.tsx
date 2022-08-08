import React, { FC } from 'react';
import { Layer, Source } from 'react-map-gl';

type geojsonType = {
  type: string,
  geometry: {
    coordinates: number[][][],
    type: string,
  },
  properties: {
    shapeName: string,
    Level: string,
    shapeISO: string,
    shapeID: string,
    shapeGroup: string,
    shapeType: string,
  },
};
type occupiedRegionsType = {
  occupiedRegions: Array<geojsonType>,
};

const OccupiedRegionsLayer: FC<occupiedRegionsType> = ({ occupiedRegions }) => {
  debugger;
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
