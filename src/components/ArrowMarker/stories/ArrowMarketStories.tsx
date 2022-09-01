import React from 'react';
import { iconNameType, rotateType } from '../Arrow.types';
import svgCollection from '../svg/svgCollection';
import style from './../ArrowMarker.module.css';

const ArrowMarketStories = ({
  iconName = 'rightYellow',
  rotate,
}: {
  iconName: iconNameType,
  rotate: rotateType,
}) => {
  const rotateClass = (item: typeof rotate) => {
    switch (item) {
      case 45:
        return style.svgTransform45;
        
      case 90:
        return style.svgTransform90;
      case 135:
        return style.svgTransform135;
      case 180:
        return style.svgTransform180;
      case 225:
        return style.svgTransform225;
      case 270:
        return style.svgTransform270;
      case 315:
        return style.svgTransform315;
      default:
        return ' ';
    }
  };
  return (
    <div className={style.markerContainer}>
      <div className={style.svgContainer + ' ' + rotateClass(rotate)}>
        {svgCollection[iconName]}
      </div>
    </div>
  );
};

export default ArrowMarketStories;
