import { Layer, Source } from "react-map-gl";
import geojsonData from "../../geoJson/geojsonData";

const layerRendering = (geoJsonArray) => {
  const layerStyle = (id, alert, changed) => {
    const color = alert === false ? "#228B22" : "#FF0000";

    return {
      id: ` ${id}/${alert}/Layer}`,
      key: `${id}/${alert}/Layer}`,
      type: "fill",
      paint: {
        "fill-color": color,
        "fill-opacity": color === "#228B22" ? 0.5 : 0.7,
      },
    };
  };

  return geoJsonArray.map((activeRegion) => (
    <Source
      id={`${activeRegion.id}/${activeRegion.alert}/Source`}
      key={`${activeRegion.id}/${activeRegion.alert}/Source`}
      type="geojson"
      data={geojsonData[activeRegion.id]}
    >
      <Layer
        {...layerStyle(
          activeRegion.id,
          activeRegion.alert,
          activeRegion.changed
        )}
      />
    </Source>
  ));
};

export default layerRendering;
