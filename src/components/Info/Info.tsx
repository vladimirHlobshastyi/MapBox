import React, { FC } from 'react';
import { statistikData } from '../../providers/StatistikProvider.types';
import style from './Info.module.css';
import { InfoDate } from './InfoDate';


const Info: FC<{
  value: number,
  name: statistikData,
}> = ({ value, name }): JSX.Element => {
  const isUnits = () => (name === 'personnel_units' ? <span>~</span> : <></>);

  return (
    <div className={style.Container}>
      <div className={style.Value}>
        {isUnits()}
        {value}
      </div>
      <div className={style.InfoContent}>
        <div className={style.InfoContentUa}>
          <span>{InfoDate[name].ua.toUpperCase()}</span>
        </div>
        <div className={style.InfoContentEn}>
          <span>{InfoDate[name].en.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
