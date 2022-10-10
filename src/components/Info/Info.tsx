import React, { FC } from 'react';
import style from './Info.module.css';
import { InfoPropsTypes } from './Info.types';
import { InfoData } from './InfoData';

const Info: FC<InfoPropsTypes> = ({ stats, name, increase }): JSX.Element => {
  const isUnits = () => (name === 'personnel_units' ? <span>~</span> : <></>);
  const isIncrease = () => {
    if (increase !== 0) return `+${increase}`;
  };

  return (
    <div className={style.Container}>
      <div className={style.leftWrapper}>
        <div className={style.leftWrapperSvg}>
          <img src={InfoData[name].png} alt="logo"></img>
        </div>
        <div className={style.leftWrapperValue}>
          <div className={style.leftWrapperValueIncrease}>
          <div className={style.leftWrapperValueIncreaseUp}> {isUnits()}</div>
          <div className={style.leftWrapperValueIncreaseDown}> {isIncrease()}</div>
          </div>
          {stats}
        </div>
      </div>
      <div className={style.rightWrapper}>
        <div className={style.rightWrapperInfoContentUa}>
          <span>{InfoData[name].ua.toUpperCase()}</span>
        </div>
        <div className={style.rightWrapperInfoContentEn}>
          <span>{InfoData[name].en.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
