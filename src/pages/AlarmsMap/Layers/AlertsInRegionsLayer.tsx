import React from 'react';
import { Layer, Source, LayerProps } from 'react-map-gl';
import geoData from '../../../geoJson/geojsonData';
import { Alert } from '../../../commonTypes/alert';

type AlertsInRegionsLayerPropTypes = {
  alertsRegions?: Alert[],
};

const AlertsInRegionsLayer = ({
  alertsRegions,
}: AlertsInRegionsLayerPropTypes) => {
  const geoJson: any = geoData; // replace any
  const layerStyle = (id: number, alert: boolean): LayerProps => {
    const color = !alert ? '#3e4247' : '#f60909';

    return {
      id: ` ${id}/${alert}/Layer}`,
      type: 'fill',
      paint: {
        'fill-color': color,
        'fill-opacity': 0.5,
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
