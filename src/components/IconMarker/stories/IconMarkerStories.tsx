import React, { FC } from 'react';
import { iconNameType } from '../IconPropsTypes';
import svgCollection from '../svg/svgCollection';
import style from './../IconMarker.module.css';

const IconMarkerStories: FC<{iconName:iconNameType}> = ({iconName = 'fire'}) => {
  return (
    <div className={style.markerContainer}>
      <div className={style.svgContainer}>{svgCollection[iconName]}</div>
    </div>
  );
};

export default IconMarkerStories;
