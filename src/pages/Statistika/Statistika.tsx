import React, { FC, useContext } from 'react';
import style from './Statistika.module.css';
import emblem from './img/mil-logo.svg';
import Info from '../../components/Info/Info';
import { StatistikContext } from '../../providers/StatistikProvider';
import Loader from '../../components/Loader';
import { statistikData } from '../../providers/StatistikProvider.types';

const Statistika: FC<{}> = (): JSX.Element => {
  const { stats, date } = useContext(StatistikContext);
  debugger;

  if (!date) {
    return <Loader />;
  }
  return (
    <div className={style.Container}>
      <div className={style.Header}>
        <div className={style.HeaderEmblem}>
          <a href="https://www.mil.gov.ua">
            <img src={emblem} alt="ZSU logo" />
          </a>
        </div>
        <div className={style.HeaderInfo}>
          <div className={style.HeaderInfoH}>
            <h2>ГЕНЕРАЛЬНИЙ ШТАБ ЗС УКРАЇНИ</h2>
            <h1>ІНФОРМУЄ</h1>
          </div>
          <div className={style.HeaderInfoSpan}>
            <span>
              ПРОТЯГОМ 24.02-<h2>{date}</h2>
            </span>
            <span>ОРІЄНТОВНІ ВТРАТИ ПРОТИВНИКА СКЛАЛИ:</span>
          </div>
        </div>
      </div>
      <div className={style.Content}>
        {Object.keys(stats).map((it: statistikData) => {
          return <Info name={it} value={stats[it]} key={it} />;
        })}
      </div>
    </div>
  );
};
export default Statistika;
