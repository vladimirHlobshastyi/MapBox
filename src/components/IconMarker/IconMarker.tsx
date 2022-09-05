import React, { FC } from 'react';
import { Marker } from 'react-map-gl';
import svgCollection from './svg/svgCollection';
import style from './IconMarker.module.css';
import { IconPropsTypes } from './IconPropsTypes';

const IconMarker: FC<IconPropsTypes> = ({
  iconName = 'fire',
  longt = 30,
  latit = 41,
  anchr = 'center',
}) => {
  return (
    <div className={style.markerContainer}>
      <Marker longitude={longt} latitude={latit} anchor={anchr}>
        <div className={style.svgContainer}>{svgCollection[iconName]}</div>
      </Marker>
    </div>
  );
};

export default IconMarker;
