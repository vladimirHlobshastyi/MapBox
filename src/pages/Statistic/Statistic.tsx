import React, { FC, useContext } from 'react';
import style from './Statistic.module.css';
import emblem from './img/mil-logo.svg';
import Info from '../../components/Info/Info';
import { StatisticContext } from '../../providers/StatisticProvider';
import Loader from '../../components/Loader';
import Button from '../../components/Button/Button';

const Statistic: FC<{}> = (): JSX.Element => {
  const { date, statsData } = useContext(StatisticContext);
  let reverseDate = date?.split('-').reverse().join('-');
  const myRef = React.useRef<HTMLDivElement>(null);

  if (!date) {
    return <Loader />;
  }

  return (
    <>
      <div className={style.test}>
        <Button refProp={myRef} />
      </div>
      <div className={style.Container} ref={myRef}>
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
                ПРОТЯГОМ 24.02-<h2>{reverseDate}</h2>
              </span>
              <span>ОРІЄНТОВНІ ВТРАТИ ПРОТИВНИКА СКЛАЛИ:</span>
            </div>
          </div>
        </div>
        <div className={style.Content}>
          {statsData?.map((statsValue) => {
            return (
              <Info
                value={statsValue[1]}
                name={statsValue[0]}
                key={statsValue[0]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Statistic;
