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
  value = 0,
}) => {
  const cn = classNames(
    [style.svgContainer],
    value === 45 ? [style.svgTransform45] : '',
    value === 90 ? [style.svgTransform90] : '',
    value === 135 ? [style.svgTransform135] : '',
    value === 180 ? [style.svgTransform180] : '',
    value === 225 ? [style.svgTransform225] : '',
    value === 270 ? [style.svgTransform270] : '',
    value === 315 ? [style.svgTransform315] : ''
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
