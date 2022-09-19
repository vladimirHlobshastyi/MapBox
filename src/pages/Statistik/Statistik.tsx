import React, { FC } from 'react';
import style from './Statistik.module.css';
import emblem from './img/zsu.png';
import Info from '../../components/Info/Info';

const Statistik: FC<{}> = (): JSX.Element => {
  return (
    <div className={style.Container}>
      <div className={style.Header}>
        <div className={style.HeaderEmblem}>
          <img src={emblem} alt="emblema" />
        </div>
        <div className={style.HeaderInfo}>
          <div className={style.HeaderInfoH}>
            <h2>ГЕНЕРАЛЬНИЙ ШТАБ ЗС УКРАЇНИ</h2>
            <h1>ІНФОРМУЄ</h1>
          </div>
          <div className={style.HeaderInfoSpan}>
            <span>ПРОТЯГОМ 24.02-<h2>{'25.25.2025'/* new Date() */}</h2></span>
            <span>ОРІЄНТОВНІ ВТРАТИ ПРОТИВНИКА СКЛАЛИ:</span>
          </div>
        </div>
      </div>
      <div className={style.Content}>
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
    </div>
  );
};

export default Statistik;
