import React from 'react';
import { Layer, LayerProps, Source } from 'react-map-gl';
import { alertType } from '../../../api/getAllRegions';
import geojsonData from '../../../geoJson/geojsonData';

export type alertsType = alertType[] | [];
type alertsRegionsType = { alertsRegions: alertsType };

const AlertsInRegionsLayer = ({ alertsRegions }: alertsRegionsType) => {
  const geoJson: GeoJSON.Feature[] | any = geojsonData;
  const layerStyle = (id: number, alert: boolean): LayerProps => {
    const color = alert === false ? '#228B22' : '#FF0000';

    return {
      id: ` ${id}/${alert}/Layer}`,
      type: 'fill',
      paint: {
        'fill-color': color,
        'fill-opacity': color === '#228B22' ? 0.5 : 0.7,
      },
    };
  };

  return (
    <>
      {alertsRegions?.map(activeRegion => (
        <Source
          id={`${activeRegion.id}/${activeRegion.alert}/Source`}
          key={`${activeRegion.id}/${activeRegion.alert}/Source`}
          type="geojson"
          data={geoJson[activeRegion.id]}
        >
          <Layer {...layerStyle(activeRegion.id, activeRegion.alert)} />

          <Layer
            {...{
              id: `${activeRegion.id}`,
              key: `${activeRegion.id}`,
              type: 'line',
              paint: {
                'line-width': 0.5,
                'line-color': '#ffffff',
              },
            }}
          />
        </Source>
      ))}
    </>
  );
};

export default AlertsInRegionsLayer;
