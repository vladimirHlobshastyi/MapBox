import { Layer, Source } from "react-map-gl";
import Line from "./../../../geoJson/Line.json";

const FrontLineLayer = () => {
  return (
    <Source
      id={`FrontLineSource`}
      key={`FrontLineSource`}
      type="geojson"
      data={Line}
    >
      <Layer
        {...{
          id: ` FrontLineLayer`,
          key: `FrontLineLayer`,
          type: "line",

          paint: {
            "line-dasharray": [0.8, 0.5],
            "line-width": 1.8,
            "line-color": "#000000",
          },
        }}
      />
    </Source>
  );
};

export default FrontLineLayer;
