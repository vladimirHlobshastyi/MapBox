import classNames from 'classnames';
import React, { FC } from 'react';
import { Marker } from 'react-map-gl';
import { ArrowProps } from './Arrow.types';
import style from './ArrowMarker.module.css';
import svgCollection from './svg/svgCollection';

const ArrowMarker: FC<ArrowProps> = ({
  iconName,
  longt,
  latit,
  anchr = 'center',
  rotate = 0,
}) => {
  const cn = classNames(
    [style.svgContainer],
    rotate === 0 ? '' : '',
    rotate === 45 ? [style.svgTransform45] : '',
    rotate === 90 ? [style.svgTransform90] : '',
    rotate === 135 ? [style.svgTransform135] : '',
    rotate === 180 ? [style.svgTransform180] : '',
    rotate === 225 ? [style.svgTransform225] : '',
    rotate === 270 ? [style.svgTransform270] : '',
    rotate === 315 ? [style.svgTransform315] : ''
  );
  return (
    <div className={style.markerContainer}>
      <Marker longitude={longt} latitude={latit} anchor={anchr}>
        <div className={cn}>{svgCollection[iconName]}</div>
      </Marker>
    </div>
  );
};

export default ArrowMarker;
