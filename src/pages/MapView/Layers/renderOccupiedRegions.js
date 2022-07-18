import React from "react";
import { Layer, Source } from "react-map-gl";

const renderOccupiedRegions = (occupiedRegions) =>
  occupiedRegions.map((occupiedRegion) => {
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
            type: "fill",

            paint: {
              "fill-color": "#000000",
              "fill-opacity": 0.6,
            },
          }}
        />
      </Source>
    );
  });

export default renderOccupiedRegions;
