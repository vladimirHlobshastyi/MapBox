import React, { FC } from 'react';
import style from './Info.module.css';
import { InfoPropsTypes } from './Info.types';
import { InfoDate } from './InfoDate';

const Info: FC<InfoPropsTypes> = ({ value, name, increase }): JSX.Element => {
  const isUnits = () => (name === 'personnel_units' ? <span>~</span> : <></>);
  const isIncrease = () => {
    if (increase !== 0) return `+${increase}`;
  };

  return (
    <div className={style.Container}>
      <div className={style.leftWrapper}>
        <div className={style.leftWrapperSvg}>
          <img src={InfoDate[name].png} alt="logo"></img>
        </div>
        <div className={style.leftWrapperValue}>
          <div className={style.leftWrapperValueIncrease}>
          <div className={style.leftWrapperValueIncreaseUp}> {isUnits()}</div>
          <div className={style.leftWrapperValueIncreaseDown}> {isIncrease()}</div>
          </div>
          {value}
        </div>
      </div>
      <div className={style.rightWrapper}>
        <div className={style.rightWrapperInfoContentUa}>
          <span>{InfoDate[name].ua.toUpperCase()}</span>
        </div>
        <div className={style.rightWrapperInfoContentEn}>
          <span>{InfoDate[name].en.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
