import React from "react";
import style from "./Home.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapView } from "../MapView/MapView";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <Helmet>
        <title>Checking alert map in Ukraine regions</title>
        <meta
          name="description"
          content="Checking information on air alert warning in Ukraine. Find out which region has an air raid alert and view up-to-date information about dangers"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <MapView />
    </div>
  );
};

export default Home;
