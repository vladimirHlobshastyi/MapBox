import React, { FC, useContext } from 'react';
import style from './Statistic.module.css';
import emblem from './img/mil-logo.svg';
import Info from '../../components/Info/Info';
import { StatisticContext } from '../../providers/StatisticProvider';
import Loader from '../../components/Loader';
import Button from '../../components/Button/Button';
import { IsIosEventsContext } from '../../providers/IsIosProvaider';

const Statistic: FC<{}> = (): JSX.Element => {
  const { date, statsData } = useContext(StatisticContext);
  const { isIosProviderProp } = useContext(IsIosEventsContext);
  let reverseDate = date?.split('-').reverse().join('-');
  const myRef = React.useRef<HTMLDivElement>(null);

  if (!statsData?.stats) {
    return <Loader />;
  }
  return (
    <div className={style.NavbarBackgroundImage}>
      {!isIosProviderProp ? (
        <div className={style.ButtonContainer}>
          <Button refProp={myRef} isStatistic={true} />
        </div>
      ) : (
        <></>
      )}
      <div className={style.ContainerWrapper}>
        <div className={style.ContainerWrapperScreenshot} ref={myRef}>
          <div className={style.ContainerWrapperScreenshotHeader}>
            <div className={style.ContainerWrapperScreenshotHeaderEmblem}>
              <a href="https://www.mil.gov.ua">
                <img src={emblem} alt="ZSU logo" />
              </a>
            </div>
            <div className={style.ContainerWrapperScreenshotHeaderInfo}>
              <div className={style.ContainerWrapperScreenshotHeaderInfoH}>
                <h2>ГЕНЕРАЛЬНИЙ ШТАБ ЗС УКРАЇНИ</h2>
                <h1>ІНФОРМУЄ</h1>
              </div>
              <div className={style.ContainerWrapperScreenshotHeaderInfoSpan}>
                <div
                  className={style.ContainerWrapperScreenshotHeaderInfoSpanDate}
                >
                  <div
                    className={
                      style.ContainerWrapperScreenshotHeaderInfoSpanDateEl
                    }
                  >
                    <span>ПРОТЯГОМ 24.02-</span>
                  </div>
                  <div
                    className={
                      style.ContainerWrapperScreenshotHeaderInfoSpanDateEl
                    }
                  >
                    <h2>{reverseDate}</h2>
                  </div>
                </div>
                <span>ОРІЄНТОВНІ ВТРАТИ ПРОТИВНИКА СКЛАЛИ:</span>
              </div>
            </div>
          </div>
          <div className={style.Content}>
            {statsData?.stats.map((statsValue, index) => {
              return (
                <Info
                  stats={statsValue[1]}
                  name={statsValue[0]}
                  key={statsValue[0]}
                  increase={statsData?.increase[index][1]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
