import React, { FC } from 'react';
import { Marker } from 'react-map-gl';
import svgCollection from './svg/svgCollection';
import style from './IconMarker.module.css';

type IconProps = {
  iconName: 'explosion' | 'rocket' | 'bigExplosion' | 'gun' | 'fire',
  longt: number,
  latit: number,
  anchr:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center',
};

const IconMarker: FC<IconProps> = ({
  iconName = 'fire',
  longt,
  latit,
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
