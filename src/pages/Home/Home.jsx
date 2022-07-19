import React from "react";
import style from "./Home.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapView } from "../MapView/MapView";


const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <MapView />
    </div>
  );
};

export default Home;
