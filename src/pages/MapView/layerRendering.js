import { Layer, Source } from "react-map-gl";
import geojsonData from "../../geoJson/geojsonData";

const layerRendering = (geoJsonArray) => {
  const layerStyle = (id, alert, changed) => {
    const color = alert === false ? "#228B22" : "#FF0000";

    return {
      id: ` ${id}/${Math.random()}`,
      key: `${id}/${Math.random()}`,
      type: "fill",
      paint: {
        "fill-color": color,
        "fill-opacity": color === "#228B22" ? 0.2 : 0.5,
      },
    };
  };

  return geoJsonArray.map((activeRegion) => (
    <Source
      id={activeRegion.id + "/" + Math.random()}
      key={activeRegion.id + "/" + Math.random()}
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
