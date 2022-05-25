import { Layer, Source } from "react-map-gl";
import geojsonData from "../../geoJson/geojsonData";

const layerRendering = (geoJsonArray) => {
  const layerStyle = (id, alert, activeRegion) => {
    const color = alert === "false" ? "#228B22" : "#FF0000";

    return {
      id: id + "Layer" + activeRegion.changed,
      key: id + "Layer" + activeRegion.changed,
      type: "fill",
      paint: {
        "fill-color": color,
        "fill-opacity": color === "#228B22" ? 0.2 : 0.5,
      },
    };
  };

  return geoJsonArray.map((activeRegion) => (
    <Source
      id={activeRegion.id + activeRegion.changed}
      key={activeRegion.id + activeRegion.changed}
      type="geojson"
      data={geojsonData[activeRegion.id]}
    >
      <Layer
        {...layerStyle(
          activeRegion.id.toString(),
          activeRegion.alert.toString(),
          activeRegion.changed.toString()
        )}
      />
    </Source>
  ));
};

export default layerRendering;
