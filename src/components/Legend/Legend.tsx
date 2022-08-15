import React, { useContext } from 'react';
import { EventsContext } from '../../providers/AlertProvider';
import Counter from '../Counter/Counter';
import Tag from '../Tag/Tag';
import style from './Legend.module.css';

const Legend = () => {
  const { timerValue, isLoading } = useContext(EventsContext) || {};

  return (
    <div className={style.Legend}>
      <Tag color={'red'} text={'Тривога в регіоні'} />
      <Tag color={'green'} text={'Тривога відсутня'} />
      <Tag color={'grey'} text={'Окуповані регіони'} />

      <div className={style.RefreshMessage}>
        <Counter value={timerValue} isLoading={!!isLoading} />
      </div>
    </div>
  );
};

export default Legend;
