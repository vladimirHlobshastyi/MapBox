import React, { useContext } from 'react';
import { EventsContext } from '../../providers/AlertProvider';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';
import style from './Legend.module.css';
import svgIcon from './svg/refresh.svg';


const Legend = () => {
  const { timerValue, isLoading } = useContext(EventsContext) || {};
  const { updateAlerts } = useContext(EventsContext);
  return (
    <div className={style.Legend} onClick={updateAlerts}>
      <div className={style.LegendRefresh}>
        <img src={svgIcon} alt="refresh" /></div>
      <Tag color={'red'} text={'Тривога в регіоні'} />
      <Tag color={'grey'} text={'Тривога відсутня'} />

      <div className={style.RefreshMessage}>
        <Counter value={timerValue} isLoading={!!isLoading} />
      </div>
    </div>
  );
};

export default Legend;
