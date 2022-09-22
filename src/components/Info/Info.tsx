import React, { FC } from 'react';
import style from './Info.module.css';
import { InfoDate } from './InfoDate';

const Info: FC<{
  value: number,
  name: string,
}> = ({ value, name }): JSX.Element => {
  const isUnits = () => (name === 'personnel_units' ? <span>~</span> : <></>);

  return (
    <div className={style.Container}>
      <div className={style.leftWrapper}>
        <div className={style.leftWrapperSvg}>
          <img src={InfoDate[name].png} alt="logo"></img>
        </div>
        <div className={style.leftWrapperValue}>
          {isUnits()}
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
