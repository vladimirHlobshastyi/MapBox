import React, { FC } from 'react';
import { Layer, Source } from 'react-map-gl';
import geoData from '../../../geoJson/geojsonData';
import {Alert} from "../../../commonTypes/alert";

type AlertsInRegionsLayerPropTypes = {
  alertsRegions?: Alert[];
}

const AlertsInRegionsLayer = ({ alertsRegions }: AlertsInRegionsLayerPropTypes) => {
  const geoJson: any = geoData; // replace any
  const layerStyle: any = (id: number, alert: boolean) => {  // replace any
    const color = !alert ? '#228B22' : '#FF0000';

    return {
      id: ` ${id}/${alert}/Layer}`,
      key: `${id}/${alert}/Layer}`,
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
