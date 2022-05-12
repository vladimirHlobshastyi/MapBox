import React from "react";
import SideBar from "../SideBar/Sidebar";
import style from "./Home.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { MapView } from "../MapView/MapView";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmxhZGltaXJwMzAwIiwiYSI6ImNsMnNva3BpazAwcnozZHFtemdmOG9td3IifQ.e-pV7a1zt65sBmnfnb8cmQ";

const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <SideBar />
      <MapView />
    </div>
  );
};

export default Home;
